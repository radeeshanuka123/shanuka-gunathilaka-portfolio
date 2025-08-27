import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CalendarIcon, 
  ClockIcon, 
  ArrowRightIcon,
  TagIcon 
} from '@heroicons/react/24/outline';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring the latest trends in web development including AI integration, WebAssembly, and the evolution of JavaScript frameworks.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Web Development",
      date: "March 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "A comprehensive guide to structuring React applications for scalability, performance, and maintainability.",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "React",
      date: "March 10, 2024",
      readTime: "12 min read",
      featured: false
    },
    {
      id: 3,
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      excerpt: "Deep dive into CSS Grid with practical examples and advanced techniques for creating complex layouts.",
      image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "CSS",
      date: "March 5, 2024",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Node.js Performance Optimization: Tips and Tricks",
      excerpt: "Learn how to optimize your Node.js applications for better performance and scalability.",
      image: "https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Node.js",
      date: "February 28, 2024",
      readTime: "15 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Art of API Design: RESTful Best Practices",
      excerpt: "Guidelines and best practices for designing clean, maintainable, and scalable RESTful APIs.",
      image: "https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "API Design",
      date: "February 20, 2024",
      readTime: "11 min read",
      featured: false
    },
    {
      id: 6,
      title: "TypeScript in 2024: Advanced Features and Patterns",
      excerpt: "Exploring advanced TypeScript features and design patterns that will make your code more robust.",
      image: "https://images.pexels.com/photos/11035467/pexels-photo-11035467.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "TypeScript",
      date: "February 15, 2024",
      readTime: "9 min read",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "React", "CSS", "Node.js", "API Design", "TypeScript"];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-sm font-medium text-emerald-300 border border-emerald-500/30 mb-4">
              Blog & Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sharing knowledge, insights, and experiences from my journey in 
              web development. Stay updated with the latest trends and best practices.
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="glass rounded-2xl overflow-hidden mb-12 card-hover group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 mr-1" />
                      <span className="text-emerald-400">{post.category}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-600 transition-all duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <motion.a
                    href="#"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="glass rounded-2xl overflow-hidden card-hover group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                    <span className="px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-600 transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <motion.a
                      href="#"
                      className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-all duration-300"
                      whileHover={{ x: 3 }}
                    >
                      Read
                      <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="glass rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to my newsletter and get the latest articles, tutorials, 
                and insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;