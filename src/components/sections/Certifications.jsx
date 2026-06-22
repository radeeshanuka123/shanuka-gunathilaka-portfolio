"use client";

import { motion } from "framer-motion";
import { Award, PenTool, Shield, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolioData";

const iconMap = {
  "pen-tool": PenTool,
  shield: Shield,
  "trending-up": TrendingUp,
};

export default function Certifications() {
  if (!portfolioData.certifications || portfolioData.certifications.length === 0) {
    return null;
  }

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
    <section id="certifications" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="Certifications" subtitle="Professional Development" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <motion.div key={cert.id} variants={itemVariants}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border-subtle hover:border-accent-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-accent-secondary/10 flex items-center justify-center text-accent-secondary shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-sm">{cert.title}</h4>
                    <p className="text-xs text-text-muted mt-1">{cert.organization} &bull; {cert.year}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
