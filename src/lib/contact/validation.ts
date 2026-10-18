export const CONTACT_LIMITS = {
  fullName: 100,
  email: 254,
  subject: 160,
  message: 5000,
} as const;

export interface ContactMessage {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactField = keyof ContactMessage;
export type ContactErrors = Partial<Record<ContactField, string>>;
export const contactFields: readonly ContactField[] = ["fullName", "email", "subject", "message"];

export type ContactResponse =
  | { ok: true; code: "ACCEPTED"; message: string }
  | { ok: false; code: string; message: string; fieldErrors?: ContactErrors };

const singleLineControls = /[\u0000-\u001f\u007f]/;
const messageControls = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;

export function isValidEmail(value: string): boolean {
  return value.length <= CONTACT_LIMITS.email &&
    !singleLineControls.test(value) &&
    /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/.test(value);
}

export function isValidRequestId(value: unknown): value is string {
  return typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export function validateContactMessage(input: unknown):
  | { ok: true; data: ContactMessage }
  | { ok: false; errors: ContactErrors } {
  const source = input && typeof input === "object" && !Array.isArray(input)
    ? input as Record<string, unknown> : {};
  const values = Object.fromEntries(contactFields.map((field) => [
    field, typeof source[field] === "string" ? (source[field] as string).trim() : "",
  ])) as unknown as ContactMessage;
  const errors: ContactErrors = {};

  if (!values.fullName) errors.fullName = "Please enter your full name.";
  else if (values.fullName.length > CONTACT_LIMITS.fullName) errors.fullName = "Keep your name to 100 characters or fewer.";
  else if (singleLineControls.test(values.fullName)) errors.fullName = "Please enter your name on one line.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";

  if (!values.subject) errors.subject = "Please add a subject.";
  else if (values.subject.length > CONTACT_LIMITS.subject) errors.subject = "Keep the subject to 160 characters or fewer.";
  else if (singleLineControls.test(values.subject)) errors.subject = "Please enter the subject on one line.";

  if (!values.message) errors.message = "Please write a message.";
  else if (values.message.length > CONTACT_LIMITS.message) errors.message = "Keep your message to 5,000 characters or fewer.";
  else if (messageControls.test(values.message)) errors.message = "Please remove unsupported control characters.";

  return Object.keys(errors).length
    ? { ok: false, errors }
    : { ok: true, data: { ...values, message: values.message.replace(/\r\n?/g, "\n") } };
}
