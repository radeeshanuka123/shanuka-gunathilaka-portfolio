"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[128px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
              <Badge variant="success" className="gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Available for selected opportunities
              </Badge>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-text-main leading-tight">
              Hi, I'm {portfolioData.personal.firstName}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                {portfolioData.personal.lastName}
              </span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-text-main mb-4">
              {portfolioData.personal.title}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed">
              {portfolioData.personal.heroDescription}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button asChild size="lg" className="w-full sm:w-auto group">
                <a href="#projects">
                  Explore My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/Shanuka_Gunathilaka_CV.pdf" download="Shanuka_Gunathilaka_CV.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6 text-text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-primary" />
                <span className="text-sm">{portfolioData.personal.location}</span>
              </div>
              <div className="h-4 w-px bg-border-subtle" />
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="flex-1 hidden lg:flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/30 to-accent-secondary/30 rounded-[2.5rem] blur-2xl transform rotate-6" />
              
              {/* Image Container with Techy Overlays */}
              <div className="absolute inset-4 rounded-[2rem] border border-accent-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] overflow-hidden flex flex-col group bg-primary relative z-10">
                
                {/* Techy Glitch/Grid Overlay - simulated with repeating linear gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10 pointer-events-none mix-blend-overlay opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10 pointer-events-none" />

                {/* Profile Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/profile.png" 
                  alt="Shanuka Gunathilaka" 
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-all duration-700 ease-out z-0 grayscale group-hover:grayscale-0" 
                />

                {/* Techy Corner Borders */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent-primary rounded-tl-[2rem] z-20 pointer-events-none transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[2rem]" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-secondary rounded-br-[2rem] z-20 pointer-events-none transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[2rem]" />

                {/* Scanning line animation */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-accent-primary/60 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 pointer-events-none"
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-border-subtle flex items-center gap-3 backdrop-blur-md z-30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary font-bold border border-accent-primary/30">
                  JS
                </div>
                <div>
                  <div className="text-sm font-bold text-text-main">React & Node</div>
                  <div className="text-xs text-text-muted">Full-Stack</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -left-6 glass p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-border-subtle flex items-center gap-3 backdrop-blur-md z-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary font-bold border border-accent-secondary/30">
                  FB
                </div>
                <div>
                  <div className="text-sm font-bold text-text-main">Firebase</div>
                  <div className="text-xs text-text-muted">Cloud & DB</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-gradient-to-b from-accent-primary to-transparent"
          animate={{ height: ["0rem", "3rem", "0rem"], y: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
