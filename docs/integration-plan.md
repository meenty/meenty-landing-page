# Integration plan: waitlist + analytics

Status: **proposed** (not yet implemented)

This document lays out how to wire the landing page's waitlist form to a real
email/waitlist service and add cookieless analytics. It's written to the repo so
the work is self-contained and reviewable.

---

## 1. Goal

Turn the current "fake success" waitlist into a real capture pipeline, and add
privacy-friendly analytics, without compromising the site's stated values
("No catch", "Stay human", no ads, no tracking).

Two deliverables:

1. **Waitlist** — submit `{ email, role, share }` to a real service.
2. **Analytics** — count visits and signups with a cookieless, EU-friendly tool.

---

## 2. Current state

- Static Vite site, no backend.
- `src/lib/waitlist.js` validates the email and prints a success message, but the
  payload is dropped at the `// TODO` on line 43.
- There are **two** forms (hero + close), both wired through `setupWaitlist()`.
- The app is fully client-side, so **no server secret can live in the browser**.
  Anything shipped in the JS bundle is public.

---

## 3. Waitlist → Loops

**Recommendation:** [Loops](https://loops.so) (`loops.so`) — purpose-built for
waitlists, has a client-safe "forms" endpoint and first-class custom fields.

### 3.1 Endpoint

Loops exposes a form-submit endpoint that is designed to be called from the
browser with a public form ID (no secret API key in the client):

```
POST https://app.loops.so/api/newsletter-form/{FORM_ID}
Content-Type: application/json

{
  "email": "you@example.com",
  "userGroup": "waitlist",
  "learnOrTeach": "I want to learn",
  "share": "bread"
}
```

The `FORM_ID` is public (it appears on the hosted form anyway), so it's safe to
ship. A private API key is only needed for server-side management (bulk export,
triggers), which we keep out of the client.

### 3.2 Field mapping

| Form field        | Loops field      | Notes                                        |
| ----------------- | ---------------- | -------------------------------------------- |
| `email`           | `email`          | required                                     |
| role (learn/teach)| `learnOrTeach`   | custom field, the selected pill text         |
| share (optional)  | `share`          | custom field, free text                      |
| —                 | `userGroup`      | hardcoded `"waitlist"`                       |

### 3.3 Code changes

In `src/lib/waitlist.js`:

1. Read the form ID from Vite env (`import.meta.env.VITE_LOOPS_FORM_ID`).
2. Replace the `// TODO` with an async `fetch` to the endpoint.
3. Handle loading, success, and failure states in `.waitlist-msg` (it already
   has `aria-live="polite"`).
4. Keep the existing validation and the current copy on success; on network
   error, show a retry message instead of a false "you're on the list".

Pseudocode:

```js
async function submit() {
  // ... existing validation ...
  setStatus('loading')
  try {
    const res = await fetch(`https://app.loops.so/api/newsletter-form/${FORM_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, learnOrTeach: role, share })
    })
    if (!res.ok) throw new Error(res.status)
    setStatus('ok', "You're on the list. One email when we open -- ty for being early.")
    input.value = ''; if (shareEl) shareEl.value = ''
  } catch {
    setStatus('error', "Hmm, that didn't go through -- mind trying again?")
  }
}
```

### 3.4 Configuration

```bash
# .env.local (gitignored)
VITE_LOOPS_FORM_ID=xxxx
```

Note: `VITE_*` vars are **public**. Only put the public form ID here — never a
secret API key.

---

## 4. Analytics → Plausible

**Recommendation:** [Plausible](https://plausible.io) — cookieless, lightweight,
GDPR-friendly, and philosophically aligned with the site (no invasive tracking).

### 4.1 Setup

Add the script to `index.html` `<head>`:

```html
<script defer data-domain="meenty.app" src="https://plausible.io/js/script.js"></script>
```

### 4.2 Custom events

Track signups with a custom goal. Fire it on a successful waitlist submit
(inside `submit()` after the server responds OK):

```js
window.plausible?.('waitlist_signup', { props: { role } })
```

Create the matching goal named `waitlist_signup` in the Plausible dashboard.

### 4.3 Privacy notes

- Plausible is cookieless — no consent banner needed.
- Serves its own script (no third-party CDN dependencies beyond Plausible).
- Keep the domain list minimal; only the production domain should report.

---

## 5. Security posture

- **No secret keys in the client.** Loops form ID and Plausible domain are public
  by design. Anything needing a key (Loops API, transactional email) goes behind
  a serverless function (Cloudflare Workers / Vercel / Netlify Functions) later.
- Do **not** add `VITE_*` env vars that contain secrets; they are inlined into
  the bundle at build time.
- Keep `.env.local` in `.gitignore` (already covered by `*.local`).

---

## 6. Implementation checklist

- [ ] Add `VITE_LOOPS_FORM_ID` to `.env.local`.
- [ ] Replace the `// TODO` in `src/lib/waitlist.js` with the Loops `fetch`.
- [ ] Add loading / error / success states to `.waitlist-msg`.
- [ ] Add the Plausible snippet to `index.html`.
- [ ] Fire `waitlist_signup` goal on successful submit.
- [ ] Create the `waitlist_signup` goal + custom fields in Loops/Plausible dashboards.
- [ ] Test both forms (hero + close), invalid email, and network-failure paths.

---

## 7. Alternatives considered

| Tool | Why not chosen |
| ---- | -------------- |
| Formspree | Generic forms; weaker waitlist/CRM features, more friction for custom fields |
| Buttondown | Newsletter-first, waitlist is an afterthought |
| Custom backend | Overkill for a landing page; adds ops cost now |
| Google Analytics | Cookies + consent burden; conflicts with the site's values |
