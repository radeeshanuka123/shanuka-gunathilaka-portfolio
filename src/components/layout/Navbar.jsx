"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Teaching", href: "#teaching" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section highlighting logic
      const sections = navLinks.map(link => link.name.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-card/80 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo/Initials */}
        <a href="#home" className="flex items-center gap-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo.png" 
            alt="Shanuka Gunathilaka" 
            className="h-8 md:h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent-primary relative py-2",
                    activeSection === link.name.toLowerCase() ? "text-accent-primary" : "text-text-muted"
                  )}
                >
                  {link.name}
                  {activeSection === link.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-primary rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-border-subtle pl-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-text-muted hover:text-text-main hover:bg-border-subtle/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-accent-primary hover:bg-accent-primary/90 rounded-md shadow-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-text-main"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-md"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border-subtle bg-card backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    activeSection === link.name.toLowerCase() ? "text-accent-primary" : "text-text-muted hover:text-text-main"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-border-subtle my-2" />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-medium text-white bg-accent-primary hover:bg-accent-primary/90 rounded-md"
              >
                Contact Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
