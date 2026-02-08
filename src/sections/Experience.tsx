import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceItem {
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const experiences: ExperienceItem[] = [
    {
      company: 'WeCreate',
      position: 'Frontend Developer',
      period: 'Aug 2021 - Present',
      location: 'Canada, Remote',
      description: 'Developing responsive comprehensive UI based on client and Figma designs. Implementing UI tweaks for existing modules and developing custom UI dashboards. REST API integrations for visual representation of data.',
      achievements: [
        'Integrated public web page with Agility CMS and Strapi',
        'Integrated Plaid payment gateway for secure transactions',
        'Using AI tools to boost work and productivity',
        'Implemented UI tweaks for existing modules and fixed bugs to improve ease of use',
        'Created custom UI dashboards for clients to visualize data and insights',
        'Signal Real-time updates for live for data status updates'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'REST API', 'Figma', 'Agility CMS', 'Strapi', 'Plaid',"Redux", 'Node.js', 'Express', "Git","GitHub","Azure DevOps","ChatGPT", "GitHub Copilot"]
    },
    {
      company: 'Advanced Structures India',
      position: 'Intern(Software Engineer)',
      period: 'Mar 2021 -  Aug2021',
      location: 'Bengaluru, Karnataka (India)',
      description: 'Developed new UI for easy entry of data in existing production software, saving time and costs. Implemented UI improvements and created user interfaces for new modules.',
      achievements: [
        'Developed New UI for easy entry of data in existing production software saving time and costs',
        'Implemented UI tweaks for existing modules and fixed bugs to improve ease of use',
        'Created User Interface in FIGMA for new modules'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'HTML/CSS', 'Figma', "React", "Redux", 'Node.js', 'Express', "Git","Bitbucket","Bootstrap"]
    },
    {
      company: 'SourceDOTcom Pvt Ltd',
      position: 'Full Stack Software Developer',
      period: 'May 2017 - Feb 2019',
      location: 'Shillong, Meghalaya (India)',
      description: `Joined as a trainee to learn the ropes of software development, quickly progressing to a full stack role. Contributed to both frontend and backend development of the company's flagship products.`,
      achievements: [
        'Worked on functional improvements',
        'Designed UI for ongoing production software',
        'Led a small team of developers',
        'Requirement gathering from clients'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', "JQuery", 'PHP', 'MySQL', "React", "Redux", 'Node.js', 'Express',"Bootstrap", "Material UI", "GitHub", "Bitbucket"]
    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.experience-header',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.timeline-progress',
        { scaleY: 0 },
        {
          scaleY: 1, duration: 2, ease: 'none',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 70%', end: 'bottom 30%', scrub: 1 }
        }
      )

      gsap.fromTo('.experience-card',
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.timeline-dot',
        { scale: 0 },
        {
          scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(2)',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="relative min-h-screen py-24 px-4 md:px-8">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="experience-header text-center mb-16">
          <span className="text-purple-500 text-sm uppercase tracking-widest mb-4 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            5+ years of growth, learning, and building amazing products
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2">
            <div className="timeline-progress timeline-line absolute inset-0 origin-top"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="timeline-dot absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#050505] md:-translate-x-1/2 z-10 shadow-lg shadow-purple-500/50"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="experience-card glass-card rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <p className="text-purple-400 text-sm">{exp.position}</p>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{exp.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className={`text-sm text-muted-foreground flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <ChevronRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 glass rounded-full text-xs text-white/70">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">GitHub Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Pull Shark', description: 'Opened pull requests that have been merged', icon: '🦈' },
              { title: 'YOLO', description: 'Merged a pull request without code review', icon: '🎯' },
              { title: 'Pair Extraordinaire', description: 'Co-authored commits on merged pull requests', icon: '👥' }
            ].map((achievement, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
