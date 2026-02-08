import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Palette, Zap, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0, rotateY: -30 },
        {
          x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo(contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.about-stat',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-stats', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.feature-card',
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: '.feature-cards', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '14+', label: 'GitHub Repositories' },
    { value: '20+', label: 'Projects Built' },
    { value: '100%', label: 'Client Satisfaction' }
  ]

  const features = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful interfaces' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed & efficiency' },
    { icon: Globe, title: 'Responsive', description: 'Pixel-perfect on all devices' }
  ]

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-500 text-sm uppercase tracking-widest mb-4 block">Get to know me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-2xl"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden">
                <img src="/profile.png" alt="Chandan Rabha" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Open to collaborate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Passionate Frontend Developer at{' '}
              <span className="gradient-text">WeCreate</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                I'm a dedicated frontend developer with over 5 years of experience building 
                modern, performant web applications. My journey in software development started 
                with a curiosity for creating interactive user experiences.
              </p>
              <p>
                I specialize in React ecosystem, TypeScript, and modern frontend architectures. 
                My approach combines technical excellence with creative problem-solving to deliver 
                exceptional digital experiences.
              </p>
              <p>
                Currently working at WeCreate, I continue to push boundaries and explore new 
                technologies while contributing to open-source projects in my free time.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="magnetic-btn px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Let's Talk
              </a>
              <a href="#projects" className="magnetic-btn px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all">
                View My Work
              </a>
            </div>
          </div>
        </div>

        <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat glass-card rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="feature-cards grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
