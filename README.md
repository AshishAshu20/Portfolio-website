# Ashish Sharma — Portfolio Website

A high-end, futuristic, fully animated portfolio built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Three.js**.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom CSS |
| Animations | Framer Motion + GSAP |
| 3D / WebGL | Three.js + @react-three/fiber |
| Smooth Scroll | Lenis |
| State/Theme | React Context |
| Fonts | Syne + JetBrains Mono (Google Fonts) |
| Notifications | react-hot-toast |

---

## 📁 Project Structure

```
ashish-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO meta
│   └── page.tsx            # Main page assembling all sections
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MarqueeBar.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SmoothScroll.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── FooterSection.tsx
│   └── three/
│       └── ParticleBackground.tsx
├── context/
│   └── ThemeContext.tsx
├── public/
│   ├── profile.jpeg        # ← PUT YOUR PHOTO HERE
│   └── Ashish_Resume_BW.pdf # ← PUT YOUR RESUME HERE
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## ⚡ Getting Started

### 1. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Add your assets to `/public`
- `profile.jpeg` — Your profile photo
- `Ashish_Resume_BW.pdf` — Your resume PDF

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## ✨ Features

- **3D Particle Hero** — Animated Three.js particle background with floating wireframe spheres
- **Custom Cursor** — Smooth trailing ring cursor with hover effects (desktop)
- **Loading Screen** — Branded animated loader with progress bar
- **Smooth Scroll** — Lenis-powered buttery smooth scrolling
- **Dark / Light Mode** — Animated sun/moon toggle with CSS variable theming
- **Scroll Progress** — Neon gradient progress bar at top of page
- **Navbar** — Glassmorphism nav with mobile hamburger menu
- **Hero Section** — Profile photo, typing animation, stats cards, social links
- **About Section** — Bio, highlight cards, stat counters
- **Experience Timeline** — Animated timeline with both jobs + education
- **Projects** — 3D tilt cards with glow, tech tags, "inspired by" badges
- **Skills** — Animated progress bars + floating tech cloud
- **Resume** — Download button + PDF preview modal
- **Contact** — Floating label form + contact info + social links
- **Footer** — Full links, back to top, built-with credits

---

## 🎨 Design System

### Colors (Dark Mode)
- Background: `#030305` → `#0a0a12`
- Neon Purple: `#9333ea`
- Neon Blue: `#3b82f6`
- Neon Cyan: `#06b6d4`
- Neon Pink: `#ec4899`

### Fonts
- **Display/Body**: Syne (Google Fonts)
- **Mono**: JetBrains Mono (Google Fonts)

---

## 🌐 Deployment

Deploy instantly to [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

---

## 📧 Contact

**Ashish Sharma** · ashish.builds207@gmail.com · Mohali, Punjab
