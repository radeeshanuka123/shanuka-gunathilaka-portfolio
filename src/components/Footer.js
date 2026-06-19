import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HeartIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" }
    ],
    "Services": [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Consulting", href: "#contact" }
    ],
    "Resources": [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#projects" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "GitHub", href: "#", icon: "🐙" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Dribbble", href: "#", icon: "🏀" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-dark-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-dark-900/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Footer Content */}
          <div className="pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    Alex Johnson
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Full Stack Developer passionate about creating exceptional 
                    digital experiences. Let's build something amazing together.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-lg hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 border border-gray-700 hover:border-gray-600"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="lg:col-span-1"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <motion.a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="py-8 border-t border-gray-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Stay Updated
                </h4>
                <p className="text-gray-300 text-sm">
                  Subscribe to get the latest updates on new projects, articles, and insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <motion.button
                  className="btn-primary whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            variants={itemVariants}
            className="py-6 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-300 text-sm mb-4 md:mb-0">
                <span>Made with</span>
                <HeartIcon className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
                <span>by Alex Johnson</span>
              </div>

              <div className="flex items-center space-x-6 text-gray-300 text-sm">
                <span>© 2024 All rights reserved</span>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;