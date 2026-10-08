# saltmarsh

Saltmarsh is a minimal SaaS project workspace — sign up, log in, create and complete tasks, invite teammates, upgrade.

**Stack:** Next.js 15 (App Router, TypeScript)

It is intentionally small.

## Key user actions

sign up · log in · create task · complete task · invite · upgrade

## Running it

```bash
npm install
npm run dev   # http://localhost:3000
```

## Digital experience analytics

Contentsquare's tag is loaded in `app/layout.tsx` (session replay, heatmaps and journey analysis are automatic). `app/experience.ts` sets the user and plan as custom variables and pushes dynamic variables for `sign_up`, `log_in`, `create_task`, `complete_task`, `invite_member`, `upgrade_plan`; the email field is masked with `data-cs-mask`. The tag id comes from `NEXT_PUBLIC_CONTENTSQUARE_TAG_ID` (see `.env.example`).
