"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function CaseStudyModal({ project, isOpen, onClose }) {
  // Handle escape key and body scroll lock
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl shadow-2xl border border-border-subtle overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-subtle bg-secondary/50">
              <div>
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <h2 id="modal-title" className="text-2xl font-heading font-bold text-text-main">
                  {project.title}
                </h2>
                <p className="text-text-muted mt-1">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-text-main hover:bg-border-subtle/50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
              {/* Image / Preview */}
              <div className="w-full aspect-video bg-secondary rounded-xl border border-border-subtle overflow-hidden relative">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%230B1728'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23526176'%3EImage coming soon%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text-muted">
                    No image available
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-xl font-heading font-bold text-text-main mb-3">Overview</h3>
                    <p className="text-text-muted leading-relaxed">{project.description}</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-heading font-bold text-text-main mb-3">My Role</h3>
                    <p className="text-text-muted leading-relaxed">{project.role}</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-heading font-bold text-text-main mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-accent-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {(project.challenges || project.results) && (
                    <section>
                      <h3 className="text-xl font-heading font-bold text-text-main mb-3">Outcomes</h3>
                      {project.challenges && (
                        <div className="mb-4">
                          <strong className="text-text-main block mb-1">Challenge:</strong>
                          <p className="text-text-muted text-sm leading-relaxed">{project.challenges}</p>
                        </div>
                      )}
                      {project.results && (
                        <div>
                          <strong className="text-text-main block mb-1">Result:</strong>
                          <p className="text-text-muted text-sm leading-relaxed">{project.results}</p>
                        </div>
                      )}
                    </section>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-secondary/50 rounded-xl p-5 border border-border-subtle">
                    <h4 className="font-bold text-text-main mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((t, idx) => (
                        <Badge key={idx} variant="outline" className="bg-primary">{t}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-xl p-5 border border-border-subtle">
                    <h4 className="font-bold text-text-main mb-3">Project Status</h4>
                    <Badge variant={project.status === "Completed" ? "success" : "secondary"}>
                      {project.status || "In Development"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-border-subtle bg-secondary/50 flex flex-wrap gap-4">
              {project.demo && (
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button asChild variant={project.demo ? "secondary" : "primary"}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2 w-4 h-4" /> Source Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
