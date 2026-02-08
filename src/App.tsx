import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
          gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })
      }, mainRef)
      return () => ctx.revert()
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-8">CHANDAN RABHA</div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#050505]">
      <div className="noise-overlay"></div>
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="relative z-10 py-8 text-center text-muted-foreground text-sm border-t border-white/10">
        <p>© 2025 Chandan Rabha. Crafted with passion & code.</p>
      </footer>
    </div>
  )
}

export default App
