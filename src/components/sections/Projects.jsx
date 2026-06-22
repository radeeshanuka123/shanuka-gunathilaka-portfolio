"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolioData";
import { CaseStudyModal } from "@/components/projects/CaseStudyModal";

const filters = ["All", "React", "Firebase", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tech.includes(activeFilter) || project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="Featured Projects" subtitle="Portfolio" />
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap items-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-accent-primary text-white shadow-md"
                  : "bg-secondary text-text-muted hover:text-text-main border border-border-subtle hover:border-accent-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="group cursor-pointer p-0 overflow-hidden h-full flex flex-col hover:border-accent-primary/50"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-secondary border-b border-border-subtle">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%230B1728'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23526176'%3EImage coming soon%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-text-muted">
                        No image available
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-accent-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                      <span className="text-white font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Case Study <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-heading font-bold text-text-main group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="shrink-0">{project.category}</Badge>
                    </div>
                    <p className="text-text-muted text-sm line-clamp-2 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs text-text-muted font-mono bg-secondary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs text-text-muted font-mono bg-secondary px-2 py-1 rounded">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
