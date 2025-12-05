# 🚀 Pham Quoc Nhat — Portfolio

A modern, responsive personal portfolio website built with **React 19**, **Vite**, **Tailwind CSS 4**, and **Framer Motion**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)

## ✨ Features

- ⚡ **Blazing fast** — Powered by Vite for instant HMR and optimized builds
- 🎨 **Modern UI** — Clean design with shadcn/ui components and Tailwind CSS
- 🌈 **Animated background** — Dynamic gradient effects for a tech-inspired look
- 🎬 **Smooth animations** — Page transitions and scroll effects with Framer Motion
- 📱 **Fully responsive** — Mobile-first design that looks great on all devices
- ⌨️ **Typewriter effect** — Engaging hero section with typing animation
- 🌙 **Dark mode ready** — Built with CSS variables for easy theming

## 🛠️ Tech Stack

| Category       | Technologies                  |
| -------------- | ----------------------------- |
| **Frontend**   | React 19, TypeScript          |
| **Styling**    | Tailwind CSS 4, shadcn/ui     |
| **Animation**  | Framer Motion, tw-animate-css |
| **Build Tool** | Vite 7                        |
| **Icons**      | Lucide React                  |

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/       # Page sections (Hero, About, Projects, etc.)
│   └── ui/             # Reusable UI components (Button, Card, etc.)
├── data/
│   └── content.ts      # Portfolio content data
├── lib/
│   └── utils.ts        # Utility functions
├── assets/             # Static assets (images, CV)
├── App.tsx             # Main app component
└── index.css           # Global styles & animations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/quocnhat02092003/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🎨 Customization

1. **Personal Info**: Update `src/data/content.ts` with your details
2. **Styling**: Modify `src/index.css` for global styles and animations
3. **Components**: Customize sections in `src/components/sections/`
4. **Assets**: Replace images in `src/assets/` with your own

## 📦 Deployment

Build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/quocnhat02092003">Pham Quoc Nhat</a>
</p>
