# CLAUDE.md — Project Rules for Claude

## Project Overview
Wedding invitation website for Romeo & Juliet, themed as a **spaceship/space journey**.
Built with **Next.js (App Router)** and deployed to **Vercel**.

## Wedding Details
- **Couple**: Romeo & Juliet
- **Wedding Date**: August 8, 2026
- **Together Since**: December 2022
- **Theme**: Space / Spaceship journey

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Code Rules

### Component Rules
- All components must be in `src/components/`
- Section components → `src/components/sections/`
- UI primitives → `src/components/ui/`
- Layout components → `src/components/layout/`
- Every component must be typed with TypeScript interfaces
- Use `'use client'` only when truly needed (animations, state, browser APIs)

### Styling Rules
- Use Tailwind utility classes as primary styling
- Custom CSS only in `globals.css` for reusable design tokens and keyframes
- Color palette is space-themed — do not introduce colors outside the defined palette
- All sections must be responsive: mobile-first, then `md:` and `lg:` breakpoints

### Animation Rules
- All scroll-triggered animations use Framer Motion `whileInView`
- Entrance animations use `initial → animate` or `initial → whileInView`
- Keep animations smooth: prefer `ease: [0.25, 0.46, 0.45, 0.94]` or `easeOut`
- Do not add animations that block content visibility (always set viewport once)

### File Naming
- Components: PascalCase (`HeroSection.tsx`)
- Hooks: camelCase with `use` prefix (`useCountdown.ts`)
- Utilities: camelCase (`utils.ts`, `constants.ts`)
- No barrel `index.ts` files unless there are 3+ exports from a folder

### Constants
- All wedding data (date, names, venue, story) lives in `src/lib/constants.ts`
- Never hardcode dates or names directly in components

### Forbidden
- No `any` TypeScript type
- No inline styles unless dynamically computed
- No unused imports
- No `console.log` left in production code
- No comments explaining what code does — only comments for non-obvious WHY

## Color Palette (Space Theme)
```
--color-void: #05050f       (page background)
--color-deep-space: #0d0d2b (section alternate bg)
--color-nebula: #1a1a4e     (card backgrounds)
--color-cosmic: #6c63ff     (primary purple)
--color-stardust: #ff6584   (romantic pink accent)
--color-gold: #ffd700       (star gold)
--color-silver: #c0c0d0     (muted text)
--color-white: #f0f0ff      (primary text)
```

## Section Order (page.tsx)
1. HeroSection
2. CountdownSection
3. LoveStorySection
4. EventDetailsSection
5. RSVPSection
6. Footer
