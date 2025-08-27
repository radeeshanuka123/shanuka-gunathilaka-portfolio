import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-dark-900 to-dark-800">
    <div className="loading-dots">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <ParticleBackground />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Testimonials />
            <Blog />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;