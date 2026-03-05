'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Brain, Layers, Wrench } from 'lucide-react'

const categories = [
  {
    label: 'Languages',
    Icon: Code2,
    color: 'cyan' as const,
    skills: ['Java', 'Python', 'JavaScript', 'PHP', 'SQL', 'C', 'HTML', 'CSS'],
  },
  {
    label: 'Databases',
    Icon: Database,
    color: 'purple' as const,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'AI / ML',
    Icon: Brain,
    color: 'cyan' as const,
    skills: ['Knowledge Graphs', 'Vector Embeddings', 'Graph RAG', 'LSTM', 'B-Trees'],
  },
  {
    label: 'Frameworks & Libraries',
    Icon: Layers,
    color: 'purple' as const,
    skills: ['React', 'Bootstrap', 'WebRTC', 'Knuckles', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    Icon: Wrench,
    color: 'cyan' as const,
    skills: ['IntelliJ', 'VSCode', 'GitHub', 'Jupyter', 'Google Colab'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading gradient-text"
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                cat.color === 'cyan'
                  ? 'bg-cyan-500/15 border border-cyan-500/20'
                  : 'bg-purple-500/15 border border-purple-500/20'
              }`}>
                <cat.Icon size={20} className={cat.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
              </div>
              <h3 className={`font-semibold ${cat.color === 'cyan' ? 'text-cyan-300' : 'text-purple-300'}`}>
                {cat.label}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span
                  key={skill}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-transform hover:scale-105 cursor-default ${
                    cat.color === 'cyan' ? 'badge-cyan' : 'badge-purple'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
