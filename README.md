# Shanuka Gunathilaka - Professional Portfolio

This is the source code for my professional portfolio, built with Next.js, Tailwind CSS, and Firebase. It showcases my software engineering expertise, full-stack development projects, and teaching/mentoring experience.

## Live Demo
[https://portfolio-e54ec.web.app/](https://portfolio-e54ec.web.app/)

## Main Features
- **Elite Design System**: Premium, recruiter-friendly aesthetics with dark/light mode support.
- **Component-Driven Architecture**: Built with Next.js App Router and reusable React components.
- **Project Case Studies**: Detailed modals explaining the architecture, tech stack, and results of each project.
- **Responsive Animations**: Smooth Framer Motion animations tailored for all viewports, respecting `prefers-reduced-motion`.
- **Accessibility & SEO**: Semantic HTML, ARIA labels, and comprehensive metadata for high Lighthouse scores.

## Technology Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Firebase Hosting
- **Forms**: React Hook Form

## Project Structure
```text
src/
  app/          # Next.js App Router layout, page, and globals
  components/   # Reusable UI components and page sections
  data/         # Centralized portfolio content
  lib/          # Utility functions
```

## Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/radeeshanuka123/Portfolio-with-React.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Portfolio-with-React
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Deployment

This project is configured to export a static site for Firebase Hosting.

1. Build the static files:
   ```bash
   npm run build
   ```
   (This outputs to the `out` directory)

2. Deploy to Firebase:
   ```bash
   firebase deploy --only hosting
   ```

## Author
**Shanuka Gunathilaka**
Assistant Lecturer & Full-Stack Developer
