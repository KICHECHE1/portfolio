import type { ContactMessage } from "./validation";

export interface ContactDeliveryConfig {
  apiKey: string;
  from: string;
  to: string;
}

export async function sendContactMessage(
  message: ContactMessage,
  config: ContactDeliveryConfig,
  requestId: string,
  fetcher: typeof fetch = fetch,
): Promise<boolean> {
  try {
    const response = await fetcher("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `portfolio-contact/${requestId}`,
      },
      body: JSON.stringify({
        from: `Juma Saidi <${config.from}>`,
        to: [config.to],
        reply_to: message.email,
        subject: `[Portfolio] ${message.subject}`,
        text: `From: ${message.fullName}\nEmail: ${message.email}\n\n${message.message}`,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!response.ok) return false;
    const result: unknown = await response.json();
    return Boolean(result && typeof result === "object" &&
      "id" in result && typeof result.id === "string" && result.id.length > 0);
  } catch {
    // Do not log message contents, credentials, or provider responses.
    return false;
  }
}
