"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10 border border-white/10"
        >
          <div className="sticky top-0 right-0 p-4 flex justify-end bg-card/80 backdrop-blur-md z-20 border-b border-white/5">
            <button 
              onClick={onClose}
              className="p-2 bg-bg-secondary text-text-secondary hover:text-text-main rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 sm:p-8 pt-0">
            <h2 className="text-3xl font-bold text-text-main mb-4">{project.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full border border-accent-primary/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-text-main mb-2 flex items-center gap-2">
                    <Code2 size={20} className="text-accent-secondary" />
                    Overview
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-text-main mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary">
                        <span className="text-accent-primary mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6 bg-bg-secondary p-6 rounded-xl border border-white/5 h-fit">
                <div>
                  <h3 className="font-semibold text-text-main mb-2">My Contribution</h3>
                  <p className="text-sm text-text-secondary">{project.contribution}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-text-main mb-2">Challenges</h3>
                  <p className="text-sm text-text-secondary">{project.challenges}</p>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-card hover:bg-white/5 border border-white/10 text-text-main rounded-lg font-medium transition-colors"
                    >
                      <FaGithub size={18} />
                      View Source
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent-primary hover:bg-accent-secondary text-white rounded-lg font-medium transition-colors shadow-lg shadow-accent-primary/20"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
