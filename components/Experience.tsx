'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Nuvai AI Solutions Pvt Ltd',
    role: 'AI Engineer Intern',
    duration: 'Dec 2025 – Present',
    location: 'On-Site',
    color: 'cyan' as const,
    certificate: null,
    bullets: [
      'Designed a YAML-to-Knowledge Graph pipeline mapping hierarchical configurations as nodes and edges, preserving structural context for Graph RAG and AI retrieval workflows.',
      'Built a vector embedding pipeline for graph nodes enabling semantic search, replacing keyword-based retrieval; integrated Knuckles framework for AI pipeline orchestration.',
      'Architected hybrid indexing using B-Tree for low-latency metadata lookups and LSTM-based contextual storage to model sequential data relationships.',
    ],
  },
  {
    company: 'Emglitz Technologies',
    role: 'Java Intern',
    duration: 'July 2025',
    location: 'On-Site',
    color: 'purple' as const,
    certificate: 'https://drive.google.com/file/d/1g07-TdxVCT9ebJK2CK1FVfVFPXNiK7CF/view',
    bullets: [
      'Developed a Password Generator desktop app in Java with Java Swing GUI, supporting customizable password options, history saving, dark mode, and pronounceable password generation.',
    ],
  },
  {
    company: 'Coincent',
    role: 'Web Development Intern',
    duration: 'April 2024 – June 2024',
    location: 'Remote',
    color: 'cyan' as const,
    certificate: 'https://drive.google.com/file/d/11udFIb_XPo46NJcCQJe6AOlhSg1pQ3ex/view',
    bullets: [
      'Built responsive front-end interfaces using HTML, CSS, JavaScript, and Bootstrap.',
      'Developed scalable back-end logic in Java with database integration for real-time data updates.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading gradient-text"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 opacity-30" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 flex-shrink-0 mt-6 z-10 ${
                exp.color === 'cyan'
                  ? 'bg-cyan-500 border-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.6)]'
                  : 'bg-purple-500 border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.6)]'
              }`} />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[46%] glass-card p-6 hover:border-white/15 transition-all duration-300 ${
                i % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
              }`}>
                <h3 className={`text-lg font-bold ${exp.color === 'cyan' ? 'text-cyan-300' : 'text-purple-300'}`}>
                  {exp.company}
                </h3>
                <p className="text-white font-semibold mt-0.5">{exp.role}</p>

                <div className="flex flex-wrap gap-3 mt-2 mb-4">
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar size={12} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        exp.color === 'cyan' ? 'bg-cyan-500' : 'bg-purple-500'
                      }`} />
                      {b}
                    </li>
                  ))}
                </ul>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 mt-4 text-xs font-medium transition-colors ${
                      exp.color === 'cyan'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-purple-400 hover:text-purple-300'
                    }`}
                  >
                    <ExternalLink size={13} /> View Certificate
                  </a>
                )}
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[46%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
