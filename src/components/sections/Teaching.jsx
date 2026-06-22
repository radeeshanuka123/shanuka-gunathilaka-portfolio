"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Database, Cpu, GitMerge, PenTool, FileText, Presentation } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { portfolioData } from "@/data/portfolioData";

const iconMap = {
  terminal: Terminal,
  layout: Layout,
  database: Database,
  cpu: Cpu,
  "git-merge": GitMerge,
  "pen-tool": PenTool,
  "file-text": FileText,
  presentation: Presentation,
};

export default function Teaching() {
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
    <section id="teaching" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="Teaching & Mentoring" subtitle="Academic Support" />
          <p className="text-lg text-text-muted mb-12 max-w-3xl text-balance">
            {portfolioData.teaching.introduction}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.teaching.cards.map((card) => {
            const IconComponent = iconMap[card.icon];
            return (
              <motion.div key={card.id} variants={itemVariants}>
                <Card className="h-full flex flex-col items-center text-center p-6 bg-card/40 hover:border-accent-secondary/30">
                  <div className="w-14 h-14 rounded-2xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary mb-4 shadow-sm">
                    {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                  </div>
                  <h4 className="text-text-main font-bold mb-2">{card.title}</h4>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
