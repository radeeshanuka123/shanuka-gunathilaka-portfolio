import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <footer className="footer">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
              <motion.h1 
                className="logo"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              > 
                Shanuka Radeeshan
              </motion.h1>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <motion.div 
                className="social-icon"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://www.linkedin.com/in/shanuka-gunathilaka-6509212b1"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/profile.php?id=61551619196495"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <img src={navIcon2} alt="Facebook" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/radeeshanuka?igsh=MXJnMzkwYTdpdHB6cw=="
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <img src={navIcon3} alt="Instagram" />
                </motion.a>
              </motion.div>
              <motion.p variants={itemVariants}>
                © 2024. Shanuka Radeeshan. All Rights Reserved
              </motion.p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </footer>
  )
}