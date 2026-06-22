"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { portfolioData } from "@/data/portfolioData";

export default function Expertise() {
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
    <section id="expertise" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="Technical Expertise" subtitle="Skills" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.expertise.map((group) => (
            <motion.div key={group.id} variants={itemVariants} className="flex">
              <Card className="w-full flex flex-col bg-card/60">
                <div className="mb-6 pb-4 border-b border-border-subtle">
                  <h3 className="text-lg font-heading font-bold text-text-main">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 flex-grow">
                  {group.skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                      <span className="text-text-muted text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
