"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import ProjectModal from "@/components/ui/ProjectModal";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique categories
  const allCategories = ["All", ...new Set(projects.flatMap(p => p.category))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-accent-primary mx-auto rounded-full mb-8"></div>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === cat 
                      ? "bg-accent-primary text-white shadow-md shadow-accent-primary/20" 
                      : "bg-card text-text-secondary hover:text-text-main border border-black/5 dark:border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card rounded-xl overflow-hidden border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-accent-primary/30 transition-all cursor-pointer flex flex-col h-full"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-text-main group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="p-2 bg-bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={20} className="text-accent-primary" />
                      </div>
                    </div>
                    <p className="text-text-secondary line-clamp-3 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-bg-secondary text-text-secondary rounded-md">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs font-semibold px-2.5 py-1 bg-bg-secondary text-text-secondary rounded-md">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
