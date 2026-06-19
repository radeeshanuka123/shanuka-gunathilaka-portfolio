"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Education</h2>
            <div className="w-16 h-1 bg-accent-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-2xl font-bold text-text-main">{edu.degree}</h3>
                    <span className="text-sm font-semibold bg-bg-secondary px-3 py-1 rounded-full text-text-secondary w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-accent-primary font-medium mb-3">{edu.institution}</h4>
                  <p className="text-text-secondary">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
