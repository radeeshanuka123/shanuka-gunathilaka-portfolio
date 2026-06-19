"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Professional Experience</h2>
            <div className="w-16 h-1 bg-accent-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative border-l-2 border-accent-primary/30 pl-8 ml-4 md:ml-0">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-accent-primary shadow-[0_0_0_4px_var(--color-bg-primary)]"></div>
                
                <div className="bg-card p-6 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-main">{exp.role}</h3>
                      <p className="text-accent-secondary font-medium flex items-center gap-2 mt-1">
                        <Briefcase size={16} />
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm font-semibold bg-bg-secondary px-3 py-1 rounded-full text-text-secondary inline-block w-fit">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-text-main mb-4 font-medium">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-secondary">
                        <span className="text-accent-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
