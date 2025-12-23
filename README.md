# 🌌 Finverse Hub

**The most immersive and interactive educational platform for the future.**

Finverse Hub is a cutting-edge, 3D-powered educational portal designed to provide an unparalleled learning experience. Built with Next.js, Three.js, and Framer Motion, it offers a futuristic interface for institutes and students worldwide.

---

## ✨ Key Features

- **🛸 Interactive 3D Hero**: A stunning holographic planet background powered by Three.js and custom shaders.
- **🎨 Glassmorphic Design**: A premium, modern UI with smooth transitions and vibrant aesthetics.
- **🎓 Dynamic Course Catalog**: Detailed cards for diverse domains like AI, VFX, Cyber Security, and more.
- **🔐 Secure Dashboard**: Dedicated portals for Students, Mentors, and Admins using Supabase Auth.
- **📱 Fully Responsive**: Optimized for a seamless experience across all devices.
- **⚡ High Performance**: Built on Next.js 15 for lightning-fast loading and SEO.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 15, Tailwind CSS
- **3D/Animations**: Three.js, @react-three/fiber, Framer Motion, GSAP
- **Backend/Auth**: Supabase (Database & Authentication)
- **Utilities**: Lucide React, Lenis (Smooth Scroll)

---

## 📂 Project Structure

```text
├── 📁 src
│   ├── 📁 app            # Next.js App Router (Pages & API)
│   ├── 📁 components     # Reusable UI components
│   ├── 📁 context        # React Context providers (Cursor, Auth)
│   ├── 📁 data           # Static data (Courses, Instructors)
│   ├── 📁 utils          # Supabase helpers and utilities
│   └── 📁 types          # TypeScript definitions
├── 📁 public             # Static assets (Images, SVGs)
├── 📁 planet             # 3D models and textures
└── 📄 package.json       # Project dependencies
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Faheem1011/Finverse-Hub.git
cd Finverse-Hub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env.local` file in the root and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📜 License

This project is private and intended for educational use.

---

Designed with ❤️ by **Faheem** and **Antigravity**.
