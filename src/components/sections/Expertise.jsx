"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Expertise() {
  const { expertise } = portfolioData;

  const categories = [
    { id: "frontend", title: "Frontend Development", items: expertise.frontend },
    { id: "backend", title: "Backend Development", items: expertise.backend },
    { id: "programming", title: "Programming Languages", items: expertise.programming },
    { id: "databases", title: "Databases & Cloud", items: expertise.databases },
    { id: "tools", title: "Tools & Technologies", items: expertise.tools },
    { id: "teaching", title: "Teaching & Mentoring", items: expertise.teaching },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="expertise" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Areas of Expertise</h2>
            <div className="w-16 h-1 bg-accent-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category) => (
              <motion.div 
                key={category.id} 
                variants={itemVariants}
                className="bg-card p-6 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-text-main mb-4 pb-2 border-b border-bg-secondary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="text-sm font-medium bg-bg-secondary text-text-secondary px-3 py-1.5 rounded-md border border-black/5 dark:border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
