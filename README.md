# Shanuka Radeeshan Gunathilaka - Portfolio

A professional, production-ready portfolio built with Next.js, React, Tailwind CSS, and Firebase. This portfolio is designed to showcase expertise in full-stack development, teaching, and software engineering.

## Features
- **Next.js App Router**: High-performance React framework.
- **Tailwind CSS**: Custom Dark/Light theme configuration with system preference support.
- **Firebase Backend**: Real-time message saving to Firestore and Email/Password & Google Sign-in support.
- **Framer Motion**: Smooth, professional animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Accessibility**: WCAG 2.2 AA compliant.

## Technologies
- React 19 / Next.js 15
- Tailwind CSS v4
- Firebase SDK v12
- Framer Motion
- Lucide React Icons
- EmailJS

## Prerequisites
- Node.js 18.17 or later
- npm or yarn
- Firebase CLI (`npm install -g firebase-tools`)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/radeeshanuka123/Portfolio-with-React.git
   cd Portfolio-with-React
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Setup Environment Variables
   Create a `.env.local` file in the root directory for EmailJS configuration:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Development Commands

- Start development server:
  ```bash
  npm run dev
  ```
- Build for production (Static Export):
  ```bash
  npm run build
  ```

## Firebase Deployment

The project is pre-configured for Firebase Hosting.

1. Login to Firebase:
   ```bash
   firebase login
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy to Hosting:
   ```bash
   firebase deploy --only hosting
   ```

## Folder Structure
```
.
├── next.config.mjs
├── firebase.json
├── src
│   ├── app
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components
│   │   ├── layout
│   │   ├── sections
│   │   └── ui
│   ├── data
│   │   └── portfolioData.js
│   └── lib
│       └── firebase
└── public
    └── assets
```

## Customization
To edit the portfolio content, modify the `src/data/portfolioData.js` file. All texts, projects, experience, and links are dynamically loaded from this single source of truth.

**Assets:**
- **Profile Image:** Replace `public/profile.png` with your desired profile picture.
- **CV/Resume:** Upload your PDF to `public/assets/CV/CV.pdf` so the download buttons function correctly.

## Contact
**Shanuka Radeeshan Gunathilaka**
- GitHub: [@radeeshanuka123](https://github.com/radeeshanuka123)
- Email: shanukaradeeshan.dev@gmail.com
