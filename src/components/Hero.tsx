import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-prompt"></div>
          
          <h1 className="hero-title">
            <Typewriter 
              text="Hello there, my name is August A."
              speed={200}
              className="string"
            />
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="hero-subtitle"
          >
            <Typewriter 
              text="This is my portfolio website."
              speed={120}
              delay={3000}
              className="comment"
            />
            <br />
            <Typewriter 
              text="Below, you can find information about me, my interests, hobbies, and selected projects."
              speed={120}
              delay={6000}
              className="keyword"
            />
            <br />
            <Typewriter 
              text="At the end, there is a contact section."
              speed={120}
              delay={9000}
              className="operator"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 12 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn btn-primary">
              view_projects()
            </a>
            <a href="#contact" className="btn btn-secondary">
              get_in_touch()
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 13 }}
          className="scroll-indicator"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  )
}