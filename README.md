# Travoler

A production-ready React landing page for **Travoler** — a B2B platform
for flight wholesalers & Umrah operators — converted from the "Royal · Blue &
Gold" design mockups (Deep + Light).

Built with **Vite + React + TypeScript + Tailwind CSS + shadcn/ui**.

## Features

- 🌗 **Light & dark mode** — the two design palettes ("Light" and "Deep")
  wired to CSS variables, with a toggle in the navbar. Choice persists in
  `localStorage` and respects the OS preference on first visit.
- 🔐 **Login modal** — email/password with inline validation, show/hide
  password and a simulated auth flow.
- 📅 **Book a demo modal** — multi-field form with validation, interest
  selector and a success state.
- 🧩 **shadcn/ui components** — `button`, `dialog`, `input`, `label`, `tabs`
  (Radix primitives, copied into `src/components/ui`).
- 📱 **Fully responsive** — the fixed 1440px mockup rebuilt with a fluid,
  mobile-first layout and a mobile nav menu.
- ⚡ Interactive pricing (monthly/yearly toggle) and a testimonial carousel.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Project structure

```
src/
├── App.tsx                     # page composition + providers
├── index.css                   # design tokens (light + dark) as CSS variables
├── lib/utils.ts                # cn() class helper
├── providers/
│   ├── theme-provider.tsx      # dark/light state + localStorage
│   └── modal-provider.tsx      # shared login/demo modal state
├── components/
│   ├── ui/                     # shadcn primitives (button, dialog, input, label, tabs)
│   ├── sections/               # navbar, hero, modules, features, pricing, footer, …
│   ├── modals/                 # login-modal, demo-modal
│   ├── logo.tsx
│   ├── section-heading.tsx
│   └── theme-toggle.tsx
```

## Theming

All colors live as HSL CSS variables in `src/index.css` under `:root` (light)
and `.dark` (dark), exposed to Tailwind in `tailwind.config.js`. Adjust the
brand there — e.g. `--gold`, `--brand-blue`, `--brand-navy` — and the whole
site follows. Add more shadcn components with `npx shadcn@latest add <name>`.

## Adding a real backend

The modals simulate submission with a timeout in `login-modal.tsx` and
`demo-modal.tsx`. Replace the `setTimeout(...)` blocks with your API calls
(`fetch`/`axios`) to wire up real authentication and lead capture.
# travoler
