import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#fff",
      transition: {
        duration: 0.2
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(255,255,255,0.3)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <Router>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <motion.h2 
                className="logo"
                variants={logoVariants}
                whileHover="hover"
              > 
                Shanuka Radeeshan 
              </motion.h2>   
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <motion.div variants={linkVariants} whileHover="hover">
                  <Nav.Link 
                    href="#home" 
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('home')}
                  >
                    Home
                  </Nav.Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover">
                  <Nav.Link 
                    href="#skills" 
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('skills')}
                  >
                    Skills
                  </Nav.Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover">
                  <Nav.Link 
                    href="#projects" 
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('projects')}
                  >
                    Projects
                  </Nav.Link>
                </motion.div>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
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
                </div>
                <HashLink to='#connect'>
                  <motion.button 
                    className="vvd"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>Let's Connect</span>
                  </motion.button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </Router>
  )
}