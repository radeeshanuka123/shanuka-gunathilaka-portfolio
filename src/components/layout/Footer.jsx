import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="bg-bg-secondary py-12 border-t border-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 gap-6">
          
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-2xl font-bold text-text-main mb-2">{personal.fullName}</h3>
            <p className="text-text-secondary mb-4">{personal.title}</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Building reliable digital solutions and empowering future developers through education.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text-secondary hover:text-accent-primary hover:shadow-lg transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text-secondary hover:text-accent-primary hover:shadow-lg transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text-secondary hover:text-accent-primary hover:shadow-lg transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="flex space-x-6 text-sm text-text-secondary">
              <a href="#about" className="hover:text-accent-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-accent-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-accent-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-card pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <p>&copy; {currentYear} {personal.fullName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Built with <span className="text-accent-primary font-medium">React</span> & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
