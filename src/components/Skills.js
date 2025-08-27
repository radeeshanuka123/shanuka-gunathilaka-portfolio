import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { img: meter2, title: "Web Development" },
    { img: meter1, title: "Team Work" },
    { img: meter3, title: "Leadership" },
    { img: meter1, title: "Front End Development" },
    { img: meter1, title: "Communication" },
    { img: meter1, title: "Technical Proficiency" },
    { img: meter1, title: "Attention to Detail" },
    { img: meter1, title: "Creativity" },
    { img: meter1, title: "Critical Thinking" },
    { img: meter1, title: "Time Management" },
    { img: meter1, title: "Initiative" },
    { img: meter1, title: "Problem-solving" },
    { img: meter1, title: "Adaptability" },
    { img: meter1, title: "Continuous Learning" },
    { img: meter1, title: "Collaboration" },
    { img: meter1, title: "Analytical Skills" }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div 
              className="skill-bx"
              data-aos="zoom-in"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 variants={itemVariants}>Skills</motion.h2>
              <motion.p variants={itemVariants}>
                I'm a versatile web developer with a strong technical foundation, skilled in creating efficient, 
                user-focused solutions. I excel in problem-solving, collaboration, and adapting to new challenges, 
                and am always seeking opportunities to grow with a commitment to delivering high-quality results.
              </motion.p>          
              <motion.div variants={itemVariants}>
                <Carousel 
                  responsive={responsive} 
                  infinite={true} 
                  className="owl-carousel owl-theme skill-slider"
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                  {skills.map((skill, index) => (
                    <motion.div 
                      className="item" 
                      key={index}
                      whileHover={{ 
                        scale: 1.1,
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.img 
                        src={skill.img} 
                        alt="Skill meter"
                        animate={{
                          rotate: [0, 360],
                          transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                      />
                      <h5>{skill.title}</h5>
                    </motion.div>
                  ))}
                </Carousel>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}