"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="Education" subtitle="Academic Background" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.education.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:border-accent-primary/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <Badge variant={edu.status === "Completed" ? "success" : "secondary"}>
                    {edu.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-text-main mb-2">
                  {edu.degree}
                </h3>
                <div className="text-sm font-medium text-accent-primary mb-1">
                  {edu.institution}
                </div>
                <div className="text-sm text-text-muted mb-4 font-mono">
                  {edu.period}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mt-auto border-t border-border-subtle pt-4">
                  {edu.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
