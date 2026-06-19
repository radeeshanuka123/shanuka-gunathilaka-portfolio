import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <motion.div 
        className="proj-imgbx"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img 
          src={imgUrl} 
          alt={title}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        />
        <motion.div 
          className="proj-txtx"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
          }}
        >
          <h4>{title}</h4>
          <span>{description}</span>
          {projectUrl && (
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '20px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              View Project
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </Col>
  )
}