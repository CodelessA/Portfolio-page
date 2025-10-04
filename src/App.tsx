import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Hobbies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App