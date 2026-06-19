import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Experience = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented microservices architecture that improved system performance by 40%.",
      achievements: [
        "Architected and deployed 15+ production applications",
        "Reduced deployment time by 60% through CI/CD optimization",
        "Mentored junior developers and conducted code reviews",
        "Led migration from monolith to microservices architecture"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect, responsive user interfaces.",
      achievements: [
        "Built 20+ responsive web applications",
        "Improved application performance by 35%",
        "Integrated third-party APIs and payment systems",
        "Implemented automated testing reducing bugs by 50%"
      ],
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Focused on creating exceptional user experiences for a fast-growing SaaS platform. Worked closely with UX designers to implement complex interactive features.",
      achievements: [
        "Developed responsive UI components library",
        "Increased user engagement by 45%",
        "Optimized bundle size reducing load time by 30%",
        "Implemented accessibility standards (WCAG 2.1)"
      ],
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest", "Figma"]
    },
    {
      title: "Junior Web Developer",
      company: "WebDev Agency",
      location: "Remote",
      period: "2018 - 2019",
      type: "Contract",
      description: "Started my professional journey building websites for small businesses and startups. Gained experience in various technologies and project management.",
      achievements: [
        "Delivered 30+ client websites on time",
        "Learned multiple programming languages",
        "Established client relationships and requirements gathering",
        "Built responsive, SEO-optimized websites"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm font-medium text-green-300 border border-green-500/30 mb-4">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A timeline of my career growth, key achievements, and the impact 
              I've made at various organizations.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-dark-900 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      className="glass rounded-2xl p-8 card-hover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <BriefcaseIcon className="h-5 w-5 text-blue-400 mr-2" />
                          <span className="text-sm font-medium text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-blue-300 mb-3">{exp.company}</h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities and exciting projects. 
                Let's create something amazing together!
              </p>
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;