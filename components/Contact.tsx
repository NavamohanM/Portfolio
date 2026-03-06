'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Code2, Award, ExternalLink } from 'lucide-react'

const contactItems = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'navamohan5219@gmail.com',
    href: 'mailto:navamohan5219@gmail.com',
    color: 'cyan' as const,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 6379869771',
    href: 'tel:+916379869771',
    color: 'purple' as const,
  },
]

const socialLinks = [
  {
    Icon: Github,
    label: 'GitHub',
    sub: 'NavamohanM',
    href: 'https://github.com/NavamohanM',
    color: 'cyan' as const,
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    sub: 'navamohanm',
    href: 'https://www.linkedin.com/in/navamohanm/',
    color: 'purple' as const,
  },
  {
    Icon: Code2,
    label: 'LeetCode',
    sub: 'navamohan5219',
    href: 'https://leetcode.com/u/navamohan5219/',
    color: 'cyan' as const,
  },
  {
    Icon: Award,
    label: 'Certifications',
    sub: 'Google Drive',
    href: 'https://drive.google.com/drive/folders/1ZPH_K0w8dg5rP9NDV6Zaj-kUxPhTAI58?usp=drive_link',
    color: 'purple' as const,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading gradient-text"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-slate-400 text-center mb-12 max-w-lg mx-auto"
      >
        Open to internships, full-time roles, and collaborations. Let&apos;s build something awesome together.
      </motion.p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact cards */}
        <div className="space-y-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-5 flex items-center gap-4 hover:border-white/15 transition-all duration-300 group ${
                item.color === 'cyan' ? 'hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]' : 'hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                item.color === 'cyan'
                  ? 'bg-cyan-500/15 border border-cyan-500/20'
                  : 'bg-purple-500/15 border border-purple-500/20'
              }`}>
                <item.Icon size={20} className={item.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                <p className={`font-medium mt-0.5 group-hover:underline ${
                  item.color === 'cyan' ? 'text-cyan-300' : 'text-purple-300'
                }`}>{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social links grid */}
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`glass-card p-4 flex flex-col items-center gap-2 text-center hover:border-white/15 transition-all duration-300 group ${
                link.color === 'cyan'
                  ? 'hover:shadow-[0_0_16px_rgba(0,245,255,0.1)]'
                  : 'hover:shadow-[0_0_16px_rgba(168,85,247,0.1)]'
              }`}
            >
              <link.Icon size={22} className={link.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
              <div>
                <p className="text-white text-sm font-semibold">{link.label}</p>
                <p className="text-slate-500 text-xs">{link.sub}</p>
              </div>
              <ExternalLink size={12} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-center border-t border-white/5 pt-8"
      >
        <p className="text-slate-600 text-xs">© 2026 Navamohan M. All rights reserved.</p>
      </motion.div>
    </section>
  )
}
