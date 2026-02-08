import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
  level: number
  category: string
  icon: string
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: '🔷' },
    { name: 'Next.js', level: 88, category: 'frontend', icon: '▲' },
    { name: 'JavaScript (ES6+)', level: 96, category: 'frontend', icon: '💛' },
    { name: 'HTML5/CSS3', level: 98, category: 'frontend', icon: '🌐' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: '🎨' },
    { name: 'Redux', level: 85, category: 'state', icon: '🔄' },
    { name: 'jQuery', level: 80, category: 'frontend', icon: '💲' },
    { name: 'Node.js', level: 75, category: 'backend', icon: '🟢' },
    { name: 'PHP', level: 70, category: 'backend', icon: '🐘' },
    { name: 'MySQL', level: 72, category: 'backend', icon: '📊' },
    { name: 'Git/GitHub', level: 90, category: 'tools', icon: '🐙' },
    { name: 'Vite', level: 85, category: 'tools', icon: '⚡' },
    { name: 'Firebase', level: 78, category: 'tools', icon: '🔥' },
    { name: 'REST APIs', level: 88, category: 'backend', icon: '🔌' },
    { name: 'AJAX', level: 82, category: 'frontend', icon: '📡' },
    { name: 'Responsive Design', level: 95, category: 'design', icon: '📱' },
    { name: 'WebSockets', level: 70, category: 'backend', icon: '🔌' },
  ]

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'state', label: 'State' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'design', label: 'Design' }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.category-tab',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out',
          scrollTrigger: { trigger: '.category-tabs', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.skill-card',
        { y: 40, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.03, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.skills-grid', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    gsap.fromTo('.skill-card',
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.02, ease: 'power3.out' }
    )
  }, [activeCategory])

  return (
    <section ref={sectionRef} id="skills" className="relative min-h-screen py-24 px-4 md:px-8">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="skills-header text-center mb-12">
          <span className="text-purple-500 text-sm uppercase tracking-widest mb-4 block">My Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built over 5+ years of continuous learning and real-world application
          </p>
        </div>

        <div className="category-tabs flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-tab px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'glass text-muted-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="skill-card glass-card rounded-xl p-4 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold text-white text-sm">{skill.name}</span>
              </div>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="mt-2 text-right">
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold text-white mb-2">Always Learning</h4>
            <p className="text-muted-foreground text-sm">Constantly exploring new technologies and best practices</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-white mb-2">Problem Solver</h4>
            <p className="text-muted-foreground text-sm">Turning complex challenges into elegant solutions</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-semibold text-white mb-2">Team Player</h4>
            <p className="text-muted-foreground text-sm">Collaborating effectively with designers and developers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
