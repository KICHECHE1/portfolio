# Contact page and message delivery

The contact page uses a server-rendered editorial layout and a small client-side form. It reuses the shared theme, typography, navigation, footer, Motion reveals, and shadcn inputs. No form or email dependencies were added.

## Public details

`src/lib/contact-details.ts` holds the email address already present in the original portfolio. Both the contact page and footer read it. LinkedIn and GitHub are explicitly `null` until verified personal URLs are provided; missing profiles are omitted from the interface. Additional verified professional profiles can be added to `otherProfiles`.

The existing public address has been preserved, but ownership and deliverability of that inbox have not been independently verified. Set the public address to your actual inbox if needed.

## Enable delivery

There was no existing delivery service or credential configuration in the project. The new endpoint uses Resend's HTTPS API through server-side `fetch`.

1. Configure a verified sending domain in your Resend account and create a sending API key.
2. Copy `.env.example` to `.env.local` for development, or set the variables in your deployment's environment.
3. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a plain mailbox on the verified sending domain), and `CONTACT_TO_EMAIL` (your actual receiving inbox).
4. Restart the development server or redeploy with these server-side variables. Configuration is read at request time rather than embedded during the build.
5. Once configured, send an intentional test from the browser and verify receipt in the actual inbox and provider logs. Automated checks use mocked transport and never send real email.

No recipient is inferred from the public email address. Never use `NEXT_PUBLIC_` for delivery variables. No credentials or provider errors are returned to the browser or logged by the endpoint.

Without complete, syntactically valid configuration, the page displays an honest unavailable notice with an email link and disables online submission. Direct requests to the endpoint return `503`; they never return a success confirmation. Configuration readiness cannot prove that a key, sender domain, or destination is valid: actual provider failures remain errors.

## Submission behavior

`POST /api/contact` accepts JSON containing `fullName`, `email`, `subject`, `message`, an empty `website` honeypot, and a UUID v4 `requestId`.

- Client and server share required-field, length, email, and control-character validation.
- Error messages connect to their fields with `aria-describedby`; submission focuses the first invalid field. Network and server errors preserve message text.
- The form has loading feedback and a synchronous duplicate-submission guard. Retries of an unchanged message reuse the same request ID, which becomes Resend's idempotency key. Provider idempotency has a retention window; this is not permanent deduplication.
- A provider success response must contain a message ID before the endpoint reports that the message was **accepted for sending**. This is not a guarantee of inbox delivery.
- Plain text is sent, with the visitor's address as `reply_to`. User input never determines the sender or recipient. The server transport times out after 10 seconds; the client after 15 seconds. A timeout can leave delivery uncertain, so retries reuse the ID.
- The application does not persist submissions or write their content into logs. Resend processes the message as the configured delivery provider.

## Abuse controls and deployment

The endpoint requires a matching `Origin`, JSON content, a valid request ID, and an empty honeypot. It bounds request-body reads to 32 KiB, including streamed requests, and limits field lengths. If a trusted reverse proxy changes the origin Next sees, set `CONTACT_ALLOWED_ORIGIN` to the exact public origin. Preview domains need their own matching configuration.

Rate limiting uses bounded, in-memory fixed windows (15 minutes). With no trusted client-IP header configured, all visitors share 30 attempts per process per window. Setting `CONTACT_TRUSTED_IP_HEADER` enables five attempts per validated IP per window. Only configure a header that your hosting proxy **overwrites**, rather than an arbitrary client-supplied forwarded header. IP keys are hashed in memory. Invalid headers fall back to the shared bucket.

The map holds at most 1,000 active keys and rejects new keys at capacity. Limits survive development reloads, but reset on process restart and are independent across workers or serverless instances. For a public deployment with multiple instances or significant traffic, replace this store with a shared rate-limit service or enforce limits at the hosting gateway. Origin checks and honeypots do not stop determined automated clients.

## Validation

- `npm run test:contact` uses Node's built-in test runner and TypeScript stripping (Node 22.6+), with no test dependencies. It exercises validation, bounded body reads, rate limits, and mocked delivery acceptance/failure/idempotency behavior.
- `npm run typecheck` checks the application.
- `npm run build` checks the production build.
- Browser QA covers both themes and mobile/tablet/desktop layouts, keyboard validation, reduced motion, unavailable delivery, and configured form states using intercepted responses. No real email is sent by those checks.

API reference: [Resend send email](https://resend.com/docs/api-reference/emails/send-email), [idempotency](https://resend.com/docs/dashboard/emails/idempotency-keys).
