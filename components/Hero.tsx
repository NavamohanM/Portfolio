'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, FileDown, ChevronDown } from 'lucide-react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; color: string
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let frameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.5 ? '#00f5ff' : '#a855f7',
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,245,255,${(1 - dist / 130) * 0.4})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} id="particles" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-cyan-400 font-mono text-lg mb-4 tracking-widest"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight"
        >
          Navamohan M
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-semibold mb-6"
        >
          AI Engineer &amp; Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Final-year CSE student at GCT Coimbatore. Building intelligent systems with Knowledge Graphs,
          Vector Embeddings, and real-time full-stack applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://github.com/NavamohanM"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn flex items-center gap-2 px-6 py-3 rounded-full text-cyan-300 font-medium text-sm"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/navamohanm/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn-purple flex items-center gap-2 px-6 py-3 rounded-full text-purple-300 font-medium text-sm"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download="Navamohan_M_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-dark-900 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition-opacity"
          >
            <FileDown size={18} /> Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-slate-500 tracking-widest font-mono">SCROLL</span>
        <ChevronDown size={20} className="text-cyan-500" />
      </div>
    </section>
  )
}
