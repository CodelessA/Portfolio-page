import { motion } from 'framer-motion'
import { Code, Gamepad, Palette, Zap } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'JS, CSS, HTML' },
    { icon: Palette, title: 'Application Development', description: 'C#, ' },
    { icon: Gamepad, title: 'Games Development', description: 'Creating games with Unity' },
    { icon: Zap, title: 'Photoshop', description: 'Editing photos with creativity' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-prompt">user@portfolio:~/about$ cat about.txt</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            //I am just fascinated by what can be created with computers and AI.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>// About me</h3>
            <p>
            I’m not a professional programmer — I can write only simple programs. 
            But thanks to having solid basics, I can freely take advantage of the powerful tools available today. 
            One of the most exciting of these tools is AI, which allows me to bring ideas to life that I could only dream of before.
            </p>
            <p className="comment">
              // Beyond coding, I’m interested in photo editing with tools like Photoshop and Luminar Neo.
              //I’m fascinated by the rapid development of new technologies and how they have a real impact on our daily lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="skills-grid"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card"
              >
                <div className="skill-icon">
                  <skill.icon size={32} />
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}