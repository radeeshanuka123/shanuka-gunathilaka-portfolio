import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  HeartIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

const About = () => {
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

  const achievements = [
    {
      icon: <BriefcaseIcon className="h-8 w-8" />,
      title: "Professional Experience",
      description: "5+ years building scalable web applications and leading development teams"
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: "Education & Certifications",
      description: "Computer Science degree with multiple industry certifications in modern technologies"
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: "Innovation Focus",
      description: "Always exploring cutting-edge technologies and implementing best practices"
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Passion for Quality",
      description: "Committed to delivering exceptional user experiences and clean, maintainable code"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer who loves turning complex problems into simple, 
              beautiful solutions. With a focus on user experience and clean code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  My Journey in Tech
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Started my journey as a curious student who fell in love with coding. 
                  Over the years, I've evolved from writing simple scripts to architecting 
                  complex systems that serve thousands of users.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of technology to solve real-world problems and 
                  create meaningful impact. Whether it's building responsive web applications, 
                  designing intuitive user interfaces, or optimizing system performance, 
                  I approach every project with enthusiasm and attention to detail.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community through blogs and mentoring.
                </p>

                {/* Skills Progress */}
                <div className="space-y-4 mt-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Frontend Development</span>
                      <span className="text-sm text-gray-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "95%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Backend Development</span>
                      <span className="text-sm text-gray-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "90%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">UI/UX Design</span>
                      <span className="text-sm text-gray-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "85%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Achievements Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-2xl p-6 card-hover"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-blue-400 mb-4">
                      {achievement.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Personal Image */}
              <motion.div
                className="mt-8 relative"
                variants={itemVariants}
              >
                <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Working"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">
                      "Code is like humor. When you have to explain it, it's bad."
                    </p>
                    <p className="text-gray-300 text-sm mt-1">- Cory House</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;