import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-prompt">user@portfolio:~/contact$ cat contact.txt</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            // Have a project idea or want to collaborate?
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>// Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <h4>email</h4>
                <p>console.writelineaug@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <h4>phone</h4>
                <p>+48 720 951 101</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <h4>location</h4>
                <p>Bolesławiec, Poland</p>
              </div>
            </div>

            <div className="social-links">
              <h4>// Social Links</h4>
              <a href="#">linkedin</a>
              <a href="https://github.com/CodelessA">github</a>
              <a href="https://www.facebook.com/profile.php?id=100094445125244">facebook</a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <h3 style={{ color: '#00ff41', marginBottom: '1.5rem', fontFamily: 'JetBrains Mono' }}>
              // Send Message
            </h3>
            <form action="https://formspree.io/f/mpwyrjoq" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="your_name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="message_subject"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="describe your project or question..."
                />
              </div>
              
              <button type="submit" className="submit-btn">
                <Send size={16} />
                send_message()
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}