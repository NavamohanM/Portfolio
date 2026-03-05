'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2, Award } from 'lucide-react'

const groups = [
  {
    category: 'Professional',
    color: 'cyan' as const,
    certs: [
      { label: 'Google Cybersecurity', issuer: 'Google / Coursera', date: 'Aug 2024', file: '/certs/cybersecurity.pdf' },
      { label: 'Full Stack Developer', issuer: 'Wingspan', date: 'Aug 2024', file: '/certs/fullstack.pdf' },
    ],
  },
  {
    category: 'Web & Programming',
    color: 'purple' as const,
    certs: [
      { label: 'Python', issuer: 'Wingspan', date: 'Aug 2024', file: '/certs/python.pdf' },
      { label: 'JavaScript', issuer: 'Wingspan', date: 'Aug 2024', file: '/certs/javascript.pdf' },
      { label: 'HTML5 & CSS3', issuer: 'Wingspan', date: 'Aug 2024', file: '/certs/html-css.pdf' },
    ],
  },
  {
    category: 'MongoDB',
    color: 'cyan' as const,
    certs: [
      { label: 'Intro to MongoDB', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-intro-students.pdf' },
      { label: 'Document Model', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-document-model.pdf' },
      { label: 'Atlas Getting Started', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-atlas-getting-started.pdf' },
      { label: 'CRUD: Insert & Find', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-crud-insert-find.pdf' },
      { label: 'CRUD: Replace & Delete', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-crud-replace-delete.pdf' },
      { label: 'CRUD: Modifying Results', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-crud-modifying.pdf' },
      { label: 'Connecting to MongoDB', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-connecting.pdf' },
      { label: 'Aggregation', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-aggregation.pdf' },
      { label: 'Indexes', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-indexes.pdf' },
      { label: 'Atlas Search', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-atlas-search.pdf' },
      { label: 'Data Modeling', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-data-modeling.pdf' },
      { label: 'Transactions', issuer: 'MongoDB University', date: 'Jul 2024', file: '/certs/mongodb-transactions.pdf' },
    ],
  },
]

const allCerts = groups.flatMap(g => g.certs.map(c => ({ ...c, category: g.category, color: g.color })))

export default function Certifications() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const currentGroup = groups[activeGroup]
  const currentCert = currentGroup.certs[activeIdx]
  const totalInGroup = currentGroup.certs.length

  const handleGroupChange = (i: number) => {
    setActiveGroup(i)
    setActiveIdx(0)
  }

  const prev = () => setActiveIdx(i => (i - 1 + totalInGroup) % totalInGroup)
  const next = () => setActiveIdx(i => (i + 1) % totalInGroup)

  const isCyan = currentGroup.color === 'cyan'

  return (
    <section id="certifications" className="section-pad relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading gradient-text"
      >
        Certifications
      </motion.h2>

      {/* Total count */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-slate-500 text-sm mb-8 -mt-6"
      >
        {allCerts.length} certificates across {groups.length} categories
      </motion.p>

      <div className="max-w-4xl mx-auto">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {groups.map((g, i) => (
            <button
              key={g.category}
              onClick={() => handleGroupChange(i)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                i === activeGroup
                  ? g.color === 'cyan'
                    ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_14px_rgba(0,245,255,0.25)]'
                    : 'bg-purple-500/20 border border-purple-400 text-purple-300 shadow-[0_0_14px_rgba(168,85,247,0.25)]'
                  : 'glass-card text-slate-400 hover:text-slate-200 border-white/8'
              }`}
            >
              <Award size={14} />
              {g.category}
              <span className={`text-xs rounded-full px-1.5 py-0.5 ${
                i === activeGroup
                  ? g.color === 'cyan' ? 'bg-cyan-500/30 text-cyan-200' : 'bg-purple-500/30 text-purple-200'
                  : 'bg-white/10 text-slate-500'
              }`}>
                {g.certs.length}
              </span>
            </button>
          ))}
        </div>

        {/* Cert pills within group */}
        {currentGroup.certs.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {currentGroup.certs.map((c, i) => (
              <button
                key={c.file}
                onClick={() => setActiveIdx(i)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  i === activeIdx
                    ? isCyan
                      ? 'bg-cyan-500/20 border border-cyan-400/60 text-cyan-300'
                      : 'bg-purple-500/20 border border-purple-400/60 text-purple-300'
                    : 'bg-white/5 border border-white/10 text-slate-500 hover:text-slate-300'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* PDF Viewer card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeGroup}-${activeIdx}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass-card overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
              <div>
                <p className={`text-sm font-bold ${isCyan ? 'text-cyan-300' : 'text-purple-300'}`}>
                  {currentCert.label}
                </p>
                <p className="text-slate-500 text-xs">{currentCert.issuer} · {currentCert.date}</p>
              </div>
              <button
                onClick={() => setLightbox(true)}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors px-3 py-1.5 rounded-lg glass-card"
              >
                <Maximize2 size={13} /> Full Screen
              </button>
            </div>

            {/* PDF embed */}
            <div className="w-full bg-dark-800" style={{ height: '480px' }}>
              <iframe
                src={`${currentCert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-0"
                title={currentCert.label}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/8">
              <button
                onClick={prev}
                disabled={totalInGroup === 1}
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} /> Prev
              </button>

              {/* Dots */}
              <div className="flex gap-2 items-center">
                {currentGroup.certs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIdx
                        ? isCyan ? 'w-5 h-2 bg-cyan-400' : 'w-5 h-2 bg-purple-400'
                        : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={totalInGroup === 1}
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-slate-600 text-xs mt-3">
          {activeIdx + 1} of {totalInGroup} in {currentGroup.category}
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl glass-card overflow-hidden"
            style={{ height: '90vh' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
              <div>
                <p className="text-white text-sm font-bold">{currentCert.label}</p>
                <p className="text-slate-500 text-xs">{currentCert.issuer} · {currentCert.date}</p>
              </div>
              <button onClick={() => setLightbox(false)} className="text-slate-400 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            <iframe
              src={`${currentCert.file}#toolbar=1&navpanes=0`}
              className="w-full border-0 bg-dark-800"
              style={{ height: 'calc(90vh - 56px)' }}
              title={currentCert.label}
            />
          </motion.div>
        </div>
      )}
    </section>
  )
}
