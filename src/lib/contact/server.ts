import "server-only";

import { createHash } from "node:crypto";
import { isIP } from "node:net";
import type { ContactDeliveryConfig } from "./delivery";
import { ContactRateLimiter } from "./rate-limit";
import { isValidEmail } from "./validation";

export function getContactDeliveryConfig(): ContactDeliveryConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!apiKey || !from || !to || !isValidEmail(from) || !isValidEmail(to)) return null;
  return { apiKey, from, to };
}

export function isAllowedContactOrigin(request: Request): boolean {
  try {
    const expected = new URL(process.env.CONTACT_ALLOWED_ORIGIN || request.url).origin;
    const supplied = request.headers.get("origin");
    return Boolean(supplied && new URL(supplied).origin === expected);
  } catch {
    return false;
  }
}

export function getContactClientKey(request: Request): { key: string; limit: number } {
  // Trust an IP header only after the deployment's proxy is configured to
  // overwrite it. Unconfigured hosts use a conservative shared fallback.
  const trustedHeader = process.env.CONTACT_TRUSTED_IP_HEADER?.trim();
  const value = trustedHeader && /^[a-z0-9-]+$/i.test(trustedHeader)
    ? request.headers.get(trustedHeader)?.split(",")[0].trim() : undefined;
  if (value && isIP(value)) {
    return { key: createHash("sha256").update(value).digest("hex"), limit: 5 };
  }
  return { key: "shared-fallback", limit: 30 };
}

const contactGlobal = globalThis as typeof globalThis & { portfolioContactLimiter?: ContactRateLimiter };

// Per-process storage survives development reloads. See docs/contact.md for
// multi-instance deployments and trusted-proxy configuration.
export const contactRateLimiter = contactGlobal.portfolioContactLimiter ??= new ContactRateLimiter({
  limit: 5, windowMs: 15 * 60 * 1000, maxEntries: 1000,
});
