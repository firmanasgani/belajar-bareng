# Wedding Invitation Website — Project Documentation

## Overview
An animated, space-themed wedding invitation website for Romeo & Juliet.
Visitors experience the wedding as a "space mission launch" — the couple's love story
is a journey through the stars, and guests are invited to witness the final launch.

---

## Wedding Details
| Field           | Value                    |
|-----------------|--------------------------|
| Partner 1       | Romeo                    |
| Partner 2       | Juliet                   |
| Wedding Date    | August 8, 2026           |
| Together Since  | December 2022            |
| Theme           | Space / Spaceship        |

---

## Tech Stack
| Tool            | Purpose                                 |
|-----------------|-----------------------------------------|
| Next.js 14+     | React framework, App Router, SSR/SSG    |
| TypeScript      | Type safety                             |
| Tailwind CSS    | Utility-first styling                   |
| Framer Motion   | Scroll and entrance animations          |
| Lucide React    | Icon library                            |
| Vercel          | Deployment platform                     |

---

## Project Structure
```
belajar-bareng/
├── CLAUDE.md                    # Rules for Claude Code agent
├── AGENT.md                     # Rules for subagents
├── docs/
│   └── PROJECT.md               # This file
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, metadata, fonts
│   │   ├── page.tsx             # Main page composition
│   │   └── globals.css          # CSS variables, keyframes
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Full-screen hero with spaceship launch
│   │   │   ├── CountdownSection.tsx   # Live countdown to wedding
│   │   │   ├── LoveStorySection.tsx   # Timeline from Dec 2022
│   │   │   ├── EventDetailsSection.tsx # Date, time, venue details
│   │   │   └── RSVPSection.tsx        # Attendance confirmation form
│   │   ├── ui/
│   │   │   ├── StarField.tsx          # Animated star background
│   │   │   ├── SectionWrapper.tsx     # Consistent section padding + fade-in
│   │   │   ├── CountdownTimer.tsx     # Reusable countdown display
│   │   │   ├── FloatingPlanet.tsx     # Decorative animated planet
│   │   │   └── TypingText.tsx         # Typewriter effect for text reveal
│   │   └── layout/
│   │       ├── Navigation.tsx         # Fixed top nav with scroll detection
│   │       └── Footer.tsx             # Footer with closing message
│   ├── hooks/
│   │   └── useCountdown.ts            # Returns live countdown values
│   └── lib/
│       ├── constants.ts               # All wedding data (single source of truth)
│       └── utils.ts                   # cn() helper, date formatters
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Page Sections

### 1. HeroSection
- Full-viewport height
- Animated star field background
- Large spaceship/rocket SVG rising
- Headline: "Romeo & Juliet" in large cosmic font
- Subheadline: "Mission Launch: August 8, 2026"
- CTA button: "Confirm Your Boarding Pass" (scrolls to RSVP)

### 2. CountdownSection
- Live countdown: days, hours, minutes, seconds
- Each unit displayed as a "fuel gauge" or glowing panel
- Updates every second via `useCountdown` hook
- Background: dark nebula with particle shimmer

### 3. LoveStorySection
- Vertical timeline from December 2022 to now
- Each milestone is a "mission log entry"
- Alternating left/right layout on desktop, single column on mobile
- Scroll-triggered fade and slide animations

### 4. EventDetailsSection
- Wedding date, time, venue displayed as "mission briefing"
- Coordinate-style formatting (latitude/longitude for venue)
- Icons from Lucide (Calendar, Clock, MapPin, Rocket)
- Glass-morphism card design

### 5. RSVPSection
- Form with: name, email, attendance (yes/no), meal preference, message
- "Boarding Pass" aesthetic
- Client-side validation
- Submission state with success animation

### 6. Footer
- Couple names and wedding date
- Social links (optional)
- "See you among the stars" closing

---

## Design System

### Color Palette
| Variable             | Hex       | Usage                     |
|----------------------|-----------|---------------------------|
| `--color-void`       | `#05050f` | Page background           |
| `--color-deep-space` | `#0d0d2b` | Alternate section bg      |
| `--color-nebula`     | `#1a1a4e` | Card/panel backgrounds    |
| `--color-cosmic`     | `#6c63ff` | Primary purple (CTA, headings) |
| `--color-stardust`   | `#ff6584` | Romantic pink accent      |
| `--color-gold`       | `#ffd700` | Stars, highlights         |
| `--color-silver`     | `#c0c0d0` | Muted body text           |
| `--color-white`      | `#f0f0ff` | Primary text              |

### Typography
- **Heading**: Cinzel (serif, regal space-opera feel)
- **Body**: Inter (clean, readable)
- **Accent/Code**: Space Mono (coordinates, countdown digits)

### Animation Principles
- All sections fade-in + slide-up on scroll (`whileInView`)
- Star field: continuous CSS animation (no JS cost)
- Countdown: updates every 1 000 ms via `setInterval`
- Spaceship: keyframe float animation (up/down, subtle)
- Hover states: scale 1.02–1.05, glow border
- Hero title: typewriter effect via `TypingText` — characters revealed one by one with a blinking cursor; Romeo types first (400 ms delay, 80 ms/char), `&` fades in at 900 ms, Juliet follows at 1 000 ms with a persistent cursor

---

## Deployment

### Vercel Setup
1. Push repository to GitHub
2. Connect repo in Vercel dashboard
3. Framework preset: **Next.js** (auto-detected)
4. No environment variables required for v1 (static RSVP)
5. Deploy — production URL generated automatically

### Build Commands
```bash
npm run dev      # local development (localhost:3000)
npm run build    # production build
npm run start    # serve production build locally
npm run lint     # ESLint check
```

---

## Future Enhancements (out of scope for v1)
- RSVP backend with database (Supabase or PlanetScale)
- Email confirmation on RSVP submission (Resend)
- Photo gallery with real wedding photos
- Guest guestbook / message board
- Music player (love song background)
