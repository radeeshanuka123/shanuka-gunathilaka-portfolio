# 🚀 Shanuka Radeeshan Gunathilaka - Professional Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-11-FFCA28?style=for-the-badge&logo=firebase)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer)

Welcome to the repository for my professional portfolio! This is a modern, responsive, and highly interactive web application designed to showcase my experience as an Assistant Lecturer and Full-Stack Developer. 

You can view the live deployment here: **[https://portfolio-e54ec.web.app](https://portfolio-e54ec.web.app)**

---

## ✨ Key Features

- **Blazing Fast Performance:** Built on Next.js App Router and statically exported for optimal loading speeds.
- **Dynamic Theming:** Seamless transition between Dark Mode and Light Mode, preserving user preference via `localStorage`.
- **Interactive UI/UX:** Smooth scrolling, micro-animations, floating badges, and page transitions powered by Framer Motion.
- **Serverless Contact Form:** Messages are instantly backed up to Firebase Firestore and forwarded via FormSubmit's AJAX API.
- **Fully Responsive:** Custom mobile-first design ensuring a perfect layout across all devices, from phones to ultra-wide monitors.
- **Data-Driven Architecture:** All portfolio content is centralized in a single `portfolioData.js` file for effortless updating.

---

## 🛠️ Tech Stack

| Category         | Technology                     |
| ---------------- | ------------------------------ |
| **Framework**    | Next.js 15 (React 19)          |
| **Styling**      | Tailwind CSS v3                |
| **Animations**   | Framer Motion                  |
| **Icons**        | Lucide React & React Icons     |
| **Backend**      | Firebase (Firestore & Hosting) |
| **Email Client** | FormSubmit API                 |

---

## 📂 Project Structure

```text
📦 Portfolio
├── 📁 public               # Static assets
│   ├── 📁 assets/CV        # PDF Resumes
│   └── profile.png         # Profile Picture
├── 📁 src
│   ├── 📁 app              # Next.js App Router files (page.js, layout.js)
│   ├── 📁 components       # Reusable React components
│   │   ├── 📁 layout       # Navbar, Footer
│   │   ├── 📁 sections     # Hero, About, Experience, Projects, etc.
│   │   └── 📁 ui           # Interactive UI elements (Modals)
│   ├── 📁 data             # Single source of truth for portfolio content
│   └── 📁 lib              # Firebase configuration
├── firebase.json           # Firebase Hosting rules
├── firestore.rules         # Database security policies
└── tailwind.config.js      # Custom theme variables
```

---

## 🚀 Getting Started

If you want to clone this repository to test it locally or use it as a template, follow these instructions:

### Prerequisites
- Node.js 18.x or later
- npm, yarn, or pnpm
- Firebase CLI (optional, for deployment)

### 1. Installation

Clone the repository and install the dependencies:
```bash
git clone https://github.com/radeeshanuka123/Portfolio-with-React.git
cd Portfolio-with-React
npm install
```

### 2. Development Server

Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Customization

To make this portfolio your own, you only need to modify a few files:
1. **Content:** Open `src/data/portfolioData.js` and update your name, bio, experience, and projects.
2. **Profile Image:** Replace the `public/profile.png` file with your own headshot.
3. **Resume:** Place your PDF resume at `public/assets/CV/CV.pdf` so the download buttons work.

### 4. Setting up the Contact Form (FormSubmit)

The contact form is configured to send emails securely without needing `.env` variables!
1. Start the application locally and navigate to the Contact section.
2. Submit a test message.
3. Check the email inbox associated with the address defined in `portfolioData.js`. 
4. Click **"Activate Form"** in the automated email you receive. 
5. *All future submissions will now arrive directly in your inbox!*

---

## 🌐 Firebase Deployment

This project is pre-configured to be deployed as a static site using Firebase Hosting.

1. Install Firebase tools globally:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to your Google account:
   ```bash
   firebase login
   ```
3. Generate the static HTML/CSS export:
   ```bash
   npm run build
   ```
4. Deploy to the live web:
   ```bash
   firebase deploy --only hosting
   ```

---

## 📬 Contact

**Shanuka Radeeshan Gunathilaka**
- **Email:** [shanukagunathilaka00@gmail.com](mailto:shanukagunathilaka00@gmail.com)
- **LinkedIn:** [Shanuka Radeeshan](https://linkedin.com/in/shanuka-radeeshan)
- **GitHub:** [@radeeshanuka123](https://github.com/radeeshanuka123)

---
*Built with ❤️ using Next.js and Tailwind CSS.*
