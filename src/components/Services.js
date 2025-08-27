import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Services = () => {
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

  const services = [
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack web applications using modern frameworks like React, Vue.js, and Node.js with responsive design and optimal performance.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["Cross-platform Apps", "Native Performance", "App Store Deployment", "Push Notifications"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences for your users.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <CloudIcon className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Google Cloud, and Azure platforms.",
      features: ["Cloud Migration", "Auto Scaling", "Security Setup", "Cost Optimization"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <CogIcon className="h-8 w-8" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with proper documentation, authentication, and rate limiting for seamless integrations.",
      features: ["REST APIs", "GraphQL", "Authentication", "Documentation"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Analytics & SEO",
      description: "Performance monitoring, analytics implementation, and SEO optimization to improve your digital presence.",
      features: ["Google Analytics", "SEO Audit", "Performance Monitoring", "Conversion Tracking"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full text-sm font-medium text-indigo-300 border border-indigo-500/30 mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your needs. From concept 
              to deployment, I provide end-to-end services to bring your ideas to life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-8 card-hover group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                My Development Process
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A structured approach to ensure quality delivery and client satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your requirements, goals, and target audience"
                },
                {
                  step: "02", 
                  title: "Planning",
                  description: "Creating detailed project roadmap, timeline, and technical specifications"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your solution using best practices and modern technologies"
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Testing, deployment, and ongoing support for your project"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl mb-4 relative z-10">
                    {process.step}
                  </div>

                  {/* Connecting Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform translate-x-8"></div>
                  )}

                  <h4 className="text-xl font-semibold text-white mb-2">{process.title}</h4>
                  <p className="text-gray-300 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your ideas and create something amazing together. 
                I'm here to help bring your vision to life.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;