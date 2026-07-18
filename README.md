# SeismoTeck Website

> **Official corporate website for SASVC SeismoTech Software India Private Limited (SeismoTeck)** — a seismology and earthquake forecast company headquartered in Patna, Bihar, India.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Architecture Deep Dive](#architecture-deep-dive)
- [Component Documentation](#component-documentation)
- [Styling System](#styling-system)
- [Routing & Navigation](#routing--navigation)
- [SEO Implementation](#seo-implementation)
- [Image Assets & Conventions](#image-assets--conventions)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

### What is this project?

This is the **official multi-page corporate website** for **SeismoTeck** — a company that specializes in earthquake forecast using satellite data, IoT sensors, and multi-parametric seismic analysis. The website is **informational/corporate** in nature (it is NOT a SaaS dashboard, web app, or e-commerce store).

### What does the website do?

The website serves as the public-facing digital presence for SeismoTeck. It communicates the company's:

- **Mission and technology** — Details about the SAHAS Alert earthquake early warning system
- **Verified forecasts** — Case studies documenting successfully forecasted earthquakes
- **Team** — Profiles of the founder, co-founder, advisors, and operations team
- **Media coverage** — News articles, video interviews, and public awareness campaigns
- **Contact information** — A contact form and company details for collaboration inquiries

### Who built this?

The website was built for SeismoTeck by the development team using **Next.js 16** with **TypeScript** and **vanilla CSS Modules**. The design follows a **dark theme** inspired by NASA's mission control aesthetic — deep space/earth tones with cyan/teal accent glows.

### Who is this README for?

This README is written for:

1. **Developers of any experience level** who need to understand, modify, or extend this codebase
2. **AI agents** (like ChatGPT, Claude, Gemini, etc.) that may be given this README as context to answer questions about the project
3. **Open-source contributors** who want to understand the architecture before submitting changes

---

## Features

### Pages (7 total)

| Page | URL Route | Purpose |
|------|-----------|---------|
| **Home** | `/` | Landing page with hero section, news ticker, product matrix, innovation cards, featured case study, statistics, media preview, and a contact CTA |
| **About** | `/about` | Company overview, vision & mission, founder spotlight, and recognition gallery |
| **Technology** | `/technology` | Technical deep-dive into the SAHAS Alert system, IoT sensors, monitoring dashboard, and seismic imaging |
| **Forecasts** | `/forecasts` | Case studies of verified earthquake forecasts (Philippine Archipelago, Mindanao, Japan & Venezuela) |
| **Media** | `/media` | Featured video interview, news articles, and public awareness campaign posters |
| **Team** | `/team` | Core leadership profiles, advisors & consultants, and operations/field research team photos |
| **Contact** | `/contact` | Contact form (client-side simulated), company address, emails, phone, and business hours |

### UI/UX Features

- **Dark theme** with deep navy/space backgrounds (`#0a0e17`) and cyan/teal accent glow effects (`#00e5ff`)
- **Scroll-reveal animations** — Elements fade in with directional slide (up, down, left, right) as you scroll, powered by `IntersectionObserver` (no external animation libraries)
- **Sticky navigation bar** with backdrop blur (glassmorphism effect)
- **News ticker** (marquee) — Continuously scrolling news headlines below the hero, pauses on hover
- **Interactive Product Matrix** — Tabbed interface with 6 panels showing IoT connectivity, satellite status, device schematics, device functionality, deployment whitepaper, and a quote request form
- **Statistics counter** — Numbers animate into view when the section scrolls into the viewport
- **Vision & Mission section** — 6 vision cards with Unsplash background images and 3 mission directive pills
- **Responsive design** — Three breakpoints: mobile (< 600px), tablet (< 900px), and desktop (> 900px)
- **YouTube video embed** — Responsive 16:9 iframe for the HTV News interview
- **Image gallery** with hover zoom effects
- **Team cards** with circular portrait photos and hover glow
- **Contact form** with three states: idle, submitting (simulated), and success
- **SEO metadata** on every page — Dynamic `<title>`, meta description, Open Graph tags

### Technical Features

- **Static export** — The site is configured for `output: "export"` in `next.config.ts`, meaning it can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, S3, etc.) without a Node.js server
- **CSS Modules** — Every component has its own `.module.css` file, so class names are locally scoped and will never collide
- **TypeScript strict mode** — All components are typed with TypeScript interfaces
- **Google Fonts** via `next/font/google` — `Inter` for body text, `Outfit` for headings; both are self-hosted by Next.js for performance (no external network requests at runtime)
- **CSS Custom Properties (design tokens)** — All colors, typography sizes, spacing, border radii, and transitions are defined as CSS variables in `globals.css` for consistency
- **Path aliases** — `@/*` maps to `./src/*` so imports are clean (e.g., `@/components/Hero/Hero`)
- **No external animation libraries** — All animations use pure CSS `@keyframes` and the browser's `IntersectionObserver` API
- **Unoptimized images** — Since this is a static export, Next.js image optimization is disabled (`images: { unoptimized: true }` in `next.config.ts`); images are served as-is from `public/assets/`

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | `16.2.10` | React framework with App Router, file-system routing, static export |
| [React](https://react.dev/) | `19.2.4` | UI component library |
| [React DOM](https://react.dev/) | `19.2.4` | React renderer for the browser DOM |
| [TypeScript](https://www.typescriptlang.org/) | `^5` | Static type checking for JavaScript |

### Development Dependencies

| Technology | Version | Purpose |
|-----------|---------|---------|
| `@types/node` | `^20` | TypeScript type definitions for Node.js APIs |
| `@types/react` | `^19` | TypeScript type definitions for React |
| `@types/react-dom` | `^19` | TypeScript type definitions for React DOM |
| `eslint` | `^9` | JavaScript/TypeScript linter |
| `eslint-config-next` | `16.2.10` | Next.js-specific ESLint rules (core-web-vitals + TypeScript) |

### Styling

- **Vanilla CSS** with **CSS Modules** (`.module.css` files)
- **No Tailwind CSS** — This project intentionally does NOT use Tailwind. All styling is custom CSS.
- **No styled-components, Sass, or LESS** — Pure CSS only.

### Fonts

- **Inter** (weights: 400, 500, 600, 700) — Used for body text, paragraphs, buttons, and form elements
- **Outfit** (weights: 500, 600, 700, 800) — Used for headings (`h1`–`h6`) and display text

Both fonts are loaded via `next/font/google` in `src/app/layout.tsx`, which means Next.js downloads them at build time and self-hosts them. **No external Google Fonts CDN requests are made at runtime.**

### Key Design Decisions & Why

1. **Why Next.js App Router (not Pages Router)?** — The App Router (`src/app/`) is the modern standard in Next.js. It supports React Server Components by default, has a simpler layout system with `layout.tsx`, and supports per-page metadata via the `Metadata` export.

2. **Why static export (`output: "export"`)?** — This website has no dynamic server-side logic (no database queries, no authentication, no API routes). A static export generates plain HTML/CSS/JS files that can be served from any web server or CDN, which is cheaper, faster, and more reliable.

3. **Why CSS Modules instead of Tailwind?** — The project specification explicitly prohibits Tailwind. CSS Modules provide locally-scoped class names (preventing style collisions) while allowing full control over the design with standard CSS.

4. **Why `images: { unoptimized: true }`?** — Next.js image optimization requires a Node.js server at runtime to resize/convert images on-the-fly. Since we use `output: "export"` (static files only), the built-in image optimizer can't run. Setting `unoptimized: true` tells Next.js to serve images as-is.

5. **Why no external animation libraries?** — Animations in this project are intentionally subtle (fade-ins, slide-ins, hover glows). These are trivially achievable with CSS `@keyframes` and the native `IntersectionObserver` API, so adding a library like Framer Motion or GSAP would be unnecessary bloat.

---

## Prerequisites

Before you can run this project, make sure you have the following installed on your machine:

### Required Software

| Software | Minimum Version | How to Check | Download Link |
|----------|----------------|--------------|---------------|
| **Node.js** | 18.17.0 or higher | `node --version` | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.0.0 or higher (comes with Node.js) | `npm --version` | Included with Node.js |
| **Git** | Any recent version | `git --version` | [git-scm.com](https://git-scm.com/) |

### Recommended (Optional)

| Tool | Purpose |
|------|---------|
| **VS Code** | Recommended code editor |
| **ES7+ React/Redux/React-Native snippets** (VS Code extension) | Faster React component creation |
| **CSS Modules** (VS Code extension by `clinyong`) | Autocomplete for CSS Module class names |

---

## Project Structure

Below is the complete directory tree of this project with an explanation of every single file and folder. **Read this section carefully** — it is the single most important section for understanding how this codebase is organized.

```
seismoteck_website/
│
├── public/                          # Static files served at the root URL
│   ├── assets/                      # All images used on the website
│   │   ├── img1.jpeg                # Hero background: Earth from space, India highlighted
│   │   ├── img2.jpeg                # Innovation card: Earth with tectonic plates + dashboard
│   │   ├── img3.jpeg                # Technology: IoT sensor field deployment
│   │   ├── img4.jpeg                # News: 2026 Mindanao earthquake article
│   │   ├── img5.jpg                 # Dashboard: Multi-location earthquake data
│   │   ├── img6.jpg                 # Dashboard: Philippine seismic zone monitoring
│   │   ├── img7.jpg                 # Forecasts: Japan & Venezuela earthquakes
│   │   ├── img8.jpg                 # About gallery: Founder with IPS officer
│   │   ├── img9.jpg                 # Media: Earthquake warning poster (Hindi)
│   │   ├── img10.jpg                # About/Team: Founder lecturing to students
│   │   ├── img11.jpg                # About gallery: Founder with influential person
│   │   ├── img12.jpg                # Media: Times of India article screenshot
│   │   ├── img13.jpg                # About gallery: Founder at Founders Meet
│   │   ├── img14.jpg                # Team: Founder with field team
│   │   ├── img15.jpg                # Technology/Media: SAHAS Alert system poster
│   │   ├── img16.jpg                # About gallery: Military + Dept of Industries collage
│   │   ├── img17.jpg                # About gallery: Founder with diplomats, Bihar govt
│   │   ├── img18.jpg                # Team/Technology: Founder with interns, IoT research
│   │   ├── img19.jpg                # Team: Dr. Sankar Dayal (Scientific Advisor)
│   │   ├── img20.jpg                # Team: Dr. Prakash Chandra (Research Consultant)
│   │   ├── img21.jpg                # Team: Mrs. Sweety Verma (Co-founder & Director)
│   │   ├── img22.jpg                # Team: Kanhaiya Saran (Marketing Manager)
│   │   └── img_description.md       # Detailed description of each image
│   ├── file.svg                     # Default Next.js SVG (unused, from scaffolding)
│   ├── globe.svg                    # Default Next.js SVG (unused, from scaffolding)
│   ├── next.svg                     # Default Next.js SVG (unused, from scaffolding)
│   ├── vercel.svg                   # Default Next.js SVG (unused, from scaffolding)
│   └── window.svg                   # Default Next.js SVG (unused, from scaffolding)
│
├── assets/                          # Original source images (identical copies in public/assets/)
│   ├── img1.jpeg ... img22.jpg      # Same images as public/assets/ — kept as originals
│   └── img_description.md           # Detailed description of each image
│
├── src/                             # All source code lives here
│   ├── app/                         # Next.js App Router — pages and layouts
│   │   ├── layout.tsx               # ROOT LAYOUT — wraps every page; contains fonts, Navbar, Footer
│   │   ├── globals.css              # GLOBAL STYLES — CSS custom properties (design tokens), resets
│   │   ├── page.tsx                 # HOME PAGE — the `/` route
│   │   ├── page.module.css          # CSS Module for the home page
│   │   ├── favicon.ico              # Browser tab icon
│   │   │
│   │   ├── about/                   # `/about` route
│   │   │   ├── page.tsx             # About page component
│   │   │   └── about.module.css     # About page styles
│   │   │
│   │   ├── technology/              # `/technology` route
│   │   │   ├── page.tsx             # Technology page component
│   │   │   └── technology.module.css # Technology page styles
│   │   │
│   │   ├── forecasts/               # `/forecasts` route
│   │   │   ├── page.tsx             # Forecasts page component
│   │   │   └── forecasts.module.css # Forecasts page styles
│   │   │
│   │   ├── media/                   # `/media` route
│   │   │   ├── page.tsx             # Media page component
│   │   │   └── media.module.css     # Media page styles
│   │   │
│   │   ├── team/                    # `/team` route
│   │   │   ├── page.tsx             # Team page component
│   │   │   └── team.module.css      # Team page styles
│   │   │
│   │   └── contact/                 # `/contact` route
│   │       ├── page.tsx             # Contact page component
│   │       └── contact.module.css   # Contact page styles
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar/                  # Sticky navigation bar
│   │   │   ├── Navbar.tsx           # Server component — renders nav links from constants
│   │   │   └── Navbar.module.css    # Navbar styles (sticky, backdrop blur, responsive)
│   │   │
│   │   ├── Footer/                  # Site-wide footer
│   │   │   ├── Footer.tsx           # Server component — company info, quick links, contact, disclaimer
│   │   │   └── Footer.module.css    # Footer styles (3-column grid, responsive)
│   │   │
│   │   ├── Hero/                    # Full-viewport hero section (home page only)
│   │   │   ├── Hero.tsx             # Server component — background image, title, CTA buttons
│   │   │   └── Hero.module.css      # Hero styles (100vh, overlay gradient, slide-up animation)
│   │   │
│   │   ├── SectionHeading/          # Reusable section title + subtext
│   │   │   ├── SectionHeading.tsx   # Server component — accepts title, subtext, alignment, preHeading
│   │   │   └── SectionHeading.module.css
│   │   │
│   │   ├── Card/                    # Generic image + title + description card
│   │   │   ├── Card.tsx             # Server component — used in "Key Innovations" grid on home page
│   │   │   └── Card.module.css      # Card styles (hover scale, border glow)
│   │   │
│   │   ├── TeamCard/                # Team member card with circular photo
│   │   │   ├── TeamCard.tsx         # Server component — circular image, name, title
│   │   │   └── TeamCard.module.css  # TeamCard styles (200px circle, hover glow + scale)
│   │   │
│   │   ├── NewsCard/                # Horizontal news article card
│   │   │   ├── NewsCard.tsx         # Server component — image left, text right (stacks on mobile)
│   │   │   └── NewsCard.module.css  # NewsCard styles (flexbox horizontal layout)
│   │   │
│   │   ├── ImageGallery/            # Responsive image grid with captions
│   │   │   ├── ImageGallery.tsx     # Server component — accepts array of {imagePath, caption, altText}
│   │   │   └── ImageGallery.module.css # Gallery styles (3-col → 2-col → 1-col)
│   │   │
│   │   ├── StatCounter/             # Animated statistics section
│   │   │   ├── StatCounter.tsx      # CLIENT component ("use client") — uses IntersectionObserver
│   │   │   └── StatCounter.module.css # StatCounter styles (4-col grid, number animation)
│   │   │
│   │   ├── ScrollReveal/            # Scroll-triggered reveal wrapper
│   │   │   ├── ScrollReveal.tsx     # CLIENT component ("use client") — IntersectionObserver wrapper
│   │   │   └── ScrollReveal.module.css # ScrollReveal styles (opacity + transform transitions)
│   │   │
│   │   ├── NewsTicker/              # Horizontal scrolling news marquee
│   │   │   ├── NewsTicker.tsx       # Server component — hardcoded news items, CSS animation
│   │   │   └── NewsTicker.module.css # NewsTicker styles (@keyframes scroll, pause on hover)
│   │   │
│   │   ├── ContactForm/             # Contact form with submission states
│   │   │   ├── ContactForm.tsx      # CLIENT component ("use client") — form with useState
│   │   │   └── ContactForm.module.css # ContactForm styles (dark inputs, cyan focus glow)
│   │   │
│   │   ├── VideoEmbed/              # YouTube video embed
│   │   │   ├── VideoEmbed.tsx       # Server component — responsive 16:9 iframe wrapper
│   │   │   └── VideoEmbed.module.css # VideoEmbed styles (padding-bottom 56.25% trick)
│   │   │
│   │   ├── ProductMatrix/           # Interactive tabbed product showcase
│   │   │   ├── ProductMatrix.tsx    # CLIENT component ("use client") — 6-tab interface with useState
│   │   │   └── ProductMatrix.module.css # ProductMatrix styles (sidebar + content, glassmorphism)
│   │   │
│   │   └── VisionMission/           # Vision & Mission display section
│   │       ├── VisionMission.tsx    # CLIENT component ("use client") — 6 vision cards + 3 mission pills
│   │       └── VisionMission.module.css # VisionMission styles (card grid + pill layout)
│   │
│   └── utils/                       # Utility files / shared constants
│       └── constants.ts             # Company info, navigation links, statistics data
│
├── .gitignore                       # Files/folders excluded from Git
├── .next/                           # Next.js build cache (auto-generated, gitignored)
├── out/                             # Static export output (auto-generated by `next build`, gitignored)
├── node_modules/                    # npm dependencies (auto-generated, gitignored)
├── AGENTS.md                        # AI agent configuration and build specification
├── CLAUDE.md                        # AI agent marker file
├── README.md                        # This file
├── eslint.config.mjs                # ESLint configuration (flat config format)
├── next.config.ts                   # Next.js configuration (static export + unoptimized images)
├── next-env.d.ts                    # Auto-generated Next.js TypeScript declarations
├── package.json                     # npm project manifest (dependencies, scripts)
├── package-lock.json                # Locked dependency versions for reproducible installs
└── tsconfig.json                    # TypeScript compiler configuration
```

---

## Architecture Deep Dive

This section explains **how the pieces fit together** so you understand the data flow and rendering pipeline.

### How Next.js App Router Works (Beginner Explanation)

Next.js uses a **file-system based router**. This means:

- Every folder inside `src/app/` that contains a `page.tsx` file becomes a URL route
- The folder name IS the URL path segment

```
src/app/page.tsx          →  https://yoursite.com/
src/app/about/page.tsx    →  https://yoursite.com/about
src/app/team/page.tsx     →  https://yoursite.com/team
src/app/contact/page.tsx  →  https://yoursite.com/contact
```

### The Layout → Page Hierarchy

When a user visits any page, Next.js renders the page like this:

```
layout.tsx (root layout — shared across ALL pages)
├── <html>
│   ├── <body>
│   │   ├── <Navbar />       ← Always visible on every page
│   │   ├── <main>
│   │   │   └── {children}   ← This is where the page-specific content goes
│   │   │       │
│   │   │       ├── If URL is "/"         → renders src/app/page.tsx
│   │   │       ├── If URL is "/about"    → renders src/app/about/page.tsx
│   │   │       ├── If URL is "/team"     → renders src/app/team/page.tsx
│   │   │       └── ... etc.
│   │   │
│   │   └── <Footer />       ← Always visible on every page
```

### Server Components vs. Client Components

In Next.js App Router, **all components are Server Components by default**. This means:

- They are rendered on the server (or at build time for static export)
- They can NOT use React hooks (`useState`, `useEffect`, `useRef`, etc.)
- They can NOT use browser APIs (`window`, `document`, `IntersectionObserver`, etc.)

When a component needs interactivity (hooks, event handlers, browser APIs), you must add `"use client"` at the very top of the file. This converts it to a **Client Component**, which runs in the browser.

**In this project, exactly 4 components are Client Components:**

| Component | Why it's a Client Component |
|-----------|-----------------------------|
| `ScrollReveal.tsx` | Uses `useEffect`, `useRef`, `useState`, and `IntersectionObserver` to detect when elements scroll into view |
| `StatCounter.tsx` | Uses `useEffect`, `useRef`, `useState`, and `IntersectionObserver` to trigger number animations |
| `ContactForm.tsx` | Uses `useState` to manage form submission states (idle → submitting → success) |
| `ProductMatrix.tsx` | Uses `useState` to track which tab is currently active |
| `VisionMission.tsx` | Marked as client because it imports `ScrollReveal` and uses `Link` in a way that requires client-side hydration |

**All other components are Server Components**, including `Navbar`, `Footer`, `Hero`, `Card`, `NewsCard`, `TeamCard`, `ImageGallery`, `VideoEmbed`, `SectionHeading`, and `NewsTicker`.

### Data Flow

This project has **no backend, no database, and no API calls**. All data is hardcoded:

1. **Company info, nav links, and statistics** → Defined in `src/utils/constants.ts` and imported by components
2. **News ticker items** → Hardcoded array inside `NewsTicker.tsx`
3. **Page content** (case studies, team bios, technology descriptions) → Written directly in each page's JSX
4. **Vision & Mission data** → Hardcoded in `VisionMission.tsx`
5. **Product Matrix tabs** → Hardcoded in `ProductMatrix.tsx`
6. **Gallery items** → Defined as arrays in the page components that use `<ImageGallery>`

### The `constants.ts` File

Located at `src/utils/constants.ts`, this file contains three exported constants:

```typescript
// Company contact details — used by Navbar, Footer, Hero, About, Contact pages
export const COMPANY_INFO = {
  name: "SASVC SeismoTech Software India Pvt. Ltd.",
  brand: "SeismoTeck",
  location: "Patna, Bihar, India",
  emails: ["upseismotek1962@gmail.com", "umeshprasadverma64@gmail.com"],
  phone: "+91 9473289401",
};

// Navigation links — used by Navbar and Footer to render link lists
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Forecasts", href: "/forecasts" },
  { label: "Media", href: "/media" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

// Statistics displayed in the StatCounter component on the home page
export const STATS = [
  { icon: "activity", number: "99%", label: "Forecast Accuracy" },
  { icon: "globe", number: "15+", label: "Monitoring Stations" },
  { icon: "calendar", number: "10+", label: "Years of Research" },
  { icon: "alert", number: "50+", label: "Verified Forecasts" },
];
```

**If you need to change company contact info, add/remove navigation pages, or update statistics — this is the ONE file to edit.**

---

## Component Documentation

### Reusable Components and Their Props

Every component lives in its own folder under `src/components/` with a `.tsx` file (logic) and a `.module.css` file (styles).

#### `<Navbar />`

- **File:** `src/components/Navbar/Navbar.tsx`
- **Type:** Server Component
- **Props:** None
- **What it does:** Renders a sticky navigation bar at the top of every page. Shows the brand name "SeismoTeck" on the left with a cyan glow effect, and navigation links on the right. Links are dynamically generated from `NAV_LINKS` in `constants.ts`.
- **Responsive behavior:** On screens below 768px wide, the navigation links are hidden (`display: none`). There is a comment in the code (`{/* Mobile menu toggle could be added here later */}`) indicating a hamburger menu is planned but not yet implemented.

#### `<Footer />`

- **File:** `src/components/Footer/Footer.tsx`
- **Type:** Server Component
- **Props:** None
- **What it does:** Renders a 3-column footer with: company info (left), quick links (center), and contact details (right). Below the grid is a copyright line with the current year (dynamically computed via `new Date().getFullYear()`) and a legal disclaimer about forecast claims.

#### `<Hero />`

- **File:** `src/components/Hero/Hero.tsx`
- **Type:** Server Component
- **Props:** None
- **What it does:** Renders the full-viewport (100vh) hero section on the home page. Uses `img1.jpeg` as a background image with a dark overlay gradient. Displays the company name, main headline, subtitle, and two CTA buttons ("Explore Our Technology" → `/technology`, "View Forecasts" → `/forecasts`). Has a CSS slide-up animation on page load.

#### `<SectionHeading />`

- **File:** `src/components/SectionHeading/SectionHeading.tsx`
- **Type:** Server Component
- **Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | — | The heading text (rendered as `<h2>`) |
| `subtext` | `string` | No | `undefined` | Optional paragraph below the heading |
| `alignment` | `"left" \| "center" \| "right"` | No | `"center"` | Text alignment |
| `preHeading` | `string` | No | `undefined` | Small uppercase accent text above the heading |

#### `<Card />`

- **File:** `src/components/Card/Card.tsx`
- **Type:** Server Component
- **Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `imagePath` | `string` | Yes | Path to the image (relative to `public/`, e.g., `/assets/img2.jpeg`) |
| `title` | `string` | Yes | Card heading text |
| `description` | `string` | Yes | Card body text |
| `altText` | `string` | Yes | Image alt attribute for accessibility |

- **Used in:** Home page "Key Innovations" grid (3 cards)

#### `<TeamCard />`

- **File:** `src/components/TeamCard/TeamCard.tsx`
- **Type:** Server Component
- **Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `imagePath` | `string` | Yes | Path to the team member's photo |
| `name` | `string` | Yes | Team member's name |
| `title` | `string` | Yes | Team member's role/position |
| `altText` | `string` | Yes | Image alt attribute |

- **Used in:** Team page — Core Leadership section and Advisors section

#### `<NewsCard />`

- **File:** `src/components/NewsCard/NewsCard.tsx`
- **Type:** Server Component
- **Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `imagePath` | `string` | Yes | Path to the article image |
| `title` | `string` | Yes | Article headline |
| `description` | `string` | Yes | Article excerpt/summary |
| `altText` | `string` | Yes | Image alt attribute |

- **Layout:** Horizontal on desktop (image left, text right), vertical on mobile (< 600px)
- **Used in:** Home page "Media & Recognition" section, Media page "In the News" section

#### `<ImageGallery />`

- **File:** `src/components/ImageGallery/ImageGallery.tsx`
- **Type:** Server Component
- **Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `GalleryItem[]` | Yes | Array of `{ imagePath: string, caption: string, altText: string }` |

- **Used in:** About page "Recognition & Collaborations" section

#### `<ScrollReveal />`

- **File:** `src/components/ScrollReveal/ScrollReveal.tsx`
- **Type:** Client Component (`"use client"`)
- **Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | Yes | — | The content to reveal on scroll |
| `delay` | `number` | No | `0` | Delay in milliseconds before the animation starts |
| `direction` | `"up" \| "down" \| "left" \| "right" \| "none"` | No | `"up"` | Direction the element slides in from |

- **How it works:** Uses `IntersectionObserver` with `threshold: 0.1` to detect when 10% of the element is visible. Once visible, it adds the `.visible` CSS class which transitions `opacity` from 0 to 1 and `transform` from the offset position to `translate(0, 0)`. The observer is disconnected after the first reveal (elements only animate once).
- **Used in:** Nearly every section across all pages

#### `<StatCounter />`

- **File:** `src/components/StatCounter/StatCounter.tsx`
- **Type:** Client Component (`"use client"`)
- **Props:** None
- **How it works:** Reads statistics from `STATS` in `constants.ts`. Uses `IntersectionObserver` with `threshold: 0.5` to detect when half the section is visible. When visible, it applies a `.visible` CSS class that fades in each stat item with a staggered delay (150ms per item).
- **Used in:** Home page only

#### `<NewsTicker />`

- **File:** `src/components/NewsTicker/NewsTicker.tsx`
- **Type:** Server Component
- **Props:** None
- **How it works:** Renders a horizontal scrolling marquee of news items. The items array is duplicated (`[...items, ...items]`) to create a seamless infinite scroll effect. Uses a CSS `@keyframes scroll` animation that translates the content by -50% over 40 seconds. Pauses on hover via `animation-play-state: paused`.

#### `<VideoEmbed />`

- **File:** `src/components/VideoEmbed/VideoEmbed.tsx`
- **Type:** Server Component
- **Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `embedId` | `string` | Yes | YouTube video ID (e.g., `"Uc38C2OJFyg"`) |
| `title` | `string` | Yes | Video title (used for `<h3>` heading and iframe `title` attribute) |
| `description` | `string` | No | Text below the video. Supports newline characters (`\n`) for paragraph breaks. |
| `disclaimer` | `string` | No | Italic disclaimer text at the bottom, separated by a border |

#### `<ContactForm />`

- **File:** `src/components/ContactForm/ContactForm.tsx`
- **Type:** Client Component (`"use client"`)
- **Props:** None
- **Form fields:** Name (text), Email Address (email), Subject (text), Message (textarea)
- **How it works:** Uses `useState` to manage three states:
  - `"idle"` — Shows the form
  - `"submitting"` — Shows "Sending..." on the button (disabled), simulates a 1500ms delay
  - `"success"` — Shows a success message with a checkmark icon and a "Send another message" button
- **Important note:** The form submission is **simulated** — it does not actually send data anywhere. To integrate a real backend (e.g., Formspree, Netlify Forms, or a custom API), you would need to replace the `handleSubmit` function.

#### `<ProductMatrix />`

- **File:** `src/components/ProductMatrix/ProductMatrix.tsx`
- **Type:** Client Component (`"use client"`)
- **Props:** None
- **What it does:** Renders an interactive 6-tab interface styled like a mission-control portal. Has a sidebar navigation with 6 buttons and a content area that shows different panels based on the active tab:
  1. **IoT Connectivity Hub** — Shows 3 IoT node status cards (Sensor Node Alpha, Beta, Gateway Controller)
  2. **Satellite Region Status** — Shows a table with 3 regions (Asia-Pacific, Euro-African, Pan-American)
  3. **Device Structural Layout** — Shows a decorative wireframe schematic (visual only)
  4. **Device Functionality** — Lists 3 core mechanical functions
  5. **Deployment Whitepaper** — Shows a 3-step deployment timeline
  6. **Request Portal Quote** — Shows a form with name, email, deployment type dropdown, and message textarea

#### `<VisionMission />`

- **File:** `src/components/VisionMission/VisionMission.tsx`
- **Type:** Client Component (`"use client"`)
- **Props:** None
- **What it does:** Displays 6 vision cards in a responsive grid, each with a number (01–06), title, description, and an Unsplash background image. Below the vision grid are 3 "mission directive" pills with accent border-left styling. At the bottom are two CTA buttons: "Explore Portal" → `/technology` and "Partner With Us" → `/contact`.
- **Note:** This component uses external Unsplash image URLs (loaded via `background-image` CSS). These are the only external image references in the entire project.

---

## Styling System

### Design Tokens (CSS Custom Properties)

All design values are centralized in `src/app/globals.css` as CSS custom properties (variables). This means if you want to change the accent color from cyan to blue, **you only need to change it in one place**.

Here is a summary of the token categories:

#### Colors

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-bg-primary` | `#0a0e17` | Main page background (very dark navy) |
| `--color-bg-secondary` | `#111827` | Alternate section backgrounds |
| `--color-bg-card` | `#1a1f2e` | Card background color |
| `--color-bg-card-hover` | `#222842` | Card background on hover |
| `--color-surface` | `#0f1923` | Input field backgrounds |
| `--color-border` | `#1e293b` | Default border color |
| `--color-border-glow` | `rgba(0, 229, 255, 0.3)` | Glowing border color (hover states) |
| `--color-text-primary` | `#f1f5f9` | Main text color (near-white) |
| `--color-text-secondary` | `#94a3b8` | Secondary text (paragraphs, descriptions) |
| `--color-text-muted` | `#64748b` | Muted text (captions, disclaimers) |
| `--color-accent-primary` | `#00e5ff` | Primary accent — cyan/teal glow |
| `--color-accent-secondary` | `#00bcd4` | Secondary accent — darker teal |
| `--color-accent-warm` | `#f59e0b` | Amber (for warnings/highlights) |
| `--color-accent-danger` | `#ef4444` | Red (for seismic alerts) |
| `--color-accent-success` | `#10b981` | Green (for verified status dots) |

#### Typography Scale

Font sizes use `clamp()` for fluid responsive sizing:

| Token | Value | Used For |
|-------|-------|----------|
| `--fs-display` | `clamp(2.5rem, 5vw, 4rem)` | Hero headline |
| `--fs-h1` | `clamp(2rem, 4vw, 3rem)` | Page titles |
| `--fs-h2` | `clamp(1.5rem, 3vw, 2.25rem)` | Section headings |
| `--fs-h3` | `clamp(1.25rem, 2.5vw, 1.75rem)` | Subsection headings |
| `--fs-h4` | `clamp(1.1rem, 2vw, 1.375rem)` | Card titles |
| `--fs-body` | `1rem` | Normal body text |
| `--fs-body-lg` | `1.125rem` | Large body text |
| `--fs-small` | `0.875rem` | Small text, nav links |
| `--fs-xs` | `0.75rem` | Extra small text, labels |

#### Spacing Scale

| Token | Value |
|-------|-------|
| `--space-xs` | `0.5rem` (8px) |
| `--space-sm` | `1rem` (16px) |
| `--space-md` | `1.5rem` (24px) |
| `--space-lg` | `2rem` (32px) |
| `--space-xl` | `3rem` (48px) |
| `--space-2xl` | `4rem` (64px) |
| `--space-3xl` | `6rem` (96px) |
| `--space-section` | `clamp(4rem, 8vw, 8rem)` |

### How CSS Modules Work

CSS Modules are a feature that **automatically scopes class names to the component that imports them**. When you import a `.module.css` file:

```tsx
import styles from "./Card.module.css";

// In JSX:
<div className={styles.card}>...</div>
```

At build time, the class name `.card` is transformed to something like `.Card_card__xK2a9`. This means:

- **No class name collisions** — Two components can both have a `.title` class, and they won't interfere with each other
- **Explicit dependencies** — You can see exactly which styles a component uses by looking at its imports
- **Dead code elimination** — Unused CSS classes are removed during build

### Global Styles vs. Module Styles

- `globals.css` — Applied to the **entire website**. Contains:
  - CSS custom properties (design tokens)
  - CSS resets (`* { box-sizing: border-box; margin: 0; padding: 0; }`)
  - Base element styles (`body`, `a`, `h1`–`h6`, `img`, `main`)
  - Smooth scrolling (`scroll-behavior: smooth`)
  - Dark color scheme (`color-scheme: dark`)

- `*.module.css` files — Applied **only to the component that imports them**. One file per component.

### Responsive Breakpoints

The project uses three main breakpoints:

| Breakpoint | Target | Where Used |
|------------|--------|------------|
| `max-width: 480px` | Small phones | StatCounter (1 column) |
| `max-width: 600px` | Phones | Grids collapse to 1 column, NewsCard stacks vertically, quote form 1 column |
| `max-width: 768px` | Tablets | Navbar links hidden, Hero buttons stack, footer 1 column |
| `max-width: 900px` | Small tablets / large phones | Content grids go from 3 → 2 columns, featured grid stacks, ProductMatrix sidebar stacks, founder grid stacks |

---

## Routing & Navigation

### URL Routes

| URL | Component File | Page Title (in browser tab) |
|-----|---------------|----------------------------|
| `/` | `src/app/page.tsx` | `SeismoTeck — Advanced Earthquake Forecast & Seismic Research` |
| `/about` | `src/app/about/page.tsx` | `About Us | SeismoTeck` |
| `/technology` | `src/app/technology/page.tsx` | `Technology & Products | SeismoTeck` |
| `/forecasts` | `src/app/forecasts/page.tsx` | `Forecasts & Case Studies | SeismoTeck` |
| `/media` | `src/app/media/page.tsx` | `Media & Recognition | SeismoTeck` |
| `/team` | `src/app/team/page.tsx` | `Our Team | SeismoTeck` |
| `/contact` | `src/app/contact/page.tsx` | `Contact Us | SeismoTeck` |

### How Navigation Works

The `<Navbar>` and `<Footer>` components both read `NAV_LINKS` from `constants.ts` and render Next.js `<Link>` elements for each entry. The `<Link>` component from `next/link` provides:

- **Client-side navigation** — Clicking a link doesn't cause a full page reload; only the content inside `<main>` changes
- **Prefetching** — Next.js automatically prefetches linked pages when the link enters the viewport, making navigation feel instant

### Adding a New Page

To add a new page (e.g., `/careers`):

1. Create the folder: `src/app/careers/`
2. Create the page file: `src/app/careers/page.tsx`
3. Create the style file: `src/app/careers/careers.module.css`
4. Add the route to `NAV_LINKS` in `src/utils/constants.ts`:
   ```typescript
   { label: "Careers", href: "/careers" },
   ```
5. The new page will automatically appear in the Navbar and Footer

---

## SEO Implementation

### Per-Page Metadata

Every page exports a `metadata` object (or the root layout exports it with a `template`):

```typescript
// Root layout (src/app/layout.tsx)
export const metadata: Metadata = {
  title: {
    default: "SeismoTeck — Advanced Earthquake Forecast & Seismic Research",
    template: "%s | SeismoTeck",  // Pages replace %s with their title
  },
  description: "...",
  keywords: ["earthquake forecast", "seismic monitoring", ...],
  openGraph: { ... },
};

// Individual page (e.g., src/app/about/page.tsx)
export const metadata: Metadata = {
  title: "About Us",  // Becomes: "About Us | SeismoTeck" via the template
  description: "Learn about SeismoTeck and our founder, Umesh Prasad Verma.",
};
```

### SEO Features Present

- ✅ Unique `<title>` tag per page with consistent branding via template
- ✅ Meta description on every page
- ✅ Keywords meta tag on the root layout
- ✅ Open Graph tags for social media sharing
- ✅ Semantic HTML (`<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- ✅ Proper heading hierarchy (single `<h1>` per page)
- ✅ Descriptive `alt` text on all images
- ✅ `lang="en"` attribute on `<html>`

---

## Image Assets & Conventions

### Image Storage

Images are stored in two locations (they are identical copies):

- `assets/` (project root) — Original source images, kept untouched
- `public/assets/` (public directory) — Copies used by the website at runtime

**Only images in `public/assets/` are accessible by the website.** The root `assets/` folder is just an archive of the originals.

### Referencing Images in Code

When using Next.js `<Image>` component, reference images relative to the `public/` folder:

```tsx
import Image from "next/image";

<Image
  src="/assets/img1.jpeg"   // This maps to public/assets/img1.jpeg
  alt="Descriptive alt text"
  fill                       // Makes the image fill its container
  priority                   // Load this image first (for above-the-fold content)
  quality={90}               // Image quality (1-100)
  className={styles.image}
/>
```

### Image Catalog

| File | Content | Used On |
|------|---------|---------|
| `img1.jpeg` | Earth from space, India highlighted | Home (hero bg), About (banner bg) |
| `img2.jpeg` | Earth with tectonic plates + dashboard | Home (innovation card), Technology (seismic imaging) |
| `img3.jpeg` | IoT sensor in field | Home (innovation card), Technology (IoT section) |
| `img4.jpeg` | 2026 Mindanao earthquake article | Home (news), Media, Forecasts |
| `img5.jpg` | Multi-location earthquake dashboard | Home (innovation card), Technology (dashboard) |
| `img6.jpg` | Philippine seismic zone dashboard | Home (featured case study), Technology, Forecasts |
| `img7.jpg` | Japan & Venezuela earthquakes | Forecasts (case study 3) |
| `img8.jpg` | Founder with IPS officer | About (gallery) |
| `img9.jpg` | Earthquake warning poster (Hindi) | Media (public awareness) |
| `img10.jpg` | Founder lecturing to students | About (founder spotlight), Team (leadership) |
| `img11.jpg` | Founder with influential person | About (gallery) |
| `img12.jpg` | Times of India article screenshot | Home (news), Media |
| `img13.jpg` | Founder at Founders Meet | About (gallery) |
| `img14.jpg` | Founder with team | Team (operations) |
| `img15.jpg` | SAHAS Alert system poster | Technology, Media |
| `img16.jpg` | Military + Dept of Industries collage | About (gallery) |
| `img17.jpg` | Founder with diplomats, Bihar govt | About (gallery) |
| `img18.jpg` | Founder with interns, IoT research | Technology (IoT section), Team (operations) |
| `img19.jpg` | Dr. Sankar Dayal (Scientific Advisor) | Team |
| `img20.jpg` | Dr. Prakash Chandra (Research Consultant) | Team |
| `img21.jpg` | Mrs. Sweety Verma (Co-founder & Director) | Team |
| `img22.jpg` | Kanhaiya Saran (Marketing Manager) | Team |

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/HanuShashwat/SeismoTeck-Website.git
cd SeismoTeck-Website
```

> **Note:** If you downloaded the project as a ZIP file, extract it and `cd` into the extracted folder instead.

### Step 2: Install Dependencies

```bash
npm install
```

This command reads `package.json` and installs all listed dependencies into the `node_modules/` folder. The exact versions are locked in `package-lock.json` to ensure everyone gets the same dependency tree.

**Expected output:** You should see something like:

```
added 300+ packages, and audited 300+ packages in 30s
found 0 vulnerabilities
```

> **Troubleshooting:** If `npm install` fails:
> - Make sure you have Node.js 18.17+ installed (`node --version`)
> - Try deleting `node_modules/` and `package-lock.json`, then run `npm install` again
> - If on Windows, try running the terminal as Administrator

### Step 3: Verify Installation

```bash
npm run lint
```

If the installation was successful and there are no code issues, this should run without errors.

---

## Running Locally

### Start the Development Server

```bash
npm run dev
```

This starts the Next.js development server with:

- **Hot Module Replacement (HMR)** — Changes to your code are reflected in the browser instantly without a full page reload
- **Error overlay** — TypeScript and runtime errors are shown as an overlay in the browser
- **Fast Refresh** — React components preserve their state across edits

**Expected output:**

```
  ▲ Next.js 16.2.10
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.5s
```

### Open the Website

Open your browser and go to: **http://localhost:3000**

You should see the SeismoTeck home page with the dark theme, hero section, and all content loaded.

### Available npm Scripts

| Command | What It Does |
|---------|--------------|
| `npm run dev` | Starts the development server on `http://localhost:3000` with hot reload |
| `npm run build` | Compiles the project and generates a static export in the `out/` directory |
| `npm run start` | Starts a production server (only works after `npm run build` if NOT using static export) |
| `npm run lint` | Runs ESLint to check for code quality issues |

> **Note:** Because `output: "export"` is set in `next.config.ts`, `npm run build` generates static HTML files in the `out/` directory. `npm run start` will NOT work for static exports — you'd need a static file server instead.

---

## Building for Production

### Generate a Static Export

```bash
npm run build
```

This does the following:

1. Compiles all TypeScript to JavaScript
2. Renders all pages to static HTML
3. Bundles and minifies CSS and JavaScript
4. Copies public assets
5. Outputs everything to the `out/` directory

### Preview the Build Locally

Since this is a static export, you can't use `npm start`. Instead, use any static file server:

```bash
# Using npx (no global install needed)
npx serve out

# Or using Python (if you have Python installed)
cd out
python -m http.server 3000
```

Then open http://localhost:3000 in your browser.

---

## Environment Variables

**This project currently does not use any environment variables.** All configuration is hardcoded:

- Company info → `src/utils/constants.ts`
- Next.js config → `next.config.ts`
- TypeScript config → `tsconfig.json`
- ESLint config → `eslint.config.mjs`

### When You Might Need Environment Variables

If you extend the project in the future, you may need environment variables for:

| Use Case | Variable Name (Suggested) | Where to Put It |
|----------|--------------------------|-----------------|
| Contact form backend API URL | `NEXT_PUBLIC_CONTACT_API_URL` | `.env.local` |
| Analytics tracking ID (Google Analytics) | `NEXT_PUBLIC_GA_ID` | `.env.local` |
| CMS API key (if you move content to a CMS) | `CMS_API_KEY` | `.env.local` |

> **Important:** In Next.js, environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser (client-side code can access them). Variables WITHOUT this prefix are server-side only. Since this project uses static export, only `NEXT_PUBLIC_` variables will work.

To create environment variables:

1. Create a file called `.env.local` in the project root
2. Add your variables:
   ```
   NEXT_PUBLIC_CONTACT_API_URL=https://formspree.io/f/yourformid
   ```
3. Access them in code:
   ```typescript
   const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;
   ```

> **Note:** `.env.local` is already gitignored (the `.gitignore` file includes `.env*`), so your secrets won't be committed to Git.

---

## Deployment

Since this project outputs a **static export** (plain HTML/CSS/JS files in the `out/` directory), it can be deployed to virtually any hosting platform. Here are detailed instructions for the most common options:

### Option 1: Vercel (Recommended — Zero Config)

[Vercel](https://vercel.com/) is made by the creators of Next.js and offers the easiest deployment experience.

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com/) and sign in
3. Click **"Add New Project"** and import your repository
4. Vercel automatically detects Next.js and configures everything
5. Click **"Deploy"**
6. Your site is live at `https://your-project.vercel.app`

> **Note:** Vercel auto-deploys every time you push to your main branch.

### Option 2: Netlify

1. Run `npm run build` locally
2. Go to [netlify.com](https://www.netlify.com/) and sign in
3. Drag and drop the `out/` folder into the Netlify dashboard
4. Your site is live immediately

Or connect your GitHub repo:
1. Import your repository
2. Set the build command to `npm run build`
3. Set the publish directory to `out`
4. Deploy

### Option 3: GitHub Pages

1. Run `npm run build`
2. The output is in the `out/` directory
3. Use the `gh-pages` npm package:
   ```bash
   npx gh-pages -d out
   ```
4. Go to your GitHub repo → Settings → Pages → Select the `gh-pages` branch

> **Note:** If deploying to a subpath (e.g., `https://username.github.io/repo-name/`), you'll need to set `basePath` in `next.config.ts`:
> ```typescript
> const nextConfig: NextConfig = {
>   output: "export",
>   basePath: "/repo-name",
>   images: { unoptimized: true },
> };
> ```

### Option 4: Any Static File Server

Since the `out/` directory is pure HTML/CSS/JS, you can serve it from:

- **AWS S3 + CloudFront**
- **Google Cloud Storage**
- **Firebase Hosting**
- **DigitalOcean Spaces**
- **Nginx or Apache** on any VPS
- **Surge.sh** (`npx surge out`)

---

## Troubleshooting

### Common Issues

#### `npm install` fails with permission errors

```bash
# On macOS/Linux:
sudo npm install

# On Windows: run your terminal as Administrator
```

#### Port 3000 is already in use

```bash
# Kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill

# On Windows (PowerShell):
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Or just use a different port:
npx next dev --port 3001
```

#### Images not showing up

- Make sure the images are in `public/assets/`, NOT just `assets/`
- Image paths in code should start with `/assets/` (relative to the `public/` folder)
- Check that the file extension matches exactly (`.jpeg` vs `.jpg`)

#### `npm run build` fails with "Image Optimization" errors

This should not happen because `images: { unoptimized: true }` is set. If it does, verify that `next.config.ts` contains:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

#### TypeScript errors after pulling new changes

```bash
# Delete the build cache and rebuild
rm -rf .next
npm run dev
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

#### CSS changes not appearing

- If using CSS Modules, make sure you're importing the correct `.module.css` file
- Hard refresh the browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear the Next.js cache: delete the `.next` folder and restart the dev server

---

## Contributing

### Code Style Rules

1. **TypeScript is mandatory** — All `.ts` and `.tsx` files must type-check without errors
2. **CSS Modules only** — Every component must have its own `.module.css` file. Do NOT use inline styles (except for dynamic values like `style={{ transitionDelay }}`)
3. **Use design tokens** — Always reference CSS custom properties (`var(--color-accent-primary)`) instead of hardcoding color values
4. **Use the path alias** — Import from `@/components/...` and `@/utils/...`, NOT relative paths like `../../components/...`
5. **Server Components by default** — Only add `"use client"` when you genuinely need hooks or browser APIs
6. **Keep constants centralized** — Company info, nav links, and stats belong in `src/utils/constants.ts`
7. **Meaningful alt text** — Every `<Image>` must have a descriptive `alt` attribute
8. **Follow the existing naming conventions:**
   - Component folders: `PascalCase` (e.g., `ScrollReveal/`)
   - Component files: `PascalCase.tsx` (e.g., `ScrollReveal.tsx`)
   - CSS Module files: `PascalCase.module.css` (e.g., `ScrollReveal.module.css`)
   - Page style files: `camelCase.module.css` (e.g., `about.module.css`)
   - Utility files: `camelCase.ts` (e.g., `constants.ts`)

### How to Add a New Component

1. Create a folder: `src/components/YourComponent/`
2. Create the component file: `src/components/YourComponent/YourComponent.tsx`
3. Create the style file: `src/components/YourComponent/YourComponent.module.css`
4. If the component needs interactivity, add `"use client"` at the top of the `.tsx` file
5. Export the component as `export default function YourComponent() { ... }`
6. Import and use it in the page where it's needed

**Example component:**

```tsx
// src/components/AlertBanner/AlertBanner.tsx
import React from "react";
import styles from "./AlertBanner.module.css";

interface AlertBannerProps {
  message: string;
  type: "info" | "warning" | "danger";
}

export default function AlertBanner({ message, type }: AlertBannerProps) {
  return (
    <div className={`${styles.banner} ${styles[type]}`}>
      <p>{message}</p>
    </div>
  );
}
```

```css
/* src/components/AlertBanner/AlertBanner.module.css */
.banner {
  padding: var(--space-md);
  border-radius: var(--border-radius-sm);
  font-size: var(--fs-body);
}

.info {
  background-color: rgba(0, 229, 255, 0.1);
  border: 1px solid var(--color-accent-primary);
  color: var(--color-accent-primary);
}

.warning {
  background-color: rgba(245, 158, 11, 0.1);
  border: 1px solid var(--color-accent-warm);
  color: var(--color-accent-warm);
}

.danger {
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--color-accent-danger);
  color: var(--color-accent-danger);
}
```

### Pull Request Checklist

Before submitting a pull request, make sure:

- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` succeeds without errors
- [ ] All new images are placed in `public/assets/` with descriptive names
- [ ] All new components have their own `.module.css` file
- [ ] All `<Image>` components have meaningful `alt` text
- [ ] The website is responsive and looks good on mobile (test with browser DevTools at 375px width)
- [ ] No `console.log()` statements left in the code
- [ ] CSS uses design tokens (no hardcoded colors, font sizes, or spacing values)

---

## License

**© 2026 SASVC SeismoTech Software India Private Limited. All Rights Reserved.**

This codebase, including all source code, assets, images, and documentation, is the proprietary intellectual property of SASVC SeismoTech Software India Pvt. Ltd.

### What this means:

- ❌ **You may NOT copy, reproduce, or redistribute** this code or any part of it without explicit written permission from SASVC SeismoTech Software India Pvt. Ltd.
- ❌ **You may NOT use this code** (or derivatives of it) for commercial or non-commercial projects outside of SeismoTeck
- ❌ **You may NOT create derivative works** based on this codebase
- ❌ **You may NOT sublicense** this code to third parties
- ✅ **Authorized developers and contributors** may modify the code solely for the purpose of improving the SeismoTeck website, subject to approval by the project maintainers

### Images & Media

All photographs, posters, dashboards, and media assets in the `assets/` and `public/assets/` directories are the exclusive property of SASVC SeismoTech Software India Pvt. Ltd. and its founder Umesh Prasad Verma. Unauthorized use of these images is strictly prohibited.

### Contact for Permissions

For licensing inquiries, collaboration requests, or permission to use any part of this codebase, contact:

- **Email:** upseismotek1962@gmail.com
- **Email:** umeshprasadverma64@gmail.com
- **Phone:** +91 9473289401
- **Location:** Patna, Bihar, India

---

<div align="center">

**Built for [SeismoTeck](https://seismoteck.com) — Pioneering Earthquake Forecasting Through Advanced Seismic Research • Crafted with 🧡 by [Gaprio Labs](https://hello.gaprio.in).**

*SASVC SeismoTech Software India Private Limited, Patna, Bihar, India*

</div>
