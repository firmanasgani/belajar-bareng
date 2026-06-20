# AGENT.md — Project Rules for Agents

## What This Project Is
A wedding invitation website for Romeo & Juliet.
Space/spaceship theme. Next.js, TypeScript, Tailwind CSS, Framer Motion. Deploy to Vercel.

## Architecture at a Glance
```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page — composes all sections
│   └── globals.css       # Design tokens, keyframes, base styles
├── components/
│   ├── sections/         # Full-page sections (HeroSection, CountdownSection, etc.)
│   ├── ui/               # Reusable primitives (StarField, SectionWrapper, etc.)
│   └── layout/           # Navigation, Footer
├── hooks/
│   └── useCountdown.ts   # Returns { days, hours, minutes, seconds } until wedding
└── lib/
    ├── constants.ts      # All wedding data — single source of truth
    └── utils.ts          # cn() classname helper, formatters
```

## Key Constants (src/lib/constants.ts)
- `WEDDING_DATE` — `new Date('2026-08-08T10:00:00')`
- `COUPLE` — `{ partner1: 'Romeo', partner2: 'Juliet' }`
- `LOVE_STORY_START` — `new Date('2022-12-01')`
- `WEDDING_VENUE` — venue name and address
- `LOVE_STORY_TIMELINE` — array of milestone objects

## When Modifying This Project
- **Adding a new section**: create `src/components/sections/NewSection.tsx`, import in `src/app/page.tsx`
- **Changing wedding data**: edit `src/lib/constants.ts` only — do not hunt for hardcoded values
- **Adding an animation**: use Framer Motion `motion.*` components with `whileInView`
- **Changing colors**: edit `src/app/globals.css` CSS variables — do not add new colors ad hoc

## Component Contract
Every section component:
- Accepts no required props (reads from `constants.ts` directly or via hooks)
- Has `'use client'` directive if it uses animations, state, or refs
- Wraps content in `<SectionWrapper>` for consistent padding and entrance animation
- Is self-contained — no prop-drilling from page.tsx

## Responsive Breakpoints
- Base: mobile (< 768px)
- `md:` — tablet (768px+)
- `lg:` — desktop (1024px+)
- Every section must look correct at all three sizes

## Do Not
- Do not touch `file.txt` or unrelated repo files
- Do not create pages other than `src/app/page.tsx`
- Do not add API routes unless user explicitly requests RSVP backend
- Do not install packages without checking they are not already in package.json
- Do not use `styled-components` or `emotion` — Tailwind only
