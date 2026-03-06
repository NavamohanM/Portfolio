'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, MessageSquare, Lock, BarChart3, ExternalLink, Globe } from 'lucide-react'

const projects: {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
  Icon: React.ElementType
  color: 'cyan' | 'purple'
}[] = [
  {
    title: 'Real-Time Chat Application',
    description:
      'WhatsApp-inspired full-stack chat app with PHP backend, Supabase (PostgreSQL), WebSocket channels, WebRTC voice & video calling, and 17+ REST APIs for messaging, file uploads, emoji reactions, and typing indicators. Secured with bcrypt, CSRF tokens, and rate limiting. Supports voice messages, offline queue, browser notifications, link previews, and message search.',
    tech: ['PHP', 'JavaScript', 'Supabase', 'WebRTC', 'HTML', 'CSS'],
    github: 'https://github.com/NavamohanM/Chat-app',
    Icon: MessageSquare,
    color: 'cyan' as const,
  },
  {
    title: 'Password Generator',
    description:
      'Desktop application built with Java Swing for generating secure passwords. Features configurable length, character sets, dark mode, password history saving, and pronounceable password generation. Built during Emglitz Technologies internship.',
    tech: ['Java', 'Java Swing'],
    github: 'https://github.com/NavamohanM/PasswordGenerator',
    Icon: Lock,
    color: 'purple' as const,
  },
  {
    title: 'Stock Inventory Management',
    description:
      'Production-deployed full-stack inventory system with role-based access (Admin/Staff), ACID-safe Purchase & Sales management, per-product low-stock alerts, and SKU support. Features an analytics dashboard with 3 live Chart.js charts (revenue, stock distribution, units-sold), date-range filters, CSV export, and real-time low-stock navbar badge. Secured with bcrypt, CSRF tokens, prepared statements, and session regeneration.',
    tech: ['PHP 8.3', 'MySQL', 'Bootstrap 5', 'Chart.js', 'Railway'],
    github: 'https://github.com/NavamohanM/Stock-Inventory-Management',
    live: 'https://stock-inventory-management.up.railway.app/login.php',
    Icon: BarChart3,
    color: 'cyan' as const,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading gradient-text"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col hover:scale-[1.02] hover:border-white/15 transition-all duration-300"
          >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              proj.color === 'cyan'
                ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/25'
                : 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/25'
            }`}>
              <proj.Icon size={22} className={proj.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
            </div>

            <h3 className="text-white font-bold text-lg mb-2 leading-snug">{proj.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{proj.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {proj.tech.map(t => (
                <span key={t} className={proj.color === 'cyan' ? 'badge-cyan' : 'badge-purple'}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  proj.color === 'cyan'
                    ? 'neon-btn text-cyan-300'
                    : 'neon-btn-purple text-purple-300'
                }`}
              >
                <Github size={16} />
                GitHub
                <ExternalLink size={14} className="opacity-60" />
              </a>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    proj.color === 'cyan'
                      ? 'neon-btn text-cyan-300'
                      : 'neon-btn-purple text-purple-300'
                  }`}
                >
                  <Globe size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
