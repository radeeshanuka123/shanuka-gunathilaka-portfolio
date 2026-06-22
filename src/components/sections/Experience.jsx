"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="Work Experience" subtitle="Career Journey" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop: center, Mobile: left) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border-subtle -translate-x-1/2" />
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border-subtle" />

              <div className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-37px] md:left-[50%] top-6 w-5 h-5 rounded-full bg-accent-primary border-4 border-primary z-10 md:-translate-x-1/2 shadow-sm" />

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <Card className="hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl font-heading font-bold text-text-main mb-1">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} className="text-accent-primary" /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-accent-primary" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-accent-primary" /> {exp.location}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-accent-secondary shrink-0 mt-1" />
                          <span className="text-text-muted text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                      {exp.tech.map((t, i) => (
                        <Badge key={i} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
