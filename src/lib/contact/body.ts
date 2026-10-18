export const MAX_CONTACT_BODY_BYTES = 32 * 1024;

export class ContactBodyError extends Error {
  readonly status: 400 | 413;

  constructor(status: 400 | 413) {
    super(status === 413 ? "Request is too large." : "Invalid JSON request.");
    this.status = status;
  }
}

export async function readContactBody(request: Request): Promise<unknown> {
  const length = request.headers.get("content-length");
  if (length && (!/^\d+$/.test(length) || Number(length) > MAX_CONTACT_BODY_BYTES)) {
    throw new ContactBodyError(413);
  }
  const reader = request.body?.getReader();
  if (!reader) throw new ContactBodyError(400);
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > MAX_CONTACT_BODY_BYTES) {
        await reader.cancel();
        throw new ContactBodyError(413);
      }
      chunks.push(chunk.value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch (error) {
    if (error instanceof ContactBodyError) throw error;
    throw new ContactBodyError(400);
  } finally {
    reader.releaseLock();
  }
}
