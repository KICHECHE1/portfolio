import assert from "node:assert/strict";
import { test } from "node:test";
import { CONTACT_LIMITS, contactFields, isValidRequestId, validateContactMessage } from "../src/lib/contact/validation.ts";
import { ContactBodyError, MAX_CONTACT_BODY_BYTES, readContactBody } from "../src/lib/contact/body.ts";
import { ContactRateLimiter } from "../src/lib/contact/rate-limit.ts";
import { sendContactMessage } from "../src/lib/contact/delivery.ts";

const message = { fullName: "Test Visitor", email: "visitor@example.invalid", subject: "A technical conversation", message: "Hello,\nI'd like to discuss a project." };
const requestId = "7107ba19-f65e-4050-ab1c-1606822d6af0";
const config = { apiKey: "test-only-not-a-real-key", from: "sender@example.invalid", to: "inbox@example.invalid" };

test("validation trims text, preserves Unicode and normalizes message newlines", () => {
  assert.deepEqual(validateContactMessage({ ...message, fullName: "  Zoë 李  ", message: " Hello\r\nthere. " }), {
    ok: true, data: { ...message, fullName: "Zoë 李", message: "Hello\nthere." },
  });
});

test("all required fields reject missing values and non-string payloads", () => {
  for (const input of [undefined, null, [], "text", {}, { fullName: 3, email: [], subject: {}, message: false }]) {
    const result = validateContactMessage(input);
    assert.equal(result.ok, false);
    if (!result.ok) assert.deepEqual(Object.keys(result.errors), contactFields);
  }
});

test("email validation rejects malformed addresses and header injection", () => {
  for (const email of ["missing-at", "a@", "a@example", "a b@example.invalid", "Name <a@example.invalid>", "a@example.invalid\r\nBcc: other@example.invalid"]) {
    const result = validateContactMessage({ ...message, email });
    assert.equal(result.ok, false, email);
    if (!result.ok) assert.ok(result.errors.email);
  }
});

test("length and control-character restrictions apply on the server", () => {
  for (const field of contactFields) {
    const result = validateContactMessage({ ...message, [field]: "x".repeat(CONTACT_LIMITS[field] + 1) });
    assert.equal(result.ok, false);
    if (!result.ok) assert.ok(result.errors[field]);
  }
  for (const field of ["fullName", "subject"]) assert.equal(validateContactMessage({ ...message, [field]: "one\ntwo" }).ok, false);
  assert.equal(validateContactMessage({ ...message, message: "bad\u0000text" }).ok, false);
});

test("request IDs must be UUID v4 values", () => {
  assert.equal(isValidRequestId(requestId), true);
  for (const input of [undefined, 1, "", "arbitrary-key", requestId.replace("4050", "1050")]) assert.equal(isValidRequestId(input), false);
});

test("bounded request reader accepts valid JSON and rejects malformed data", async () => {
  const makeRequest = (body: string) => new Request("https://portfolio.example/api/contact", { method: "POST", body });
  assert.deepEqual(await readContactBody(makeRequest(JSON.stringify(message))), message);
  await assert.rejects(readContactBody(makeRequest("{bad")), (error: unknown) => error instanceof ContactBodyError && error.status === 400);
  await assert.rejects(readContactBody(new Request("https://portfolio.example", { method: "POST" })), (error: unknown) => error instanceof ContactBodyError && error.status === 400);
});

test("request reader caps both declared length and streamed bytes", async () => {
  const tooLarge = new Request("https://portfolio.example", { method: "POST", headers: { "Content-Length": String(MAX_CONTACT_BODY_BYTES + 1) }, body: "{}" });
  await assert.rejects(readContactBody(tooLarge), (error: unknown) => error instanceof ContactBodyError && error.status === 413);
  let cancelled = false;
  const stream = new ReadableStream({
    start(controller) { controller.enqueue(new Uint8Array(MAX_CONTACT_BODY_BYTES)); controller.enqueue(new Uint8Array(1)); },
    cancel() { cancelled = true; },
  });
  const streamed = new Request("https://portfolio.example", { method: "POST", body: stream, duplex: "half" } as RequestInit);
  await assert.rejects(readContactBody(streamed), (error: unknown) => error instanceof ContactBodyError && error.status === 413);
  assert.equal(cancelled, true);
});

test("rate limits isolate clients, return retry time and reset after expiry", () => {
  let now = 0;
  const limiter = new ContactRateLimiter({ limit: 2, windowMs: 15_000, now: () => now });
  assert.equal(limiter.consume("a").allowed, true);
  assert.equal(limiter.consume("a").allowed, true);
  now = 500;
  assert.deepEqual(limiter.consume("a"), { allowed: false, retryAfter: 15 });
  assert.equal(limiter.consume("b").allowed, true);
  now = 15_000;
  assert.equal(limiter.consume("a").allowed, true);
});

test("limiter bounds storage, fails closed at capacity and prunes expired keys", () => {
  let now = 0;
  const limiter = new ContactRateLimiter({ limit: 1, windowMs: 1000, maxEntries: 2, now: () => now });
  assert.equal(limiter.consume("a").allowed, true);
  assert.equal(limiter.consume("b", 2).allowed, true);
  assert.equal(limiter.consume("b", 2).allowed, true);
  assert.equal(limiter.consume("b", 2).allowed, false);
  assert.equal(limiter.consume("c").allowed, false);
  now = 1000;
  assert.equal(limiter.consume("c").allowed, true);
});

test("delivery uses a private sender and recipient, plain text, reply-to, timeout and idempotency key", async () => {
  let calls = 0;
  const fakeFetch: typeof fetch = async (url, init) => {
    calls++;
    assert.equal(url, "https://api.resend.com/emails");
    assert.equal(init?.method, "POST");
    assert.equal(new Headers(init?.headers).get("Idempotency-Key"), `portfolio-contact/${requestId}`);
    assert.equal(new Headers(init?.headers).get("Authorization"), `Bearer ${config.apiKey}`);
    assert.ok(init?.signal instanceof AbortSignal);
    const body = JSON.parse(String(init?.body));
    assert.equal(body.from, `Juma Saidi <${config.from}>`);
    assert.deepEqual(body.to, [config.to]);
    assert.equal(body.reply_to, message.email);
    assert.equal(body.subject, `[Portfolio] ${message.subject}`);
    assert.equal(body.text, `From: ${message.fullName}\nEmail: ${message.email}\n\n${message.message}`);
    assert.equal(body.html, undefined);
    return Response.json({ id: "mock-provider-id" });
  };
  assert.equal(await sendContactMessage(message, config, requestId, fakeFetch), true);
  assert.equal(calls, 1);
});

test("delivery never reports acceptance for failures or a missing provider message ID", async () => {
  for (const response of [Response.json({ error: "unauthorized" }, { status: 401 }), Response.json({}), Response.json({ id: "" }), Response.json({ id: 2 }), new Response("bad json")]) {
    assert.equal(await sendContactMessage(message, config, requestId, async () => response), false);
  }
  assert.equal(await sendContactMessage(message, config, requestId, async () => { throw new DOMException("Timed out", "TimeoutError"); }), false);
});
