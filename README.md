# Dimas Rodríguez — Portfolio

Personal portfolio of **Dimas Javier Rodríguez Cabrera**, Software Developer.

Built with **React + TypeScript + Vite**, plain CSS (custom properties for dark/light themes), and deployed on **Cloudflare Pages**.
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
- "Ask about Dimas" chat assistant answering from the resume (rule-based, runs in the browser)
- Contact section with an "Email Me" button plus the address visible and copyable as a fallback

## Development

```bash
npm install
npm run dev      # local server
npm run build    # production build in dist/
```

## Editing content

All text lives in `src/content.ts` (both languages). Chat answers live in `src/chatKnowledge.ts`.

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`

Technology logos from [Devicon](https://devicon.dev/) (MIT).
