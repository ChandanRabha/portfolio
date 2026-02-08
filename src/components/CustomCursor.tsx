import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const cursor = cursorRef.current
    if (!cursor) return

    const trails = trailRefs.current
    const pos = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }
    const speed = 0.15

    const xSet = gsap.quickSetter(cursor, 'x', 'px')
    const ySet = gsap.quickSetter(cursor, 'y', 'px')

    const trailXSets = trails.map((trail) => gsap.quickSetter(trail, 'x', 'px'))
    const trailYSets = trails.map((trail) => gsap.quickSetter(trail, 'y', 'px'))

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 })
      trails.forEach(trail => gsap.to(trail, { opacity: 1, duration: 0.3 }))
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 })
      trails.forEach(trail => gsap.to(trail, { opacity: 0, duration: 0.3 }))
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    let rafId: number = 0

    const tick = () => {
      pos.x += (mouse.x - pos.x) * speed
      pos.y += (mouse.y - pos.y) * speed

      xSet(pos.x - 10)
      ySet(pos.y - 10)

      trails.forEach((_, i) => {
        const delay = (i + 1) * 0.08
        const trailX = pos.x + (mouse.x - pos.x) * delay
        const trailY = pos.y + (mouse.y - pos.y) * delay
        trailXSets[i](trailX - 4)
        trailYSets[i](trailY - 4)
      })

      rafId = requestAnimationFrame(tick)
    }

    tick()

    const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 2, duration: 0.3 })
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 })
      })
    })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={el => { if (el) trailRefs.current[i] = el }}
          className="custom-cursor-trail hidden md:block"
          style={{ opacity: 1 - i * 0.15 }}
        />
      ))}
    </>
  )
}

export default CustomCursor
