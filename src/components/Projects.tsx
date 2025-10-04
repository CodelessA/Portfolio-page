import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Professional Calculator',
    description: 'Modern calculator platform built with JS, CSS, HTML',
    image: 'https://github.com/CodelessA/CSS-HTML.JS/blob/main/ProfessionalCalc.png?raw=true',
    technologies: ['JS', 'CSS', 'HTML'],
    github: 'https://github.com/CodelessA/CSS-HTML.JS',
    demo: 'https://codelessa.github.io/CSS-HTML.JS/',
  },
  {
    title: 'Retro Snake Game',
    description: 'My interpretation of the Retro snake game built with JS, CSS, HTML',
    image: 'https://github.com/CodelessA/Snake-game/blob/main/SnakePng.png?raw=true',
    technologies: ['JS', 'CSS', 'HTML'],
    github: 'https://github.com/CodelessA/Snake-game',
    demo: 'https://codelessa.github.io/Snake-game/',
  },
  {
    title: 'Project Slugger',
    description: 'FPS game made in Unity with C#',
    image: 'https://github.com/CodelessA/ProjectSluggerStuffandPage/blob/main/PSImage.png?raw=true',
    technologies: ['Unity', 'C#'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-prompt">user@portfolio:~/projects$ ls -la</div>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            // Here are some projects I've worked on
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              
              <div className="project-content">
                <h3>{project.title}</h3>
                
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github}>
                    <Github size={16} />
                    code
                  </a>
                  <a href={project.demo}>
                    <ExternalLink size={16} />
                    demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}