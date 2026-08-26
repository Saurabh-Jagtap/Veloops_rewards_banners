# VELOOP Rewards — Banner & Card Redesign

> A premium, responsive, and interactive redesign of the core VELOOP Rewards banners — built with React, TypeScript, CSS Modules, and Framer Motion.

<p align="center">
  <strong>Rewards · Engagement · Gamification · Premium UI</strong>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-banners">Banners</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-responsive-design">Responsive Design</a>
</p>

---

## ✨ Overview

This project is a complete frontend redesign of five VELOOP Rewards banners/cards, designed to feel like a cohesive part of a modern rewards and fintech platform.

The goal was not to create ordinary promotional cards, but **five mini product experiences** where users can immediately understand:

- What the feature is
- Why it matters
- What they can earn or achieve
- What action they should take

The design follows a premium dark UI direction with controlled gradients, subtle glows, meaningful micro-interactions, responsive layouts, and feature-specific visual identities.

### Design Direction

**Premium Fintech × Rewards Platform × Gamification × SaaS**

The banners share a common design system while maintaining their own visual identity.

---

## 🎯 Banners

| Banner | Purpose | Visual Direction |
| --- | --- | --- |
| 🏆 **Leaderboard** | Compete, rank higher, and achieve more | Trophy, podium, rankings |
| 🎬 **Watch Ad & Earn** | Watch eligible ads and earn VEs | Video, clapperboard, coins |
| 🎧 **Contact Us** | Reach the VELOOP Rewards team for support | Headset, support, communication |
| 📱 **Follow & Earn** | Stay connected and participate in eligible social campaigns | Social platforms, engagement, rewards |
| 🎁 **Daily Bonus** | Return regularly and claim available rewards | Gift box, daily reward, celebration |

---

## 🏆 Leaderboard Banner

The Leaderboard experience focuses on competition, progress, and achievement.

### Highlights

- Top 3 podium visualization
- Gold / Silver / Bronze ranking hierarchy
- Supporting leaderboard entries
- Current-user highlighting
- Progress toward the next ranking goal
- Interactive ranking elements
- Trophy and achievement-focused visual language
- Gold-themed premium background
- CTA micro-interactions

### Interaction

- Ranking cards respond to hover
- Progress area provides visual feedback
- CTA lifts on hover
- Trophy and visual elements include subtle motion
- Entrance animations trigger when the banner enters the viewport

---

## 🎬 Watch Ad & Earn Banner

Designed to clearly communicate the flow:

**Watch → Complete → Earn**

### Highlights

- Custom clapperboard visual with VE coins
- Video-focused visual hierarchy
- Reward-oriented UI
- Premium dark background with subtle gradients
- Animated decorative elements
- Interactive CTA
- Responsive visual positioning

### Interaction

- Smooth entrance animation
- CTA hover / active states
- Video visual interaction
- Subtle background movement
- Reward-oriented micro-interactions

---

## 🎧 Contact Us Banner

The Contact Us banner focuses on trust and accessibility.

### Highlights

- Custom headset illustration
- Silver-dominant visual theme
- Support-oriented visual language
- Decorative waves
- Glowing dots and dotted rings
- Subtle background gradients
- Responsive headset positioning
- Clear support CTA

### Interaction

- Viewport-triggered entrance animation
- Headset visual movement
- CTA hover interaction
- Subtle ambient background animation

---

## 📱 Follow & Earn Banner

The Follow & Earn banner communicates the social engagement journey:

**Follow → Engage → Earn**

### Highlights

- Social reaction system
- Reward-focused visual hierarchy
- Individual feature components for:
  - Follow
  - Engage
  - Earn
- Responsive reaction positioning
- Mobile-specific layout adjustments
- Interactive social elements

### Interaction

- Social reaction hover effects
- Micro-animations
- Interactive feature components
- CTA hover / active states
- Responsive interactions across screen sizes

---

## 🎁 Daily Bonus Banner

The Daily Bonus banner is designed around recurring engagement and reward claiming.

### Highlights

- Custom gift box visual
- Daily reward visualization
- Premium dark background
- Decorative waves and glows
- Reward-focused composition
- Responsive gift positioning
- Viewport-triggered entrance animation

### Interaction

- Gift entrance animation
- Gift floating animation
- CTA hover interaction
- Reward claim interaction
- Celebration / party-popper feedback after claiming
- Smooth responsive behavior

---

# 🚀 Features

## 🎨 Premium Visual System

All five banners share a consistent visual language while maintaining individual identities.

- Dark premium UI
- Fintech-inspired aesthetics
- Controlled gradients
- Soft glows
- Subtle borders
- Layered backgrounds
- Feature-specific accent colors
- Intentional whitespace
- Strong visual hierarchy

The primary application background follows the required:

```text
#161827
```

# 🎞️ Animation Details

| Banner | Animation / Interaction |
| --- | --- |
| 🏆 **Leaderboard** | Entrance animations, podium interactions, progress feedback, trophy motion, ranking interactions, and CTA hover effects |
| 🎬 **Watch Ad & Earn** | Viewport-triggered entrance animation, CTA interactions, visual motion, ambient background animation, and micro-interactions |
| 🎧 **Contact Us** | Viewport-triggered entrance animation, headset movement, ambient background effects, glowing elements, and CTA hover interaction |
| 📱 **Follow & Earn** | Viewport-triggered entrance animation, social reaction hover effects, micro-interactions, CTA states, and responsive interactions |
| 🎁 **Daily Bonus** | Viewport-triggered entrance animation, gift entrance and floating animation, reward claim interaction, celebration effect, and CTA hover interaction |

### ✨ Animation Principles

The animations were designed to enhance the user experience rather than act as unnecessary decoration.

**1. Purposeful**

Animations communicate meaningful states, interactions, progress, or feedback.

**2. Lightweight**

Animations are subtle and optimized to avoid overwhelming the interface.

**3. Consistent**

All banners follow a shared animation language while maintaining their own visual identity.

**4. Responsive**

Animations and interactions adapt across desktop, tablet, and mobile layouts.

**5. User-Triggered**

Important entrance animations begin when the corresponding banner enters the user's viewport rather than playing immediately when the page loads.

### 🎯 Key Interactions

- **CTA hover states** with subtle upward lift, brightness, and shadow changes
- **Arrow micro-interactions** that provide directional feedback on CTA hover
- **Leaderboard interactions** for ranking, progress, and achievement feedback
- **Follow & Earn reaction interactions** with responsive hover and movement effects
- **Daily Bonus reward claiming** with visual state changes and celebration feedback
- **Gift box animation** combining entrance, floating, and reward-claim feedback
- **Progress animations** that visually communicate reward and ranking progress
- **Ambient background animations** including glows, waves, particles, and subtle movement
- **Viewport-triggered entrance animations** to create a smoother scrolling experience

---

# 📱 Responsive Design

The banners are designed to work across desktop, tablet, and mobile devices while preserving the intended visual hierarchy and interaction patterns.

### Responsive Height Targets

| Device | Banner Height |
| --- | --- |
| 🖥️ Desktop / Laptop | `410px – 450px` |
| 💻 Tablet | `380px – 540px` |
| 📱 Mobile | `330px – 520px` |

The banners use the available width of their parent container rather than relying on fixed desktop widths.

### Responsive Breakpoints

| Breakpoint | Target |
| --- | --- |
| `> 1100px` | Desktop |
| `901px – 1100px` | Compact Desktop / Large Tablet |
| `761px – 900px` | Tablet |
| `561px – 760px` | Tablet Portrait / Large Phone |
| `391px – 560px` | Mobile |
| `≤ 390px` | Small Mobile |

### Responsive Considerations

- Two-column layouts are maintained where space allows.
- Content transitions into vertically stacked layouts on smaller screens.
- Typography and spacing progressively reduce at smaller breakpoints.
- Illustrations remain visible and prominent on mobile where possible.
- Decorative visuals are repositioned or scaled without breaking the main content hierarchy.
- CTAs remain accessible and touch-friendly.
- Interactive elements retain their intended behavior across device sizes.
- Banner content avoids unnecessary horizontal overflow.

---

# 🖼️ Screenshots

## Desktop

<img width="1920" height="2807" alt="veloops-desktop" src="https://github.com/user-attachments/assets/1754cd68-be1f-44ff-8dc9-d11ec03a00cf" />

## Mobile

<img width="367" height="3279" alt="veloops-mobile" src="https://github.com/user-attachments/assets/84e6cee5-341e-46c2-824c-a6dec8d4459c" />

---

# 🌐 Live Demo

### Live Deployment

[View Live Demo](https://veloops-rewards-banners.vercel.app/)

### GitHub Repository

[View Source Code](https://github.com/Saurabh-Jagtap/Veloops_rewards_banners.git)

---

# 📋 Assignment Coverage

The implementation covers all five required banner experiences:

- [x] Leaderboard Banner
- [x] Watch Ad & Earn Banner
- [x] Contact Us Banner
- [x] Follow & Earn Banner
- [x] Daily Bonus Banner
- [x] Responsive desktop layout
- [x] Responsive tablet layout
- [x] Responsive mobile layout
- [x] Meaningful entrance animations
- [x] Viewport-triggered animations
- [x] CTA interactions
- [x] Hover states
- [x] Active states
- [x] Focus states
- [x] Micro-interactions
- [x] Feature-specific visual identity
- [x] Premium fintech / rewards aesthetic
- [x] Mobile optimization
- [x] Tablet optimization
- [x] Desktop optimization

---

# 💡 Design Philosophy

The goal was to avoid making five visually identical promotional cards.

Instead, each banner was treated as a **mini product experience** with its own purpose, visual identity, and interaction model.

### 🏆 Leaderboard

> Compete, rank higher, and achieve more.

The visual language focuses on competition, achievement, rankings, progress, and rewards.

### 🎬 Watch Ad & Earn

> Watch eligible ads and earn VEs.

The visual language focuses on video content, completion, and monetary reward.

### 🎧 Contact Us

> Get help when you need it.

The visual language focuses on communication, trust, accessibility, and support.

### 📱 Follow & Earn

> Follow, engage, and earn rewards.

The visual language focuses on social engagement, reactions, campaigns, and participation.

### 🎁 Daily Bonus

> Come back regularly and claim your reward.

The visual language focuses on recurring engagement, streaks, daily rewards, and celebration.

### Shared Design Language

Although each banner has its own identity, they share:

- Consistent dark premium backgrounds
- Controlled gradients
- Subtle borders
- Soft ambient glows
- Consistent CTA behavior
- Consistent entrance animations
- Responsive design principles
- Similar spacing and visual hierarchy
- Purposeful micro-interactions

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite

## Styling

- CSS Modules
- Responsive CSS
- CSS gradients
- CSS animations
- CSS transitions

## Animation

- Framer Motion
- CSS keyframe animations
- Intersection Observer for viewport-triggered animations

## Icons & Visuals

- Lucide React
- SVG icons
- Custom PNG illustrations
- Custom decorative visual elements

---

# 📂 Project Structure

```text
src/
├── assets/
│
├── components/
│   └── banners/
│       ├── LeaderboardBanner/
│       │   ├── LeaderboardBanner.tsx
│       │   ├── LeaderboardBanner.module.css
│       │   └── LeaderboardVisual.tsx
│       │
│       ├── WatchAdBanner/
│       │   ├── WatchAdBanner.tsx
│       │   ├── WatchAdBanner.module.css
│       │   └── WatchAdVisual.tsx
│       │
│       ├── ContactBanner/
│       │   ├── ContactBanner.tsx
│       │   ├── ContactBanner.module.css
│       │   └── ContactVisual.tsx
│       │
│       ├── FollowEarnBanner/
│       │   ├── FollowEarnBanner.tsx
│       │   ├── FollowEarnBanner.module.css
│       │   └── FollowVisual.tsx
│       │
│       └── DailyBonusBanner/
│           ├── DailyBonusBanner.tsx
│           ├── DailyBonusBanner.module.css
│           └── DailyBonusVisual.tsx
│
├── data/
├── hooks/
├── pages/
├── styles/
└── main.tsx
