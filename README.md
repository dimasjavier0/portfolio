# Dimas Rodríguez — Portfolio

Personal portfolio of **Dimas Javier Rodríguez Cabrera**, Software Developer.

Built with **React + TypeScript + Vite**, plain CSS (custom properties for dark/light themes), and deployed as a **Cloudflare Worker** with static assets.
Colors and typography follow the AutoMarket brand manual (aqua `#129FB1`, fuchsia `#C5299B`, navy `#001A70`; Open Sans + Roboto).

## Features

- Typewriter animation cycling through roles under the name
- Hero photo framed with guide lines, floating emoji stickers, and an "open to work" badge
- "Beyond the Code" section with hobbies, motto, and pet
- English / Spanish toggle (English by default, choice remembered)
- Dark / light theme switch
- Navbar links that smooth-scroll to each section, with the active section highlighted
- Scroll-reveal and entrance animations (respects `prefers-reduced-motion`)
- Technical skills by category, showing each technology's name with its logo
- "Ask about Dimas" AI chat: free-text questions are answered by Mistral Small 3.1 on Cloudflare Workers AI (free tier), restricted to facts from the site content; suggestion chips and any AI failure fall back to instant rule-based answers
- Contact section with an "Email Me" button plus the address visible and copyable as a fallback

## Development

```bash
npm install
npm run dev      # local server
npm run build    # production build in dist/ (also type-checks worker/)
npm run preview:full  # site + /api/chat locally via wrangler (needs `npx wrangler login`; uses real Workers AI quota)
```

`npm run dev` has no `/api/chat`, so the chat uses its rule-based answers there.

## Editing content

All text lives in `src/content.ts` (both languages). Rule-based chat answers live in `src/chatKnowledge.ts`. The AI chat's fact sheet is generated from both files by `src/knowledge.ts`, so it stays in sync automatically; its system prompt and guardrails are in `worker/chat.ts`.

## Deployment (Cloudflare Workers Builds)

The Worker `portfolio` is connected to this repo: every push to `main` builds and deploys to https://portfolio.dimasjavier-0.workers.dev

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- `wrangler.toml`: `name` must match the Worker name in the dashboard; `[assets]` serves `dist/` and sends `/api/*` to `worker/index.ts` first; `[ai]` declares the Workers AI binding
- On the Workers Free plan the AI quota is 10,000 neurons/day (~100+ chat answers); when it runs out, requests fail and the chat falls back to rule-based answers — it never generates charges

Technology logos from [Devicon](https://devicon.dev/) (MIT).
