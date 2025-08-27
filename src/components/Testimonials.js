import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon, QuoteIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding. Our sales increased by 150% within the first month!"
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "Digital Solutions Co.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with Alex was a game-changer for our project. The mobile app he developed is not only beautiful but also incredibly functional. His communication throughout the process was excellent."
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Creative Agency",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The website redesign Alex created for us perfectly captured our brand identity. The user experience is seamless, and we've received countless compliments from our clients. Highly recommended!"
    },
    {
      name: "David Thompson",
      position: "Founder",
      company: "StartupXYZ",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Alex's full-stack development skills are impressive. He built our entire platform from scratch and delivered it on time and within budget. The code quality is top-notch and well-documented."
    },
    {
      name: "Lisa Wang",
      position: "CTO",
      company: "InnovateTech",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The API integration Alex implemented solved our complex data synchronization issues. His problem-solving approach and technical depth made him an invaluable partner for our project."
    },
    {
      name: "James Wilson",
      position: "Business Owner",
      company: "Local Business",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "As a small business owner, I needed someone who could understand my vision and budget constraints. Alex delivered a professional website that has significantly improved our online presence."
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/5 to-transparent"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm font-medium text-yellow-300 border border-yellow-500/30 mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say 
              about working with me and the results we've achieved together.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-8 card-hover group relative"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <QuoteIcon className="h-8 w-8 text-blue-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <p className="text-blue-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-gray-300 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Join My Happy Clients?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's work together to create something amazing. I'm committed to 
                delivering exceptional results that exceed your expectations.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;