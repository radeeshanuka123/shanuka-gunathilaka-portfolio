import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import headerImg from "../assets/img/image1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                className="tagline"
                variants={itemVariants}
              >
                Welcome to my Portfolio
              </motion.span>
              <motion.h1 
                variants={itemVariants}
              >
                {`Hi! I'm Shanuka`} <br />
                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ,"Front End Developer" ,"Mobile App Developer"]'>
                  <span className="wrap">{text}</span>
                </span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
              >
                Undergraduate in Bachelor of Science following Information Technology in the Faculty of Applied Science, University of Jaffna.
                My primary objective is to establish a secure and supportive working environment that nurtures professional growth and development.
                I strive to facilitate compelling and challenging projects that inspire a passion for continuous learning, foster critical thinking, and cultivate problem-solving skills.
              </motion.p>
              <motion.button 
                onClick={() => console.log('connect')}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="banner-button"
              >
                Let's Connect <ArrowRightCircle size={25} />
              </motion.button>
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img 
                src={headerImg} 
                alt="Header Img"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.5 }
                }}
                animate={{
                  y: [0, -20, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}