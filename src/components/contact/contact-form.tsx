"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CONTACT_LIMITS, contactFields, validateContactMessage,
  type ContactErrors, type ContactField, type ContactResponse,
} from "@/lib/contact/validation";

type Feedback = { kind: "success" | "error"; message: string } | null;

export function ContactForm({ deliveryAvailable, email }: { deliveryAvailable: boolean; email: string }) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [pending, setPending] = useState(false);
  const submitting = useRef(false);
  // Reuse the key for retries of the same message after a lost response.
  const attempt = useRef<{ payload: string; id: string } | null>(null);

  function focusField(form: HTMLFormElement, fieldErrors: ContactErrors) {
    const first = contactFields.find((field) => fieldErrors[field]);
    if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
  }

  function clearFieldError(field: ContactField) {
    setErrors((current) => current[field] ? { ...current, [field]: undefined } : current);
    setFeedback(null);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!deliveryAvailable || submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const validation = validateContactMessage(Object.fromEntries(data));
    setFeedback(null);
    if (!validation.ok) {
      setErrors(validation.errors);
      // Let linked error descriptions render before moving screen-reader focus.
      requestAnimationFrame(() => focusField(form, validation.errors));
      return;
    }
    setErrors({});
    submitting.current = true;
    setPending(true);
    try {
      const payload = JSON.stringify(validation.data);
      if (!attempt.current || attempt.current.payload !== payload) {
        attempt.current = { payload, id: crypto.randomUUID() };
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...validation.data, website: data.get("website"), requestId: attempt.current.id }),
        signal: AbortSignal.timeout(15_000),
      });
      const result: ContactResponse = await response.json();
      if (!response.ok || !result.ok || result.code !== "ACCEPTED") {
        const fieldErrors = !result.ok ? result.fieldErrors : undefined;
        if (fieldErrors) setErrors(fieldErrors);
        setFeedback({ kind: "error", message: result.message || "Your message could not be confirmed. Please try again or use email." });
        // The fieldset is re-enabled after this handler finishes.
        if (fieldErrors) requestAnimationFrame(() => focusField(form, fieldErrors));
        return;
      }
      setFeedback({ kind: "success", message: result.message });
      form.reset();
      attempt.current = null;
    } catch {
      setFeedback({ kind: "error", message: "I couldn't confirm that your message was sent. Your text is still here; please retry or email me directly." });
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  const fieldProps = (field: ContactField) => ({
    id: `contact-${field}`,
    name: field,
    required: true,
    maxLength: CONTACT_LIMITS[field],
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    onChange: () => clearFieldError(field),
    className: "shadow-none disabled:opacity-100 md:text-base",
  });

  return (
    <form onSubmit={submit} noValidate aria-labelledby="message-title" aria-busy={pending}
      aria-describedby={!deliveryAvailable ? "contact-unavailable" : "contact-form-note"}
      className="rounded-2xl border border-border bg-secondary/35 p-5 sm:p-8 lg:p-9">
      <div className="mb-8">
        <h2 id="message-title" className="font-heading text-2xl font-semibold tracking-[-0.035em] sm:text-[1.75rem]">Send Me a Message.</h2>
        <p id="contact-form-note" className="mt-3 text-sm leading-6 text-muted-foreground">A little context goes a long way. All fields are required.</p>
      </div>

      {!deliveryAvailable && (
        <p id="contact-unavailable" className="mb-7 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-muted-foreground">
          Online message submission is currently unavailable. Please <a href={`mailto:${email}`} className="rounded-sm font-medium text-accent underline underline-offset-4">email me directly</a> to get in touch.
        </p>
      )}

      <fieldset disabled={!deliveryAvailable || pending} className="min-w-0 space-y-6">
        <legend className="sr-only">Your message</legend>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="space-y-2.5">
            <label htmlFor="contact-fullName" className="block text-sm font-medium">Full Name</label>
            <Input {...fieldProps("fullName")} type="text" autoComplete="name" />
            {errors.fullName && <FieldError field="fullName" message={errors.fullName} />}
          </div>
          <div className="space-y-2.5">
            <label htmlFor="contact-email" className="block text-sm font-medium">Email Address</label>
            <Input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" autoCapitalize="none" spellCheck={false} />
            {errors.email && <FieldError field="email" message={errors.email} />}
          </div>
        </div>
        <div className="space-y-2.5">
          <label htmlFor="contact-subject" className="block text-sm font-medium">Subject</label>
          <Input {...fieldProps("subject")} type="text" />
          {errors.subject && <FieldError field="subject" message={errors.subject} />}
        </div>
        <div className="space-y-2.5">
          <label htmlFor="contact-message" className="block text-sm font-medium">Message</label>
          <Textarea {...fieldProps("message")} rows={6} className="min-h-44 shadow-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 disabled:opacity-100 md:text-base" />
          {errors.message && <FieldError field="message" message={errors.message} />}
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input id="contact-website" name="website" type="text" autoComplete="off" tabIndex={-1} />
        </div>
      </fieldset>

      <div className="mt-6" aria-live="polite" aria-atomic="true">
        {feedback && (
          <p role={feedback.kind === "error" ? "alert" : "status"}
            className={`mb-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm leading-6 ${feedback.kind === "error" ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-primary/25 bg-primary/5 text-foreground"}`}>
            {feedback.kind === "success" && <Check size={17} className="mt-1 shrink-0 text-accent" aria-hidden="true" />}
            {feedback.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-56 text-xs leading-6 text-muted-foreground">Prefer email?{" "}<a href={`mailto:${email}`} className="inline-block rounded-sm text-accent underline underline-offset-4">Write directly.</a></p>
        <Button type="submit" size="lg" disabled={!deliveryAvailable || pending}
          className="group w-full shadow-none hover:shadow-none disabled:opacity-70 sm:w-auto">
          {pending ? <>Sending<LoaderCircle className="animate-spin motion-reduce:animate-none" aria-hidden="true" /></> : <>Send Message<ArrowRight className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" /></>}
        </Button>
      </div>
      <noscript><p className="mt-5 text-sm leading-6 text-muted-foreground">Please enable JavaScript to use this form, or <a href={`mailto:${email}`} className="text-accent underline underline-offset-4">send an email directly</a>.</p></noscript>
    </form>
  );
}

function FieldError({ field, message }: { field: ContactField; message: string }) {
  return <p id={`contact-${field}-error`} className="text-sm leading-6 text-destructive">{message}</p>;
}
