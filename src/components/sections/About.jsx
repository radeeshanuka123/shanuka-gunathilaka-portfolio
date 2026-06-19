"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, MapPin, GraduationCap, BookOpen, Code, Users } from "lucide-react";

const IconMap = {
  "briefcase": Briefcase,
  "map-pin": MapPin,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  "code": Code,
  "users": Users,
};

export default function About() {
  const { about } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">About Me</h2>
            <div className="w-16 h-1 bg-accent-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-text-main mb-6">Who I am</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {about.description}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {about.cards.map((card) => {
                const IconComponent = IconMap[card.icon] || Briefcase;
                return (
                  <motion.div
                    key={card.id}
                    variants={itemVariants}
                    className="bg-card p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow"
                  >
                    <IconComponent className="text-accent-primary mb-3" size={24} />
                    <h4 className="text-text-main font-semibold mb-1">{card.title}</h4>
                    <p className="text-sm text-text-secondary">{card.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
