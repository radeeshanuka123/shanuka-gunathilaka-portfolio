"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube, Rocket, ArrowUpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const steps = [
  { id: 1, title: "Discover", description: "Understand user needs, business objectives and technical requirements.", icon: Search },
  { id: 2, title: "Design", description: "Plan application architecture, database structure and user experience.", icon: PenTool },
  { id: 3, title: "Develop", description: "Build reliable, reusable and maintainable functionality.", icon: Code },
  { id: 4, title: "Test", description: "Perform functional, responsive, usability and performance testing.", icon: TestTube },
  { id: 5, title: "Deploy", description: "Prepare and publish production-ready applications.", icon: Rocket },
  { id: 6, title: "Improve", description: "Review feedback, resolve issues and plan enhancements.", icon: ArrowUpCircle },
];

export default function Process() {
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading title="How I Work" subtitle="Development Process" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-px bg-border-subtle z-0" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.id} variants={itemVariants} className="relative z-10">
                <Card className="h-full flex flex-col pt-10 relative">
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg border-2 border-primary">
                    <Icon size={20} />
                  </div>
                  <div className="absolute top-4 right-6 text-5xl font-heading font-bold text-border-subtle/50 select-none">
                    0{step.id}
                  </div>
                  <h4 className="text-xl font-bold text-text-main mb-2 mt-2">{step.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
