This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form leads

The "Request a Free Demo" form on `/contact` posts to `POST /api/contact`
(`src/app/api/contact/route.ts`). The route validates the fields, drops
submissions that fill the hidden `website` honeypot, allows 5 submissions per
IP per 10 minutes, and emails the lead through [Resend](https://resend.com)
with the visitor's address as Reply-To. If delivery fails, the visitor sees an
error with the phone and email fallback, never the "Thank You" screen.

| Variable             | Required | Purpose                                                                 |
| -------------------- | -------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`     | yes      | Resend API key with sending access.                                     |
| `CONTACT_TO_EMAIL`   | yes      | Inbox(es) that receive leads; comma-separated.                          |
| `CONTACT_FROM_EMAIL` | no       | Sender; defaults to `Sedulus Website <onboarding@resend.dev>`.          |

`sedulus.in` is verified in Resend, so the sender can be any `@sedulus.in`
address (`.env.example` uses `leads@sedulus.in`). Leads go to
`joysinha@sedulus.in`; `hello@sedulus.in` has no mailbox and bounces. Resend
accepting a send is not delivery: if the inbox ever stops existing, leads
bounce after the visitor has seen "Thank You", and only the Resend dashboard
(Emails → status) shows it.

**Local:** `cp .env.example .env.local` and fill it in. `.env*` files are
gitignored and excluded from the Docker build context.

**Production:** the values live only on the EC2 host, in
`/home/ubuntu/seduluspos/.env` (same format as `.env.example`).
`docker-compose.yml` passes them into the container, and the deploy workflow
stops before pulling if `RESEND_API_KEY` or `CONTACT_TO_EMAIL` is missing
there. Create it once over SSH, then redeploy:

```bash
cd /home/ubuntu/seduluspos && nano .env && chmod 600 .env
docker compose up -d
```

If Resend rejects or times out a lead, it is logged in full so it can be
recovered: `docker logs seduluspos-frontend 2>&1 | grep "lead not delivered"`.
The per-IP limit reads the last `X-Forwarded-For` entry, so the nginx proxy
should send `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
