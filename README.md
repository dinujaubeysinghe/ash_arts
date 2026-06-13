# Ash Arts Gallery

A professional portfolio website for **Ashen Dewinda**, a Sri Lankan artist and graphic designer operating under the brand **Ash Arts Gallery**. Built with React, Vite, and Tailwind CSS.

---

## Live Demo

[ash-arts-gallery.vercel.app](https://ash-arts-gallery.vercel.app)

---

## About

Ash Arts Gallery showcases a wide range of creative works including pencil art, photo manipulations, thumbnail designs, social media posts, brand designs, printing designs, and UI/UX projects.

---

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [React Router v6](https://reactrouter.com/) — Client-side routing
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/gallery` | All Works |
| `/gallery/pencil-art` | Pencil Art |
| `/gallery/social-media` | Social Media Posts |
| `/gallery/brand-designs` | Brand Designs |
| `/gallery/printing-designs` | Printing Designs |
| `/gallery/thumbnails` | Thumbnails |
| `/gallery/manipulations` | Manipulations |
| `/gallery/uiux-designs` | UI/UX Designs |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ash-arts-gallery.git

# Navigate into the project
cd ash-arts-gallery

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/
│   ├── home/
│   └── gallery/
│       └── all/
│           ├── pencil/
│           ├── manipulation/
│           ├── thumbnail/
│           ├── socail media/
│           ├── business card/
│           ├── tshirt/
│           └── uiux/
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── GalleryFilter.jsx
│   ├── Curtain.jsx
│   └── PageTransition.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── gallery/
│       ├── Gallery.jsx
│       ├── PencilArt.jsx
│       ├── SocialMedia.jsx
│       ├── BusinessCard.jsx
│       ├── PrintingDesigns.jsx
│       ├── Thumbnails.jsx
│       ├── Manipulation.jsx
│       └── UiUx.jsx
├── App.jsx
└── main.jsx
```

---

## Fonts

- **Cormorant Garamond** — Headings
- **DM Sans** — Body text

Imported via `@theme` directive in `index.css` using Google Fonts.

---

## Deployment

The project is deployed on [Vercel](https://vercel.com/). A `vercel.json` is included at the root to handle client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Social

- Instagram — [@ash_arts_gallery](https://instagram.com/ash_arts_gallery)
- Facebook — [Ash Arts Gallery](https://facebook.com/ash_arts_gallery)
- TikTok — [@ash_arts_gallery](https://tiktok.com/@ash_arts_gallery)
- YouTube — [Ash Arts Gallery](https://youtube.com/@ash_arts_gallery)
- Behance — [Ash Arts Gallery](https://behance.net/ash_arts_gallery)

---

## Developer

Developed by **Dinuja** — Frontend Developer
