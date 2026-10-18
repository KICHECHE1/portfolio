import { ContactBodyError, readContactBody } from "@/lib/contact/body";
import { sendContactMessage } from "@/lib/contact/delivery";
import {
  contactRateLimiter, getContactClientKey, getContactDeliveryConfig, isAllowedContactOrigin,
} from "@/lib/contact/server";
import { isValidRequestId, validateContactMessage, type ContactResponse } from "@/lib/contact/validation";

export const runtime = "nodejs";

function reply(body: ContactResponse, status: number, headers?: Record<string, string>) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

export async function POST(request: Request) {
  if (!isAllowedContactOrigin(request)) {
    return reply({ ok: false, code: "ORIGIN_NOT_ALLOWED", message: "Please reload the contact page and try again." }, 403);
  }
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return reply({ ok: false, code: "INVALID_REQUEST", message: "This message could not be submitted. Please try again." }, 415);
  }
  const client = getContactClientKey(request);
  const limit = contactRateLimiter.consume(client.key, client.limit);
  if (!limit.allowed) {
    return reply({ ok: false, code: "RATE_LIMITED", message: "Too many attempts. Please wait before trying again, or use email." }, 429, { "Retry-After": String(limit.retryAfter) });
  }

  let body: unknown;
  try {
    body = await readContactBody(request);
  } catch (error) {
    const status = error instanceof ContactBodyError ? error.status : 400;
    return reply({ ok: false, code: "INVALID_REQUEST", message: status === 413 ? "This message is too large. Please shorten it and try again." : "This message could not be read. Please try again." }, status);
  }

  const validation = validateContactMessage(body);
  if (!validation.ok) {
    return reply({ ok: false, code: "VALIDATION_ERROR", message: "Please check the highlighted fields.", fieldErrors: validation.errors }, 422);
  }
  const envelope = body as Record<string, unknown>;
  if ((envelope.website !== undefined && envelope.website !== "") || !isValidRequestId(envelope.requestId)) {
    return reply({ ok: false, code: "INVALID_REQUEST", message: "This message could not be submitted. Please reload the page and try again." }, 400);
  }
  const config = getContactDeliveryConfig();
  if (!config) {
    return reply({ ok: false, code: "DELIVERY_UNAVAILABLE", message: "Online messages are currently unavailable. Please use the email link to get in touch." }, 503);
  }
  const accepted = await sendContactMessage(validation.data, config, envelope.requestId);
  if (!accepted) {
    return reply({ ok: false, code: "DELIVERY_FAILED", message: "I couldn't confirm that your message was sent. Please try again or email me directly." }, 502);
  }
  return reply({ ok: true, code: "ACCEPTED", message: "Thanks for reaching out. Your message has been accepted for sending." }, 200);
}
