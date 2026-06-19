"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-bg-primary/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, "#home")}
            className="text-2xl font-bold tracking-tighter text-accent-primary"
            aria-label="Home"
          >
            SG
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-accent-primary ${
                      activeSection === link.name.toLowerCase() ? "text-accent-primary" : "text-text-secondary"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-4 pl-4 border-l border-bg-secondary">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-text-secondary hover:text-accent-primary hover:bg-bg-secondary transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <a 
                href="/assets/CV/Shanuka Gunathilaka.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent-primary hover:bg-accent-secondary text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                <Download size={16} />
                <span>CV</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-accent-primary"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-main"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-primary shadow-lg border-t border-bg-secondary py-4 px-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block text-base font-medium ${
                    activeSection === link.name.toLowerCase() ? "text-accent-primary" : "text-text-secondary"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-bg-secondary">
              <a 
                href="/assets/CV/Shanuka Gunathilaka.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent-primary text-white w-full px-4 py-2 rounded-md font-medium"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
