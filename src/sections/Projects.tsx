import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  color: string
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeProject, setActiveProject] = useState(0)

  const projects: Project[] = [
    {
      id: 1,
      title: 'School Management System',
      subtitle: 'Full-Stack Web Application',
      description: 'A comprehensive web-based school management system featuring student enrollment, attendance tracking, grade management, and faculty login systems. Built with pure HTML5, CSS3, JavaScript, jQuery, AJAX, MySQL, and PHP.',
      image: '/project-school.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'MySQL', 'PHP'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ChandanRabha/AUTOMATED-SCHOOL-MANAGEMENT-SYSTEM',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'Card Stack Carousel',
      subtitle: 'React Component Library',
      description: 'An elegant card stack carousel component built with TypeScript, React, and Tailwind CSS. Features smooth 3D transitions, touch gestures, and customizable card styles for modern web applications.',
      image: '/project-carousel.jpg',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ChandanRabha/card-stack-carousel',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 3,
      title: 'Breaking Bad App',
      subtitle: 'React + Firebase Application',
      description: 'A React application that consumes the Breaking Bad API to display character information with Firebase authentication. Features character search, detailed profiles, and user authentication.',
      image: '/project-breakingbad.jpg',
      tags: ['React', 'Firebase', 'REST API', 'Authentication'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ChandanRabha/Breaking-Bad-React',
      color: 'from-green-600 to-emerald-600'
    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.project-card-main',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-showcase', start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.side-project',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.side-projects', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  const currentProject = projects[activeProject]

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen py-24 px-4 md:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r ${currentProject.color} opacity-10 rounded-full blur-3xl transition-all duration-1000`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="projects-header text-center mb-16">
          <span className="text-purple-500 text-sm uppercase tracking-widest mb-4 block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in frontend development
          </p>
        </div>

        <div className="projects-showcase mb-20">
          <div className="project-card-main grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div className={`absolute -inset-4 bg-gradient-to-r ${currentProject.color} opacity-20 rounded-3xl blur-2xl transition-all duration-500`}></div>
              <div className="relative glass-card rounded-3xl overflow-hidden">
                <img src={currentProject.image} alt={currentProject.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeProject ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/20 transition-all">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href={currentProject.liveUrl} className="p-3 glass rounded-full hover:bg-white/20 transition-all">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${currentProject.color} bg-opacity-20 text-sm font-medium text-white mb-4`}>
                {currentProject.subtitle}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentProject.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{currentProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 glass rounded-full text-sm text-white/80">{tag}</span>
                ))}
              </div>
              <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all group">
                View Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="side-projects">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Todo React App', description: 'A Todo App Made Using React JS', tags: ['React', 'JavaScript'], color: 'from-orange-500 to-red-500' },
              { title: 'Monsteroo', description: 'React JS project with monsters from REST API', tags: ['React', 'API'], color: 'from-pink-500 to-rose-500' },
              { title: 'Portfolio', description: 'Personal portfolio website', tags: ['JavaScript', 'CSS'], color: 'from-indigo-500 to-purple-500' }
            ].map((project, index) => (
              <div key={index} className="side-project glass-card rounded-2xl p-6 group hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-xl font-bold text-white">{project.title[0]}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-purple-400">#{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
