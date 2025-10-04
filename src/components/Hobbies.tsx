import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hobbies() {
  const [activeTab, setActiveTab] = useState('gaming')

  const tabs = [
    { id: 'gaming', label: 'gaming' },
    { id: 'music', label: 'music' },
    { id: 'movies', label: 'movies' },
    { id: 'photoEditing', label: 'photo editing' },
  ]

  const tabContent = {
    gaming: {
      title: '// Gaming',
      content: `I enjoy playing video games — they sparked my fascination with how computers work and showed me the true potential of programming. 
      Favorite game? Probably Gothic, although I spent countless hours in World of Tanks and completed The Witcher 3 multiple times. 
      In my opinion, it’s one of the best games ever made. The list of titles I’ve played could go on forever, but I’ll also mention 
      that I’m a fan of the Sudden Strike series and I never refuse a game of chess.`,
      tags: ['Strategy Games', 'RPGs', 'Indie Games', 'Multiplayer']
    },
    music: {
      title: '// Music',
      content: `Music accompanies me in pretty much every situation. I don’t have a single favorite genre – I can enjoy good pop, often listen to metal and rock, and when I’m working I usually go for electronic music. 
      For lighter tasks, I like soundtracks from films and TV series. Among composers, I especially appreciate Hans Zimmer and Ludwig Göransson, 
      while in terms of bands and artists I could name Linkin Park, Radiohead, Pink Floyd, Øneheart, AK, The Neighbourhood, and many others. The only things I tend to avoid are rap and disco polo.`,
      tags: ['Electronic', 'Metal', 'Rock', 'Ambient', 'Soundtracks']
    },
    movies: {
      title: '// Movies',
      content: `I’ve been watching all kinds of movies since I was a kid. I don’t really have a single favorite genre, 
      but at the top of my all-time list stands The Lord of the Rings trilogy. There are plenty of individual films that deserve to be called masterpieces, 
      but Peter Jackson managed to deliver three in a row. In general, I prefer thought-provoking cinema, but I also enjoy a good comedy, 
      an engaging crime story, or a solid drama.`,
      tags: ['Drama', 'Action', 'Classics', 'Comedy', 'Adventure']
    },
    photoEditing: {
      title: '// Photo Editing',
      content: `I enjoy playing with Photoshop and editing photos — color grading, 
retouching and creative effects. It’s a great way to mix technical skills with 
visual creativity and turn ordinary shots into something special.`,
      tags: ['Photoshop', 'Lightroom', 'Color Grading', 'Retouching']
    }
  }

  return (
    <section id="hobbies" className="hobbies">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-prompt">user@portfolio:~/hobbies$ ls -la</div>
          <h2 className="section-title">My Hobbies</h2>
          <p className="section-subtitle">
            // Beyond coding, I enjoy exploring various interests
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <div className="terminal-title">hobbies.terminal</div>
            </div>
            
            <div className="tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {Object.entries(tabContent).map(([key, content]) => (
                <motion.div
                  key={key}
                  className={`tab-pane ${activeTab === key ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeTab === key ? 1 : 0,
                    x: activeTab === key ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{content.title}</h3>
                  <p>{content.content}</p>
                  <div style={{ marginTop: '1rem' }}>
                    <span style={{ color: '#666', fontSize: '14px' }}>// Tags: </span>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.5rem', 
                      marginTop: '0.5rem' 
                    }}>
                      {content.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}