'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase } from 'lucide-react'

const stats = [
  { icon: GraduationCap, label: 'Education', value: 'B.E. CSE', sub: 'GCT Coimbatore — Graduated 2026' },
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
          {/* Profile photo — visible on mobile, hidden on lg (shown in sidebar) */}
          <div className="flex justify-center lg:hidden mb-2">
            <div className="relative w-32 h-32 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 to-purple-500">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Navamohan M"
                  width={128}
                  height={128}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            Hey! I&apos;m <span className="text-cyan-400 font-semibold">Navamohan</span>, a Computer Science
            graduate from <span className="text-white font-medium">Government College of Technology (GCT)</span>,
            Coimbatore. I&apos;m passionate about building systems at the intersection of AI and software engineering.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Currently working as an <span className="text-purple-400 font-medium">AI Engineer Intern</span> at{' '}
            <span className="text-white font-medium">Nuvai AI Solutions</span>, I develop pipelines that transform
            structured data into knowledge graphs and build semantic search systems using vector embeddings and
            efficient indexing techniques.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I enjoy building practical applications — from production-ready inventory systems with analytics
            dashboards to real-time chat platforms. I&apos;m always exploring new technologies in AI, system
            architecture, and backend development.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['Open to Work', 'Full-Time Opportunities', 'Collaborations', 'AI & Backend'].map(tag => (
              <span key={tag} className="badge-cyan">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Stat cards + photo */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Profile photo — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center mb-2"
          >
            <div className="relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Navamohan M"
                  width={144}
                  height={144}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
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
