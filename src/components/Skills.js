import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "Angular", level: 80, icon: "🅰️" }
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "Express.js", level: 92, icon: "🚀" },
        { name: "Django", level: 85, icon: "🎯" },
        { name: "GraphQL", level: 82, icon: "📊" },
        { name: "REST APIs", level: 95, icon: "🔗" }
      ]
    },
    {
      title: "Database & Cloud",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Docker", level: 82, icon: "🐳" },
        { name: "Firebase", level: 87, icon: "🔥" },
        { name: "Redis", level: 80, icon: "🔴" }
      ]
    },
    {
      title: "Tools & Others",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "Figma", level: 88, icon: "🎨" },
        { name: "Jest", level: 85, icon: "🧪" },
        { name: "Webpack", level: 82, icon: "📦" },
        { name: "Linux", level: 87, icon: "🐧" },
        { name: "CI/CD", level: 83, icon: "🔄" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 mb-4">
              My Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks 
              that I use to build exceptional digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-2xl p-8 card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.6 
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: "easeOut"
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Certifications & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AWS Certified Developer",
                  issuer: "Amazon Web Services",
                  year: "2023",
                  icon: "☁️"
                },
                {
                  title: "React Developer Certification",
                  issuer: "Meta",
                  year: "2023",
                  icon: "⚛️"
                },
                {
                  title: "Google Cloud Professional",
                  issuer: "Google Cloud",
                  year: "2022",
                  icon: "🌐"
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6 text-center card-hover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                  <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;