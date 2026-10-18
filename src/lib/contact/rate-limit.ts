interface RateLimitOptions {
  limit: number;
  windowMs: number;
  maxEntries?: number;
  now?: () => number;
}

export class ContactRateLimiter {
  private readonly entries = new Map<string, { count: number; expiresAt: number }>();
  private readonly now: () => number;
  private readonly options: RateLimitOptions;

  constructor(options: RateLimitOptions) {
    this.options = options;
    this.now = options.now ?? Date.now;
  }

  consume(key: string, limit = this.options.limit): { allowed: boolean; retryAfter: number } {
    const now = this.now();
    let entry = this.entries.get(key);
    if (entry && entry.expiresAt <= now) {
      this.entries.delete(key);
      entry = undefined;
    }
    if (!entry) {
      for (const [storedKey, stored] of this.entries) {
        if (stored.expiresAt <= now) this.entries.delete(storedKey);
      }
      if (this.entries.size >= (this.options.maxEntries ?? 1000)) {
        return { allowed: false, retryAfter: Math.ceil(this.options.windowMs / 1000) };
      }
      entry = { count: 0, expiresAt: now + this.options.windowMs };
      this.entries.set(key, entry);
    }
    const retryAfter = Math.max(1, Math.ceil((entry.expiresAt - now) / 1000));
    if (entry.count >= limit) return { allowed: false, retryAfter };
    entry.count += 1;
    return { allowed: true, retryAfter };
  }
}
