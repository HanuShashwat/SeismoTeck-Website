# SeismoTeck Website — Complete Build Specification

> **Company Full Name:** SASVC SeismoTech Software India Private Limited  
> **Short Name / Brand:** SeismoTeck  
> **Headquarters:** Patna, Bihar, India  
> **Industry:** Seismology / Earthquake Prediction / Geophysical Research / IoT-based Monitoring  
> **Founder & Lead Researcher:** Umesh Prasad Verma (referred to as "UP Verma Sir")  
> **Co-Founder & Director:** Mrs. Sweety Verma

---

## 1. Project Overview

Build a modern, elegant, and professional **multi-page website** for SeismoTeck — a seismology and earthquake prediction company. The website must convey scientific authority, technological sophistication, and trustworthiness. It is an informational/corporate website (NOT a SaaS dashboard or e-commerce store).

### Design References (study the layout patterns, NOT copy them)
1. **NASA.gov** — Dark space-themed hero sections, clean card-grid layouts for news/articles, prominent featured media, bold typography hierarchy, sticky navigation with dropdowns.
2. **IMD Mausam (mausam.imd.gov.in)** — Government/institutional look, quick-link bar system, data-driven sections (weather maps, warnings), marquee-style news ticker, structured grid layout for information density.

### Design Principles
- **Dark theme with deep space/earth tones** — Primary dark background (`#0a0e17`), accented with teal/cyan glows (`#00e5ff`, `#00bcd4`) reminiscent of seismic wave visualizations.
- **Scientific and premium feel** — Not flashy or playful. Think: NASA mission control aesthetic.
- **Clean typography** — Use Google Font `Inter` for body and `Outfit` for headings.
- **Subtle animations** — Fade-in on scroll, gentle parallax on hero images, hover glow effects on cards. NO excessive or distracting animations.
- **Fully responsive** — Mobile-first design. Must look excellent on 320px to 1920px+ screens.

---

## 2. Tech Stack (MANDATORY)

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | **Next.js 14+** (App Router) | Use `npx -y create-next-app@latest ./` with `--ts`, `--tailwind no`, `--eslint`, `--app`, `--src-dir`, `--import-alias "@/*"` flags. Run with `--help` first to confirm available flags. |
| Language | **TypeScript** | Strict mode enabled |
| Styling | **Vanilla CSS** (CSS Modules) | Each component gets its own `.module.css` file. NO Tailwind. NO styled-components. |
| Fonts | Google Fonts: `Inter` (400, 500, 600, 700) + `Outfit` (500, 600, 700, 800) | Import via `next/font/google` |
| Images | Next.js `<Image>` component | All images from `public/assets/` directory |
| Icons | Inline SVGs or a lightweight icon library (e.g. `lucide-react`) | Install via npm if needed |
| Animations | CSS animations + `IntersectionObserver` for scroll reveals | NO heavy animation libraries |
| Deployment target | Static export compatible | Ensure `output: 'export'` works in `next.config.js` if needed |

### Project Initialization Command
```bash
npx -y create-next-app@latest ./ --ts --eslint --app --src-dir --import-alias "@/*"
```
> **IMPORTANT:** When prompted, select **NO** for Tailwind CSS. If the CLI doesn't support `--tailwind no`, decline Tailwind during the interactive setup or remove it after initialization.

---

## 3. Project Directory Structure

```
seismoteck_website/
├── public/
│   └── assets/                    # Copy all images from root assets/ here
│       ├── img1.jpeg              # Hero: Earth from space, India highlighted
│       ├── img2.jpeg              # Hero: Earth with tectonic plates + dashboard
│       ├── img3.jpeg              # Product: IoT sensor in field
│       ├── img4.jpg               # News: 2026 Mindanao earthquake article
│       ├── img5.jpg               # Dashboard: Multi-location earthquake data
│       ├── img6.jpg               # Dashboard: Philippine seismic zone monitoring
│       ├── img7.jpg               # News: Japan & Venezuela earthquakes
│       ├── img8.jpg               # About: Founder with IPS officer
│       ├── img9.jpg               # Media: Earthquake warning poster (Hindi)
│       ├── img10.jpg              # About: Founder lecturing to students
│       ├── img11.jpg              # About: Founder with influential person
│       ├── img12.jpg              # Media: Times of India article screenshot
│       ├── img13.jpg              # About: Founder at Founders Meet
│       ├── img14.jpg              # Team: Founder with team
│       ├── img15.jpg              # Media: SAHAS Alert system poster
│       ├── img16.jpg              # About: Collage — military + Dept of Industries
│       ├── img17.jpg              # About: Founder with diplomats at Bihar govt
│       ├── img18.jpg              # Team: Founder with interns, IoT research
│       ├── img19.jpg              # Team: Dr. Sankar Dayal (Advisor)
│       ├── img20.jpg              # Team: Dr. Prakash Chandra (Consultant)
│       ├── img21.jpg              # Team: Mrs. Sweety Verma (Co-founder)
│       └── img22.jpg              # Team: Kanhaiya Saran (Marketing Manager)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (fonts, metadata, navbar, footer)
│   │   ├── page.tsx               # Home page
│   │   ├── globals.css            # Global styles + CSS custom properties
│   │   ├── about/
│   │   │   └── page.tsx           # About Us page
│   │   ├── technology/
│   │   │   └── page.tsx           # Technology & Products page
│   │   ├── predictions/
│   │   │   └── page.tsx           # Predictions & Case Studies page
│   │   ├── media/
│   │   │   └── page.tsx           # Media & Recognition page
│   │   ├── team/
│   │   │   └── page.tsx           # Team page
│   │   └── contact/
│   │       └── page.tsx           # Contact page
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── SectionHeading/
│   │   │   ├── SectionHeading.tsx
│   │   │   └── SectionHeading.module.css
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   └── Card.module.css
│   │   ├── TeamCard/
│   │   │   ├── TeamCard.tsx
│   │   │   └── TeamCard.module.css
│   │   ├── NewsCard/
│   │   │   ├── NewsCard.tsx
│   │   │   └── NewsCard.module.css
│   │   ├── ImageGallery/
│   │   │   ├── ImageGallery.tsx
│   │   │   └── ImageGallery.module.css
│   │   ├── StatCounter/
│   │   │   ├── StatCounter.tsx
│   │   │   └── StatCounter.module.css
│   │   ├── ScrollReveal/
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── ScrollReveal.module.css
│   │   ├── NewsTicker/
│   │   │   ├── NewsTicker.tsx
│   │   │   └── NewsTicker.module.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactForm.module.css
│   │   └── VideoEmbed/
│   │       ├── VideoEmbed.tsx
│   │       └── VideoEmbed.module.css
│   └── utils/
│       └── constants.ts           # Site-wide constants (company info, nav links, etc.)
├── AGENTS.md
├── README.md
└── assets/                        # Original images (keep untouched, copy to public/assets/)
    ├── img1.jpeg ... img22.jpg
    └── img_description.md
```

---

## 4. Global Design Tokens (CSS Custom Properties)

Define these in `src/app/globals.css`:

```css
:root {
  /* === Colors === */
  --color-bg-primary: #0a0e17;
  --color-bg-secondary: #111827;
  --color-bg-card: #1a1f2e;
  --color-bg-card-hover: #222842;
  --color-surface: #0f1923;
  --color-border: #1e293b;
  --color-border-glow: rgba(0, 229, 255, 0.3);

  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;

  --color-accent-primary: #00e5ff;     /* Cyan / teal glow */
  --color-accent-secondary: #00bcd4;
  --color-accent-warm: #f59e0b;        /* Amber for warnings/highlights */
  --color-accent-danger: #ef4444;      /* Red for seismic alerts */
  --color-accent-success: #10b981;     /* Green for verified predictions */

  --gradient-hero: linear-gradient(135deg, #0a0e17 0%, #0f2027 50%, #0a0e17 100%);
  --gradient-card: linear-gradient(145deg, #1a1f2e, #111827);
  --gradient-accent: linear-gradient(90deg, #00e5ff, #00bcd4);
  --glow-cyan: 0 0 20px rgba(0, 229, 255, 0.15);
  --glow-cyan-strong: 0 0 40px rgba(0, 229, 255, 0.25);

  /* === Typography === */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;

  --fs-display: clamp(2.5rem, 5vw, 4rem);
  --fs-h1: clamp(2rem, 4vw, 3rem);
  --fs-h2: clamp(1.5rem, 3vw, 2.25rem);
  --fs-h3: clamp(1.25rem, 2.5vw, 1.75rem);
  --fs-h4: clamp(1.1rem, 2vw, 1.375rem);
  --fs-body: 1rem;
  --fs-body-lg: 1.125rem;
  --fs-small: 0.875rem;
  --fs-xs: 0.75rem;

  /* === Spacing === */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  --space-section: clamp(4rem, 8vw, 8rem);

  /* === Layout === */
  --max-width: 1280px;
  --max-width-narrow: 900px;
  --border-radius-sm: 8px;
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  --border-radius-xl: 24px;

  /* === Transitions === */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

---

## 5. Page-by-Page Specification

---

### 5.1 Root Layout (`src/app/layout.tsx`)

**Metadata:**
```typescript
export const metadata: Metadata = {
  title: {
    default: 'SeismoTeck — Advanced Earthquake Prediction & Seismic Research',
    template: '%s | SeismoTeck'
  },
  description: 'SASVC SeismoTech Software India Pvt. Ltd. — Pioneering earthquake prediction through advanced multi-parametric monitoring, IoT sensors, and satellite-based seismic analysis.',
  keywords: ['earthquake prediction', 'seismic monitoring', 'IoT sensors', 'seismology', 'tectonic plates', 'SAHAS Alert', 'SeismoTeck', 'India'],
  openGraph: {
    title: 'SeismoTeck — Advanced Earthquake Prediction',
    description: 'Pioneering earthquake prediction through advanced seismic research and IoT monitoring.',
    type: 'website',
    locale: 'en_IN',
  },
};
```

**Structure:**
- Import Google Fonts (`Inter`, `Outfit`) via `next/font/google`.
- Apply fonts to `<body>` using CSS variable injection.
- Render `<Navbar />` at the top (sticky).
- Render `{children}` in `<main>`.
- Render `<Footer />` at the bottom.
- The `<body>` should have `background-color: var(--color-bg-primary)` and `color: var(--color-text-primary)`.

---

### 5.2 Home Page (`src/app/page.tsx`)

The home page has **7 sections**, rendered in this exact order:

#### Section 1: Hero
- **Component:** `<Hero />`
- **Background:** `img1.jpeg` — Earth from space with India highlighted. Use Next.js `<Image>` with `fill`, `priority`, `quality={90}`, and `object-fit: cover`. Apply a dark semi-transparent overlay gradient on top.
- **Content overlay:**
  - Pre-heading label: `"SASVC SeismoTech Software India Pvt. Ltd."` — small, uppercase, letter-spaced, in accent cyan color.
  - Main heading: `"Pioneering Earthquake Prediction Through Advanced Seismic Research"` — Use `var(--fs-display)`, font `Outfit`, weight 700.
  - Subtext (1–2 lines): `"Leveraging IoT sensors, satellite data, and multi-parametric analysis to forecast seismic activity with unprecedented accuracy."` — Use `var(--fs-body-lg)`, color `var(--color-text-secondary)`.
  - Two CTA buttons side by side:
    1. **Primary:** `"Explore Our Technology"` → links to `/technology`. Styled: solid background `var(--color-accent-primary)`, dark text, rounded, hover glow.
    2. **Secondary:** `"View Predictions"` → links to `/predictions`. Styled: transparent with cyan border, cyan text, hover fill.
- **Height:** Full viewport height (`100vh`), with content vertically centered.
- **Animation:** Fade-in + slight upward slide for text content on page load (CSS `@keyframes`, not a library).

#### Section 2: News Ticker / Marquee
- **Component:** `<NewsTicker />`
- **Design:** Inspired by IMD's marquee bar. A horizontal strip below the hero with scrolling news text.
- **Background:** `var(--color-bg-secondary)` with top/bottom border in `var(--color-border)`.
- **Content (hardcoded array of strings):**
  1. `"ALERT: 2026 Mindanao Earthquake (Magnitude 6.9) — Successfully predicted by SAHAS Alert System"`
  2. `"SeismoTeck's IoT sensor network now deployed across 15+ monitoring stations in Bihar and Uttarakhand"`
  3. `"Founder UP Verma's earthquake prediction for Nepal (Magnitude 6+) confirmed within 48 hours — Times of India"`
  4. `"New partnership with Bihar State Disaster Management Authority (BSDMA) for early warning systems"`
- **Animation:** CSS `@keyframes` horizontal scroll from right to left, continuous loop. Pause on hover.

#### Section 3: Key Innovations Grid
- **Layout:** Section heading + 3-column grid of cards.
- **Section heading text:** `"Our Innovations"` with subtext: `"Advanced technology driving the future of earthquake prediction"`
- **Card 1:**
  - **Image:** `img2.jpeg` (Earth with tectonic plates and dashboard overlays)
  - **Title:** `"Advanced Seismic Imaging & Plate Tectonic Modeling"`
  - **Description:** `"Our proprietary software analyzes tectonic plate movements, fault line stress, and historical seismic data to model earthquake probability in real time."`
- **Card 2:**
  - **Image:** `img3.jpeg` (IoT sensor field deployment)
  - **Title:** `"IoT-Based Geophysical Monitoring"`
  - **Description:** `"Solar-powered IoT sensors deployed in field locations acquire real-time geophysical data including radon levels, CO₂ emissions, thermal anomalies, and ground water fluctuations."`
- **Card 3:**
  - **Image:** `img5.jpg` (Multi-location earthquake dashboard)
  - **Title:** `"Multi-Parametric Monitoring Dashboard"`
  - **Description:** `"Our SAHAS Alert dashboard tracks multiple seismic parameters across different regions — including Radon, CO₂, Thermal, TEC-V, MF2, and water table fluctuations — for comprehensive pre-seismic analysis."`
- **Card styling:** Dark card with border, rounded corners, image on top (16:9 aspect ratio), text below. Subtle cyan border-glow on hover. Slight scale(1.02) transform on hover.

#### Section 4: Featured Prediction Highlight
- **Layout:** Full-width section with side-by-side layout (image left, text right on desktop; stacked on mobile).
- **Image:** `img6.jpg` (Philippine seismic zone dashboard). Rendered with a subtle cyan glow border / shadow.
- **Content (right side):**
  - Label: `"FEATURED CASE STUDY"` — small, uppercase, accent color.
  - Heading: `"Philippine Archipelago Seismic Zone — Critical Assessment"`
  - Bullet points (styled as a list with cyan bullet markers):
    - `"Advanced multi-parametric monitoring dashboard"`
    - `"KP Index tracking: 6.8 (Storm Level)"`
    - `"Lunar phase correlation: Last quarter — 62% increasing tidal loading"`
    - `"Real-time analysis: May 25 to June 8 assessment window"`
    - `"99% success rate in Eastern Hemisphere earthquake forecasting"`
  - CTA link: `"View All Predictions →"` → links to `/predictions`

#### Section 5: Statistics / Impact Counter
- **Component:** `<StatCounter />`
- **Layout:** Full-width dark section with 4 stat items in a row.
- **Background:** Subtle gradient or semi-transparent pattern.
- **Stats (hardcoded):**
  1. Icon: seismic wave icon | Number: `99%` | Label: `"Prediction Accuracy"`
  2. Icon: globe icon | Number: `15+` | Label: `"Monitoring Stations"`
  3. Icon: calendar icon | Number: `10+` | Label: `"Years of Research"`
  4. Icon: alert icon | Number: `50+` | Label: `"Verified Predictions"`
- **Animation:** Numbers should animate (count up) when the section scrolls into view using `IntersectionObserver`. Use a simple counter effect with `requestAnimationFrame`.

#### Section 6: Media & Recognition Preview
- **Layout:** Section heading + featured video + 2-column grid showing 2 featured media items, plus a "View All Media →" link to `/media`.
- **Featured Video (above the grid):**
  - **Component:** `<VideoEmbed />`
  - **YouTube URL:** `https://www.youtube.com/embed/Uc38C2OJFyg`
  - **Title:** `"HTV News: Earthquake Prediction Analysis by Umesh Prasad Verma"`
  - **Description below video:** `"A news report covering Umesh Prasad Verma's earthquake prediction methodology, based on 20 years of research. The report discusses forecasts for the India-Pakistan border region and other seismically active zones."`
  - **Layout:** Full-width 16:9 responsive embed, centered within `var(--max-width)` container, with bottom margin before the card grid.
- **Item 1:**
  - **Image:** `img12.jpg` (Times of India article)
  - **Title:** `"Times of India: Teacher's Earthquake Forecast Comes True"`
  - **Description:** `"'Motihari school teacher Umesh Prasad Verma predicted an earthquake of magnitude above six would hit Nepal within 48 hours' — and it came true."`
- **Item 2:**
  - **Image:** `img4.jpg` (2026 Mindanao earthquake Wikipedia)
  - **Title:** `"2026 Mindanao Earthquake — Predicted by SAHAS Alert"`
  - **Description:** `"The magnitude 6.9 earthquake in Glan, Sarangani was successfully predicted using SeismoTeck's multi-parametric monitoring system."`

#### Section 7: Call to Action / Contact Teaser
- **Layout:** Centered text block over a dark gradient background.
- **Heading:** `"Partner with Us for a Safer Tomorrow"`
- **Subtext:** `"Explore collaboration opportunities in earthquake prediction research, IoT sensor deployment, and disaster preparedness."`
- **CTA Button:** `"Get in Touch"` → links to `/contact`. Primary button style.

---

### 5.3 About Page (`/about`)

**Page Title (metadata):** `"About Us"`

**Sections:**

1. **Page Header Banner**
   - Background: Dark gradient with subtle Earth imagery overlay (use `img1.jpeg` at very low opacity ~10-15%).
   - Heading: `"About SeismoTeck"`
   - Subtext: `"Pioneering seismic research and earthquake prediction from the heart of India"`

2. **Company Overview**
   - Full-width text block with 2–3 paragraphs describing:
     - SASVC SeismoTech Software India Pvt. Ltd. is based in Patna, Bihar.
     - Founded by Umesh Prasad Verma, a researcher and educator who developed the SAHAS Alert system.
     - The company specializes in earthquake prediction using satellite data, IoT sensors, and multi-parametric analysis.
     - Claims a 99% success rate in forecasting time, location, and intensity of earthquakes in the Eastern Hemisphere.
     - The SAHAS Alert system uses satellite data and can detect underground rumbling sounds within a 10–500 km radius, from 7 days to 2 days before an earthquake, with a final alert approximately 1 minute before.
   - **IMPORTANT NOTE FOR THE AGENT:** Frame all prediction claims carefully. Use phrasing like "The company reports...", "According to SeismoTeck's research...", "The system is designed to..." — do NOT present unverified claims as established scientific fact.

3. **Founder Spotlight**
   - Side-by-side layout: Photo left, bio right.
   - **Image:** `img10.jpg` (Founder lecturing to students). Use Next.js `<Image>`, rounded corners.
   - **Name:** `"Umesh Prasad Verma"`
   - **Title:** `"Founder & Lead Researcher"`
   - **Bio (2-3 paragraphs):**
     - Educator and seismology researcher based in Motihari, Bihar.
     - Has delivered lectures to colleges and institutions about earthquake prediction methodology.
     - Developed the SAHAS Alert system and founded SASVC SeismoTech Software India Pvt. Ltd.
     - Has been featured in Times of India for predicting a magnitude 6+ earthquake in Nepal within 48 hours.

4. **Gallery of Recognition / Associations**
   - Heading: `"Recognition & Collaborations"`
   - Use `<ImageGallery />` component — a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile) of images with captions.
   - Images to include with captions:
     - `img8.jpg` — `"With senior IPS officer"`
     - `img11.jpg` — `"Meeting with government officials"`
     - `img13.jpg` — `"At a Founders Meet"`
     - `img16.jpg` — `"With military professionals & at Dept. of Industries, Govt. of Bihar"`
     - `img17.jpg` — `"With senior diplomats at the Bihar Government office"`
   - Each image: rounded corners, dark border, subtle hover zoom effect (scale 1.05), caption below in muted text.

---

### 5.4 Technology Page (`/technology`)

**Page Title (metadata):** `"Technology & Products"`

**Sections:**

1. **Page Header Banner**
   - Heading: `"Our Technology"`
   - Subtext: `"Cutting-edge tools for seismic monitoring and earthquake forecasting"`

2. **SAHAS Alert System**
   - Full-width feature section with alternating layout (text left, image right).
   - **Image:** `img15.jpg` (SAHAS Alert system poster)
   - **Content:**
     - Heading: `"SAHAS Alert — Earthquake Early Warning System"`
     - Description covering:
       - Software developed by SASVC SeismoTech for medium-range earthquake forecasting.
       - Uses satellite data to analyze the Eastern Hemisphere.
       - Capable of detecting warning signals (underground rumbling) within 10–500 km radius.
       - Detection timeline: 7 days to 2 days before earthquake, with final alert ~1 minute before.
       - Multi-parametric analysis: Radon, CO₂, Thermal anomalies, TEC-V, MF2, Water table fluctuations.

3. **IoT Sensor Network**
   - Alternating layout (image left, text right).
   - **Image:** `img3.jpeg` (IoT sensor field deployment)
   - **Content:**
     - Heading: `"IoT-Based Geophysical Monitoring Sensors"`
     - Description: Solar-powered sensors for field deployment. Acquiring real-time pre-seismic geophysical data. Parameters monitored: radon emissions, CO₂ levels, thermal anomalies, groundwater fluctuations.
   - Also reference `img18.jpg` (team working on IoT devices) as a secondary image in this section.

4. **Monitoring Dashboard**
   - Show `img5.jpg` and `img6.jpg` side by side (or as a 2-column grid).
   - Description: Dashboard showing earthquake monitoring data for locations including Central Mexico, South Mexico, Western Chile, Argentina, Philippine Archipelago.
   - Highlight tracked parameters: Radon, CO₂, Thermal, TEC-V, MF2, Water table fluctuations.

5. **Seismic Imaging**
   - **Image:** `img2.jpeg` (Earth with tectonic plates and waveform data)
   - Description: Advanced seismic imaging and plate tectonic modeling. Visualization of historical earthquake data, fault lines, and seismic frequency waveforms.

---

### 5.5 Predictions & Case Studies Page (`/predictions`)

**Page Title (metadata):** `"Predictions & Case Studies"`

**Sections:**

1. **Page Header Banner**
   - Heading: `"Predictions & Case Studies"`
   - Subtext: `"Documented forecasts and verified earthquake predictions"`

2. **Case Study Cards** — Grid of detailed case study entries:

   **Case Study 1: 2026 Mindanao Earthquake**
   - **Image:** `img4.jpg`
   - **Heading:** `"2026 Mindanao Earthquake — Glan, Sarangani"`
   - **Details:** Successfully predicted by SAHAS Alert. Magnitude and location matched predictions from multi-parametric data analysis.

   **Case Study 2: Nepal Earthquake Prediction**
   - **Image:** `img12.jpg`
   - **Heading:** `"Nepal Earthquake — Magnitude 6+ Predicted Within 48 Hours"`
   - **Details:** As reported by Times of India: "Motihari school teacher Umesh Prasad Verma predicted an earthquake of magnitude above six would hit Nepal within 48 hours" — and it was confirmed.

   **Case Study 3: Japan (Noda) Earthquake**
   - **Image:** `img7.jpg`
   - **Heading:** `"Noda, Japan — Magnitude 6.9 & Moron, Venezuela — Magnitude 7.1"`
   - **Details:** Monitoring of the Japan region earthquake of magnitude 6.9 and the earlier Venezuela earthquake of magnitude 7.1 on the same day.

   **Case Study 4: Philippine Archipelago Monitoring**
   - **Image:** `img6.jpg`
   - **Heading:** `"Philippine Archipelago Seismic Zone — Multi-Parametric Assessment"`
   - **Details:** Critical assessment from May 25 to June 8. KP Index 6.8 (Storm Level). Lunar phase: Last Quarter with 62% increasing tidal loading. Comprehensive multi-parametric dashboard analysis.

3. **Earthquake Warning Posters Section**
   - Heading: `"Public Earthquake Warnings Issued by SeismoTeck"`
   - Display `img9.jpg` and `img15.jpg` as featured items with descriptions.
   - `img9.jpg` caption: Public warning about earthquake sensitivity in Narkatiaganj (West Champaran, Bihar) and Uttarakhand. Issued by researcher Umesh Prasad Verma.
   - `img15.jpg` caption: SAHAS Alert system poster outlining prediction methodology and specific forecasted events.
   - **IMPORTANT:** Add a disclaimer note below this section: _"Note: The predictions and warnings shown above represent claims made by SeismoTeck's research team. They are not independently verified by government seismological agencies."_

---

### 5.6 Media & Recognition Page (`/media`)

**Page Title (metadata):** `"Media & Recognition"`

**Sections:**

1. **Page Header Banner**
   - Heading: `"Media & Recognition"`
   - Subtext: `"Coverage, partnerships, and milestones"`

2. **Featured Video Section**
   - **Component:** `<VideoEmbed />`
   - **Heading:** `"Featured: HTV News Coverage"`
   - **YouTube URL:** `https://www.youtube.com/embed/Uc38C2OJFyg`
   - **Embed ID:** `Uc38C2OJFyg` (extract from the YouTube URL `https://youtu.be/Uc38C2OJFyg`)
   - **Layout:** Full-width responsive 16:9 iframe embed, centered within `var(--max-width-narrow)` container (900px).
   - **Title below video:** `"HTV News: Earthquake Prediction Analysis by Umesh Prasad Verma"`
   - **Description below video (2 paragraphs):**
     - Paragraph 1: `"This news report covers the earthquake prediction work of Umesh Prasad Verma, who is described as having researched earthquake prediction for over 20 years. The report discusses his forecasts for seismically active regions, including the India–Pakistan border, the Afghanistan–Iran border, and the Afghanistan–Pakistan border, with predicted magnitudes ranging from 5.0 to 6.5."`
     - Paragraph 2: `"According to Verma, his prediction method is based on proprietary data analysis. The report notes that earthquake prediction remains an unsolved scientific challenge, and these forecasts represent Verma's independent research claims."`
   - **Disclaimer (styled in muted text, smaller font):** `"Note: The predictions discussed in this video represent claims made by the researcher. They are not independently verified by recognized seismological institutions or government agencies."`
   - **Styling:** Dark card background wrapping the video + text. Rounded corners. Subtle cyan glow border on the video container.

3. **News Articles Grid**
   - Use `<NewsCard />` components in a 2-column grid.
   - **Article 1:** `img12.jpg` — Times of India article. Title: "Times of India: Teacher's Earthquake Forecast Comes True". Summary from the article text.
   - **Article 2:** `img4.jpg` — Wikipedia article on 2026 Mindanao Earthquake. Title: "2026 Mindanao Earthquake Documentation".
   - **Article 3:** `img7.jpg` — Japan/Venezuela earthquake coverage. Title: "Dual Earthquake Events: Japan & Venezuela Monitoring".

4. **Earthquake Warning Posters**
   - Grid showing `img9.jpg` and `img15.jpg` with full descriptions (same as in predictions page).

5. **Recognition & Government Association Gallery**
   - Display in a gallery grid:
     - `img8.jpg` — Founder with senior IPS officer
     - `img11.jpg` — Founder with influential person
     - `img13.jpg` — Founder at Founders Meet
     - `img16.jpg` — Collage: with military professionals + at Department of Industries, Bihar
     - `img17.jpg` — With diplomats at Bihar Government office
   - Each with a short caption.

---

### 5.7 Team Page (`/team`)

**Page Title (metadata):** `"Our Team"`

**Sections:**

1. **Page Header Banner**
   - Heading: `"Our Team"`
   - Subtext: `"The people behind SeismoTeck's mission"`

2. **Leadership Section**
   - Heading: `"Leadership"`
   - Use `<TeamCard />` components — photo + name + role + short bio.
   - **Person 1:**
     - **Image:** `img10.jpg` (Founder lecturing) — or use `img14.jpg` (founder with team) if portrait-oriented
     - **Name:** `"Umesh Prasad Verma"`
     - **Role:** `"Founder & Lead Researcher"`
     - **Bio:** `"Educator, seismology researcher, and inventor of the SAHAS Alert earthquake prediction system. Based in Motihari, Bihar."`
   - **Person 2:**
     - **Image:** `img21.jpg`
     - **Name:** `"Mrs. Sweety Verma"`
     - **Role:** `"Co-Founder & Director"`
     - **Bio:** `"Co-founder and director of SASVC SeismoTech Software India Pvt. Ltd., overseeing operations and strategic direction."`

3. **Advisors & Consultants Section**
   - Heading: `"Advisors & Consultants"`
   - **Person 1:**
     - **Image:** `img19.jpg`
     - **Name:** `"Dr. Sankar Dayal"`
     - **Role:** `"Strategic Planning & Policy Advisor"`
     - **Bio:** `"Ex-Advisor of Bihar State Disaster Management Authority (BSDMA), Patna, Government of Bihar."`
   - **Person 2:**
     - **Image:** `img20.jpg`
     - **Name:** `"Dr. Prakash Chandra"`
     - **Role:** `"Programmer Consultant"`
     - **Bio:** `"Technology consultant from IIT Kanpur, advising on software architecture and computational modeling."`

4. **Team Members Section**
   - Heading: `"Team"`
   - **Person 1:**
     - **Image:** `img22.jpg`
     - **Name:** `"Kanhaiya Saran, MCA"`
     - **Role:** `"Marketing Manager"`
     - **Bio:** `"Leads marketing strategy and outreach for SeismoTeck's products and services."`

5. **Team Group Photos Section**
   - Heading: `"Our Team in Action"`
   - Gallery of team photos:
     - `img14.jpg` — `"Founder with the core team"`
     - `img18.jpg` — `"Research team working on IoT devices and sensor development"`

---

### 5.8 Contact Page (`/contact`)

**Page Title (metadata):** `"Contact Us"`

**Sections:**

1. **Page Header Banner**
   - Heading: `"Contact Us"`
   - Subtext: `"Get in touch for collaborations, inquiries, or partnerships"`

2. **Contact Content (Two columns: Form left, Info right)**

   **Left: Contact Form (`<ContactForm />`)**
   - Fields:
     - Full Name (text input, required)
     - Email Address (email input, required)
     - Subject (text input, required)
     - Message (textarea, required, min 4 rows)
   - Submit button: `"Send Message"` — primary button style.
   - The form should have `onSubmit` handler that prevents default and shows an alert: `"Thank you for your message! We will get back to you soon."` (No backend needed — this is a static website.)
   - Style: Dark card background, inputs with dark background + light borders, focus state with cyan border glow.

   **Right: Contact Information**
   - **Company Name:** SASVC SeismoTech Software India Pvt. Ltd.
   - **Address:** Patna, Bihar, India
   - **Email:** info@seismoteck.com (placeholder — use as display only)
   - **Founder:** Umesh Prasad Verma
   - Small map placeholder or a decorative element (do NOT embed an actual Google Map — just show the address).

---

## 6. Component Specifications

### 6.1 `<Navbar />`
- **Position:** Sticky top (`position: sticky; top: 0; z-index: 1000`).
- **Background:** `var(--color-bg-primary)` with slight transparency (`rgba(10, 14, 23, 0.95)`) and `backdrop-filter: blur(12px)`.
- **Height:** 70px.
- **Layout:** Logo (left) + Nav links (center) + CTA button (right). On mobile: hamburger menu.
- **Logo:** Text-based — `"SeismoTeck"` in `Outfit` font, weight 700, with a cyan accent dot or underline. No image logo needed.
- **Nav Links:** Home, About, Technology, Predictions, Media, Team, Contact. Font: Inter 500, size 0.9375rem. Hover: cyan underline animation (sliding in from left).
- **CTA Button (desktop only):** `"Contact Us"` → `/contact`. Small accent-colored button.
- **Mobile:** Hamburger icon (3 horizontal lines). Opens a full-screen overlay menu with centered links. Smooth slide-in animation.
- **Bottom border:** 1px solid `var(--color-border)`.

### 6.2 `<Footer />`
- **Background:** `var(--color-surface)` — darker than primary bg.
- **Layout:** 4-column grid on desktop, stacked on mobile.
  - **Column 1:** Logo + company description (2-3 lines) + "SASVC SeismoTech Software India Pvt. Ltd."
  - **Column 2:** Quick Links — Home, About, Technology, Predictions, Media, Team, Contact.
  - **Column 3:** Contact Info — Address (Patna, Bihar), Email.
  - **Column 4:** Social Media placeholder links (LinkedIn, Twitter icons — use `#` as href).
- **Bottom bar:** Copyright notice: `"© 2026 SASVC SeismoTech Software India Pvt. Ltd. All rights reserved."` — centered, with top border.

### 6.3 `<Hero />`
- **Props:** `backgroundImage: string`, `preHeading?: string`, `heading: string`, `subtext: string`, `ctaPrimary?: { label: string; href: string }`, `ctaSecondary?: { label: string; href: string }`, `fullHeight?: boolean`
- Reusable for both the home page full-viewport hero and page header banners (which are shorter, ~40vh).

### 6.4 `<SectionHeading />`
- **Props:** `title: string`, `subtitle?: string`, `align?: 'left' | 'center'`
- Renders an `<h2>` with optional subtitle `<p>` below. Used consistently across all pages for section introductions.
- Includes a small decorative cyan underline element below the title.

### 6.5 `<Card />`
- **Props:** `image: string`, `imageAlt: string`, `title: string`, `description: string`, `href?: string`
- Dark card with image on top, text content below. Used in innovations grid, case studies, etc.

### 6.6 `<TeamCard />`
- **Props:** `image: string`, `name: string`, `role: string`, `bio: string`
- Circular or rounded-square image, name, role (in accent color), bio text below. Dark card background.

### 6.7 `<NewsCard />`
- **Props:** `image: string`, `imageAlt: string`, `title: string`, `summary: string`, `date?: string`
- Horizontal card layout on desktop (image left, text right). Stacked on mobile.

### 6.8 `<ScrollReveal />`
- **Props:** `children: React.ReactNode`, `delay?: number`
- Wrapper component that applies a fade-in + slide-up animation when the element enters the viewport.
- Use `IntersectionObserver` in a `useEffect` hook (client component with `'use client'` directive).
- Animation: `opacity: 0 → 1`, `translateY(30px) → 0` over 600ms with ease-out.

### 6.9 `<StatCounter />`
- Displays a number that animates from 0 to the target value when scrolled into view.
- Use `IntersectionObserver` + `requestAnimationFrame` for the counting animation.
- Suffix support (e.g., `%`, `+`).

### 6.10 `<NewsTicker />`
- Horizontal scrolling text bar. CSS-only animation using `@keyframes translateX`.
- Pause on hover using `animation-play-state: paused`.

### 6.11 `<ImageGallery />`
- **Props:** `images: Array<{ src: string; alt: string; caption: string }>`
- Responsive grid of images with captions. Hover zoom effect.

### 6.12 `<ContactForm />`
- Client component (`'use client'`).
- Controlled form with React state.
- Input styling: Dark background, subtle border, cyan focus glow, placeholder text in muted color.
- Submit button matches primary CTA style.

### 6.13 `<VideoEmbed />`
- **Props:** `youtubeId: string`, `title: string`, `description?: string`, `disclaimer?: string`
- Client component (`'use client'`) — needed for lazy loading logic.
- Renders a responsive 16:9 YouTube iframe embed.
- **Implementation details:**
  - Use an `<iframe>` with `src="https://www.youtube.com/embed/{youtubeId}"` and attributes: `frameBorder="0"`, `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"`, `allowFullScreen`, `loading="lazy"`, `title={title}`.
  - Wrap the iframe in a container div with `position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;` (standard 16:9 responsive embed technique). The iframe itself should have `position: absolute; top: 0; left: 0; width: 100%; height: 100%;`.
  - Below the iframe, render the `title` as a heading (`<h3>`) and `description` as a `<p>` in muted text.
  - If `disclaimer` is provided, render it as a small italic paragraph in `var(--color-text-muted)` with a top border separator.
- **Styling (VideoEmbed.module.css):**
  - Outer card: `background: var(--gradient-card)`, `border: 1px solid var(--color-border)`, `border-radius: var(--border-radius-lg)`, `overflow: hidden`, `padding: 0 0 var(--space-lg) 0`.
  - Video container: cyan glow box-shadow on hover (`var(--glow-cyan)`).
  - Title text: `font-family: var(--font-heading)`, `font-size: var(--fs-h3)`, padding inside card.
  - Description: `color: var(--color-text-secondary)`, padding inside card.

### YouTube Video Reference
- **URL:** `https://youtu.be/Uc38C2OJFyg`
- **Embed URL:** `https://www.youtube.com/embed/Uc38C2OJFyg`
- **Embed ID:** `Uc38C2OJFyg`
- **Video Title:** HTV News coverage of earthquake prediction by Umesh Prasad Verma
- **Video Content Summary:** A news report discussing Umesh Prasad Verma's earthquake prediction work, covering forecasts for the India–Pakistan border (magnitude up to 6.5), Afghanistan–Iran border, Afghanistan–Pakistan border (magnitude 5.0+), and Indonesian/Indian Ocean regions. Claims approximately 75% accuracy over 20 years of research. The report acknowledges earthquake prediction remains scientifically unresolved.
- **Used on pages:** Home (Section 6: Media Preview), Media page (Section 2: Featured Video)

---

## 7. Image Mapping Reference (Complete)

| Image File | Section(s) Used In | Purpose |
|------------|-------------------|---------|
| `img1.jpeg` | Home Hero, About page header bg | Earth from space, India highlighted — hero background |
| `img2.jpeg` | Home Innovations grid, Technology page | Earth + tectonic plates + dashboard — seismic imaging |
| `img3.jpeg` | Home Innovations grid, Technology page | IoT sensor field deployment — product showcase |
| `img4.jpg` | Home Media preview, Predictions page, Media page | Wikipedia: 2026 Mindanao earthquake article |
| `img5.jpg` | Home Innovations grid, Technology page | Multi-location earthquake dashboard |
| `img6.jpg` | Home Featured Prediction, Predictions page | Philippine seismic zone dashboard |
| `img7.jpg` | Predictions page, Media page | Japan (Noda) + Venezuela earthquakes |
| `img8.jpg` | About gallery, Media gallery | Founder with IPS officer |
| `img9.jpg` | Predictions page, Media page | Earthquake warning poster (Hindi) |
| `img10.jpg` | About Founder Spotlight, Team page | Founder lecturing to students |
| `img11.jpg` | About gallery, Media gallery | Founder with influential person |
| `img12.jpg` | Home Media preview, Predictions page, Media page | Times of India article screenshot |
| `img13.jpg` | About gallery, Media gallery | Founder at Founders Meet |
| `img14.jpg` | Team page | Founder with team |
| `img15.jpg` | Predictions page, Media page, Technology page | SAHAS Alert system poster |
| `img16.jpg` | About gallery, Media gallery | Collage: military + Dept. of Industries |
| `img17.jpg` | About gallery, Media gallery | With diplomats at Bihar govt office |
| `img18.jpg` | Technology page, Team page | Team working on IoT devices |
| `img19.jpg` | Team page | Dr. Sankar Dayal — Advisor |
| `img20.jpg` | Team page | Dr. Prakash Chandra — Consultant |
| `img21.jpg` | Team page | Mrs. Sweety Verma — Co-founder |
| `img22.jpg` | Team page | Kanhaiya Saran — Marketing Manager |

---

## 8. Responsive Breakpoints

```css
/* Mobile first — default styles target mobile */

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1280px) { ... }
```

**Key responsive rules:**
- Navigation collapses to hamburger menu below `1024px`.
- Card grids: 1 column on mobile, 2 columns on tablet, 3 columns on desktop.
- Side-by-side layouts stack vertically on mobile.
- Font sizes use `clamp()` for fluid typography.
- Section padding reduces on smaller screens.
- Hero height: `100vh` on desktop, `80vh` on mobile.
- Team cards: 1 per row on mobile, 2 on tablet, 3-4 on desktop.

---

## 9. Accessibility & SEO Rules

- All images MUST have descriptive `alt` text (refer to image descriptions in `assets/img_description.md`).
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- One `<h1>` per page. Use proper heading hierarchy (`h1` → `h2` → `h3`).
- All interactive elements must be keyboard-accessible.
- Links must have descriptive text (no "click here").
- Color contrast: Ensure text is readable against dark backgrounds (minimum 4.5:1 ratio for body text).
- Each page has unique `<title>` and `meta description` via Next.js Metadata API.
- Use `next/link` for all internal navigation (client-side routing).
- Use `next/image` for all images (automatic optimization, lazy loading, responsive srcsets).

---

## 10. Constants File (`src/utils/constants.ts`)

```typescript
export const COMPANY = {
  name: 'SASVC SeismoTech Software India Pvt. Ltd.',
  shortName: 'SeismoTeck',
  tagline: 'Pioneering Earthquake Prediction Through Advanced Seismic Research',
  address: 'Patna, Bihar, India',
  email: 'info@seismoteck.com',
  founder: 'Umesh Prasad Verma',
  coFounder: 'Mrs. Sweety Verma',
  year: 2026,
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Predictions', href: '/predictions' },
  { label: 'Media', href: '/media' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
] as const;

export const STATS = [
  { value: 99, suffix: '%', label: 'Prediction Accuracy' },
  { value: 15, suffix: '+', label: 'Monitoring Stations' },
  { value: 10, suffix: '+', label: 'Years of Research' },
  { value: 50, suffix: '+', label: 'Verified Predictions' },
] as const;
```

---

## 11. Build & Run Instructions

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (to verify)
npm run build

# Start production server
npm start
```

---

## 12. Critical Rules for the AI Agent

1. **DO NOT install Tailwind CSS.** Use only vanilla CSS with CSS Modules.
2. **DO NOT use any placeholder images.** All images are provided in `assets/` — copy them to `public/assets/` and use them via Next.js `<Image>` component with path `/assets/img1.jpeg` etc.
3. **DO NOT fabricate or hallucinate content.** Use ONLY the text, descriptions, and claims provided in this file and `assets/img_description.md`.
4. **Frame all earthquake prediction claims carefully.** Use phrases like "according to SeismoTeck's research", "the company reports", "the system is designed to". NEVER present unverified claims as established scientific fact.
5. **Use the exact image filenames.** Note the mixed extensions: `img1.jpeg`, `img2.jpeg`, `img3.jpeg` are `.jpeg`; `img4.jpg` onward are `.jpg`. Use the correct extension for each.
6. **All components must use CSS Modules** (`.module.css` files), NOT inline styles.
7. **Use Next.js App Router** conventions. Server components by default; add `'use client'` only where React hooks or browser APIs are needed (forms, IntersectionObserver, etc.).
8. **The website is purely static/informational.** No database, no API calls, no authentication, no dynamic data fetching.
9. **Copy the `assets/` folder contents into `public/assets/` at the start** before building pages. The original `assets/` folder at root should remain untouched.
10. **Verify that `npm run build` succeeds** after implementing all pages.

---

## 13. Sample Website Design Patterns to Follow

### From NASA.gov:
- Sticky dark navigation with clean typography.
- Full-viewport hero with high-quality space imagery and overlaid text.
- Card-grid sections for news and articles (3 columns).
- Image-of-the-day style featured media sections.
- Clean footer with multiple columns of links.
- Overall dark, authoritative, scientific aesthetic.

### From IMD Mausam (mausam.imd.gov.in):
- News ticker / marquee below the header for urgent information.
- Quick-link bar system for fast access to key sections.
- Data-driven information density (maps, warnings, observations).
- Government/institutional trustworthy design tone.
- Structured grid layout for organized content.

### Combine both into:
A **dark, scientific, NASA-inspired aesthetic** with the **information architecture and data presentation patterns** from IMD, adapted for a private seismology company website.