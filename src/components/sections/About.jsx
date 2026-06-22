"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Code, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { portfolioData } from "@/data/portfolioData";

const iconMap = {
  briefcase: Briefcase,
  "map-pin": MapPin,
  code: Code,
  users: Users,
};

export default function About() {
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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="About Me" subtitle="Introduction" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-text-muted leading-relaxed text-lg text-balance">
                {portfolioData.about.description}
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border-subtle">
              <h3 className="text-xl font-heading font-bold text-text-main mb-4">Core Philosophy</h3>
              <p className="text-text-muted leading-relaxed">
                I believe that the best way to master software engineering is to teach it. 
                By constantly breaking down complex architectural decisions into digestible lessons, 
                I maintain a sharp, foundational understanding of the technologies I use. 
                My development process is structured, documentation-driven, and focused on building 
                maintainable systems that solve real business problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {portfolioData.about.cards.map((card) => {
              const IconComponent = iconMap[card.icon];
              return (
                <motion.div key={card.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col justify-center items-center text-center p-6 bg-card/50 hover:bg-card">
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-4">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                    <h4 className="text-text-main font-bold mb-1">{card.title}</h4>
                    <p className="text-text-muted text-sm">{card.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
