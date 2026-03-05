'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase } from 'lucide-react'

const stats = [
  { icon: GraduationCap, label: 'Education', value: 'B.E. CSE', sub: 'GCT Coimbatore, 2026' },
  { icon: Award, label: 'CGPA', value: '8.00', sub: 'Government College of Technology' },
  { icon: Briefcase, label: 'Internships', value: '3+', sub: 'AI, Java & Web Development' },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading gradient-text"
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-5"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            Hey! I&apos;m <span className="text-cyan-400 font-semibold">Navamohan</span>, a final-year
            Computer Science student passionate about building systems that sit at the intersection of
            AI and full-stack development.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Currently working as an <span className="text-purple-400 font-medium">AI Engineer Intern</span> at{' '}
            <span className="text-white font-medium">Nuvai AI Solutions</span>, where I&apos;ve designed
            YAML-to-Knowledge Graph pipelines, built vector embedding systems for semantic search, and
            architected hybrid indexing using B-Trees and LSTM models.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I love solving real problems — from WhatsApp-inspired real-time chat apps with WebRTC to
            full-stack inventory management systems. When I&apos;m not coding, you&apos;ll find me grinding
            LeetCode or exploring the latest in AI research.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['Open to Work', 'Full-Time Roles', 'Internships', 'Collaborations'].map(tag => (
              <span key={tag} className="badge-cyan">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Stat cards */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <stat.icon size={22} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                <p className="text-white font-bold text-lg leading-tight">{stat.value}</p>
                <p className="text-slate-500 text-xs mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
