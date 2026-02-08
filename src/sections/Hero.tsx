import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo('.hero-title-word',
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out' }
      )

      tl.fromTo(nameRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }, '-=0.5'
      )

      tl.fromTo(scrollHintRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3'
      )

      tl.fromTo('.social-icon',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)' }, '-=0.3'
      )

      gsap.to('.hero-content', {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: -100,
        opacity: 0,
        scale: 0.9
      })

      gsap.to('.hero-grid', {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        scale: 1.5,
        rotation: 5
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="hero-content relative z-10 text-center px-4">
        <div className="mb-4">
          <div className="overflow-hidden">
            <span className="hero-title-word inline-block text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
              FRONTEND
            </span>
          </div>
        </div>

        <div ref={nameRef} className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black gradient-text tracking-tight">
            CHANDAN
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black gradient-text tracking-tight">
            RABHA
          </h1>
        </div>

        <div className="mb-8">
          <div className="overflow-hidden">
            <span className="hero-title-word inline-block text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white">
              DEVELOPER
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Building modern web experiences with 5+ years of expertise in React, TypeScript & Next.js
        </p>

        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="https://github.com/ChandanRabha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-3 glass rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://linkedin.com/in/chandan-rabha-2b5453152" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-3 glass rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a 
            href="mailto:changrabha.rabha1@gmail.com"
            className="social-icon p-3 glass rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        <div ref={scrollHintRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
