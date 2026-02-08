import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-menu-item',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power3.out' }
      )
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${
        isScrolled ? 'py-4' : 'py-6'
      }`}>
        <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
          isScrolled ? 'glass rounded-full mx-8' : ''
        }`}>
          <div className="flex items-center justify-between py-3 px-4">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
              className="text-xl font-bold gradient-text"
            >
              CHANDAN RABHA
            </a>
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                  className="text-sm text-muted-foreground hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`flex items-center justify-between p-4 transition-all duration-300 ${
          isScrolled ? 'glass' : ''
        }`}>
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
            className="text-lg font-bold gradient-text"
          >
            CHANDAN RABHA
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="glass absolute top-full left-0 right-0 p-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                  className="mobile-menu-item text-lg text-muted-foreground hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navigation
