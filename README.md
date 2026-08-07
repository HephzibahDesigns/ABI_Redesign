# 📦 ABI

![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_First-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-In_Development-7EE8A2?style=flat-square)

> 📦 A fast, animated, peer-to-peer delivery landing page — post a parcel, get matched with a traveller heading your way.

---

## 🌐 Live Demo

👉 _Add your deployment link here once the site is hosted_

---

## ✨ Overview

**ABI** is a marketing site for a peer-to-peer delivery network that connects senders with travellers already heading to their destination — **no warehouses, no fixed routes, no middlemen**.

It's a single, fully static page built with plain HTML, CSS, and JavaScript on top of Tailwind CSS, with scroll-triggered animations throughout.

---

## ⚡ Features

- 🧭 Sticky, scroll-aware navbar with active-link highlighting
- 📱 Responsive mobile menu with animated icon toggle
- 🏠 Animated hero section with a live phone mockup preview
- ℹ️ About section explaining the peer-to-peer delivery model
- 💡 Feature grid covering fast delivery, tracking, and secure payments
- 📤 "Send with Ease" section with live trust stats (ratings, parcels delivered)
- ❓ Expandable FAQ accordion
- ⬇️ Download section with store buttons and an in-app offers preview
- 📬 Contact section with address, phone, and email
- 🔒 Full privacy policy page
- 🎬 Scroll-triggered reveal animations, staggered for card and list groups
- ♿ Respects `prefers-reduced-motion` — animations disable automatically

---

## 🎯 Problem It Solves

Most courier and delivery services today:

- Charge high fees for small, one-off parcels
- Require rigid pickup and drop-off scheduling
- Offer little visibility once a parcel is in transit

### 💡 ABI solves this by:

- Matching senders directly with travellers already going that way
- Letting users pay a fee **or** offer a favor in return
- Providing real-time tracking and notifications at every step
- Keeping payments secure in an escrow-backed wallet

---

## 🛠️ Tech Stack

- ⚛️ HTML5 — semantic page structure
- 🎨 Tailwind CSS — utility-first styling (browser build, no build step)
- ⚙️ Vanilla JavaScript — no frameworks, no dependencies
- 👁️ IntersectionObserver API — scroll animations & active nav tracking
- 🔤 Google Fonts — Plus Jakarta Sans & Inter

---

## 🎨 Design Tokens

| Token        | Value             |
| ------------ | ----------------- |
| Navy         | `#0C1E4A`         |
| Cobalt       | `#1149A3`         |
| Sky          | `#0EA5E9`         |
| Off-white    | `#F4F7FC`         |
| Mint         | `#7EE8A2`         |
| Display Font | Plus Jakarta Sans |
| Body Font    | Inter             |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HephzibahDesigns/ABI_Redesign.git
```

### 2. Open the project folder

```bash
cd abi-landing
```

### 3. Run it

No build step or dependencies required — this is a static site. Open index.html directly in your browser, or serve it locally using the Live Server extension in VS Code:

Install the Live Server extension
Right-click index.html in the file explorer
Select "Open with Live Server"

---

## 📁 Project Structure

```
ABI Design copy/
├── index.html          # All page markup and sections
├── styles.css           # Custom styles, gradients, scroll-reveal animations
├── script.js             # Navbar, mobile menu, FAQ accordion, scroll animations
└── tailwind.min.js     # Tailwind CSS (browser build)
```

---

## 📄 License

This project is provided as-is for demonstration purposes.
