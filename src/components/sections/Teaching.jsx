"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { BookOpen, Users, Trophy, FileText } from "lucide-react";

const icons = [BookOpen, Users, Trophy, FileText];

export default function Teaching() {
  const { teaching } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="teaching" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Teaching & Mentoring</h2>
            <div className="w-16 h-1 bg-accent-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
              Empowering the next generation of developers through practical education and continuous guidance.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {teaching.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className="group bg-card p-8 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:shadow-md hover:border-accent-primary/30 transition-all flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-bg-secondary flex items-center justify-center text-accent-primary group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
