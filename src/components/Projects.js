import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaReact, FaPython, FaPhp, FaNodeJs, FaDatabase, FaCode, FaCog } from 'react-icons/fa';
import { MdAndroid } from 'react-icons/md';
import { SiVisualstudio, SiVisualstudiocode, SiCplusplus, SiCsharp, SiSpringboot, SiNotepadplusplus } from 'react-icons/si';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../assets/img/color-sharp2.png';
import empImg from "../assets/img/Employee-Management-System-770x515.png";
import posImg from "../assets/img/pos.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description: "Design & Development Front End and Back End",
      imgUrl: empImg,
      projectUrl: "https://github.com/radeeshanuka123/Employee-Management-System"
    },
    {
      title: "Point of Sale System",
      description: "Design & Development Front End only",
      imgUrl: posImg,
      projectUrl: "https://github.com/radeeshanuka123/Point-of-Sale-System"
    },
  ];

  const technologies = {
    "Frontend": [
      { name: 'HTML 5', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <MdAndroid /> },
    ],
    "Backend": [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
    ],
    "Databases": [
      { name: 'MySQL', icon: <FaDatabase /> },
      { name: 'MongoDB', icon: <FaDatabase /> },
    ],
    "Languages": [
      { name: 'C', icon: <FaCode /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C#', icon: <SiCsharp /> },
    ],
    "Tools": [
      { name: 'Visual Studio', icon: <SiVisualstudio /> },
      { name: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
      { name: 'Notepad++', icon: <SiNotepadplusplus /> },
      { name: 'Axure RP9', icon: <FaCog /> },
      { name: 'Sublime Text', icon: <FaCog /> },
      { name: 'Android Studio', icon: <MdAndroid /> },
    ]
  };

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

  const TechnologyList = ({ category, techs }) => (
    <motion.div 
      className="technology-category"
      variants={itemVariants}
    >
      <h3>{category}</h3>
      <ul className="technology-list">
        {techs.map((tech, index) => (
          <motion.li 
            key={tech.name} 
            className="technology-item"
            whileHover={{ 
              scale: 1.05,
              x: 10,
              transition: { duration: 0.2 }
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.span 
              className="technology-icon"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.5 }
              }}
            >
              {tech.icon}
            </motion.span>
            <span className="technology-name">{tech.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 variants={itemVariants}>Projects</motion.h2>
              <motion.p variants={itemVariants}>
                I am a web developer and graphic designer with a passion for creating innovative web solutions and compelling visual designs.
                My work focuses on blending functionality with aesthetics, solving complex problems, and enhancing user experiences.
                With a keen eye for detail and a commitment to quality, I strive to deliver projects that not only meet but exceed client expectations.
                Explore my portfolio to see how I bring ideas to life through modern design principles and cutting-edge technology.
              </motion.p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <motion.div variants={itemVariants}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">PROJECTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">TECHNOLOGIES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GITHUB REPOSITORIES</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </motion.div>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Row>
                        {projects.map((project, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ProjectCard {...project} />
                          </motion.div>
                        ))}
                      </Row>
                    </motion.div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Row>
                        <Col md={6}>
                          <h3>Frontend Technologies</h3>
                          <TechnologyList category="Frontend" techs={technologies["Frontend"]} />
                        </Col>
                        <Col md={6}>
                          <h3>Backend Technologies</h3>
                          <TechnologyList category="Backend" techs={technologies["Backend"]} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <TechnologyList category="Databases" techs={technologies["Databases"]} />
                        </Col>
                        <Col md={6}>
                          <TechnologyList category="Languages" techs={technologies["Languages"]} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <TechnologyList category="Tools" techs={technologies["Tools"]} />
                        </Col>
                      </Row>
                    </motion.div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.h4 variants={itemVariants}>GitHub Repositories</motion.h4>
                      <motion.ul variants={containerVariants}>
                        {projects.map((project, index) => (
                          <motion.li 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                              x: 10,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="nav-link">
                              {project.title}
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};