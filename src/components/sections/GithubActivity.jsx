"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";

// Static fallback data instead of relying on third-party widgets
const featuredRepos = [
  {
    id: 1,
    name: "DineFlow",
    description: "Restaurant Management and Online Ordering System built with React and Firebase.",
    language: "JavaScript",
    url: "https://github.com/radeeshanuka123/DineFlow"
  },
  {
    id: 2,
    name: "Employee-Management-System",
    description: "Full-stack CRUD platform with robust API communication and responsive administrative interfaces.",
    language: "JavaScript",
    url: "https://github.com/radeeshanuka123/Employee-Management-System"
  },
  {
    id: 3,
    name: "Event-Pro",
    description: "Modern event-management web application focusing on reusable components.",
    language: "TypeScript",
    url: "https://github.com/radeeshanuka123/Event-Pro"
  }
];

export default function GithubActivity() {
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
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <SectionHeading title="Open Source" subtitle="GitHub" className="mb-0" />
          <Button asChild variant="outline">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 w-4 h-4" /> View Profile
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredRepos.map((repo) => (
            <motion.div key={repo.id} variants={itemVariants} className="flex">
              <Card className="w-full flex flex-col justify-between hover:border-accent-primary/40 bg-card/40">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <FaGithub className="text-text-muted" size={24} />
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="font-bold text-lg text-text-main mb-2 hover:text-accent-primary transition-colors">
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-3 mb-6">
                    {repo.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-primary" />
                    {repo.language}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
