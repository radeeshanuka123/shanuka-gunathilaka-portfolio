"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Download, ArrowRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-accent-primary font-semibold tracking-wide uppercase mb-3">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-4 tracking-tight">
                {personal.fullName}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xl md:text-2xl text-text-secondary font-medium mb-6">
                <span className="text-accent-secondary">{personal.title}</span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-text-secondary/50"></span>
                <span className="flex items-center gap-1"><MapPin size={20} /> {personal.location}</span>
              </div>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {personal.heroIntro}
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="#projects" 
                className="flex items-center gap-2 bg-accent-primary hover:bg-accent-secondary text-white px-8 py-3.5 rounded-md font-medium transition-colors shadow-lg shadow-accent-primary/20"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a 
                href="/assets/CV/Shanuka Gunathilaka.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card hover:bg-bg-secondary text-text-main border border-card hover:border-text-secondary/20 px-8 py-3.5 rounded-md font-medium transition-all shadow-sm"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-2"
              >
                <FaGithub size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-2"
              >
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="w-full sm:w-2/3 lg:w-2/5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Photo placeholder / real photo */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent-primary/40 p-2"
              ></motion.div>
              
              <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center shadow-2xl overflow-hidden relative group">
                <img 
                  src="/profile.png" 
                  alt={personal.fullName} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 to-accent-secondary/10 opacity-50"></div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-card px-4 py-2 rounded-lg shadow-xl border border-white/5 backdrop-blur-md flex items-center gap-2 z-10"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-text-main">Lecturer</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-8 bg-card px-4 py-2 rounded-lg shadow-xl border border-white/5 backdrop-blur-md flex items-center gap-2 z-10"
              >
                <span className="text-accent-primary font-bold">{"</>"}</span>
                <span className="text-sm font-medium text-text-main">Developer</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
