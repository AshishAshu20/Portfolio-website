'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, X, FileText, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const resumeHighlights = [
  { icon: Briefcase, label: '3+ Years', sub: 'Frontend Experience', color: '#9333ea' },
  { icon: Code2, label: '10+ Projects', sub: 'Production Shipped', color: '#3b82f6' },
  { icon: GraduationCap, label: 'BTech CSE', sub: 'CGPA 7.8', color: '#06b6d4' },
  { icon: FileText, label: '2 Companies', sub: 'Industry Experience', color: '#ec4899' },
];

export default function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { theme } = useTheme();
  return (
    <section id="resume" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(147,51,234,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-mono tracking-widest text-purple-400 mb-4">MY CREDENTIALS</p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Download <span className="gradient-text">Resume</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A snapshot of my experience, skills, and the value I bring to your team.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl p-10 max-w-4xl mx-auto"
        >
          {/* Resume preview mockup */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Mockup */}
            <div
              className="flex-shrink-0 w-48 h-64 rounded-2xl flex flex-col p-4 gap-2 cursor-pointer group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(147,51,234,0.1), rgba(59,130,246,0.05))',
                border: '1px solid rgba(147,51,234,0.2)',
              }}
              onClick={() => setModalOpen(true)}
              data-cursor
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl"
                style={{ background: 'rgba(147,51,234,0.15)' }}>
                <Eye size={28} className="text-purple-400" />
              </div>

              {/* Mini resume lines */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                style={{ background: 'rgba(147,51,234,0.2)', border: '1px solid rgba(147,51,234,0.3)' }}>
                <span className="font-bold text-lg gradient-text">A</span>
              </div>
              <div className="h-2 rounded-full w-full" style={{ background: 'rgba(147,51,234,0.3)' }} />
              <div className="h-1.5 rounded-full w-3/4" style={{ background: 'rgba(255,255,255,0.08)' }} />
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-1 rounded-full"
                  style={{ width: `${60 + Math.random() * 35}%`, background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }} />
              ))}
              <div className="h-2 rounded-full w-2/3 mt-1" style={{ background: 'rgba(59,130,246,0.3)' }} />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-1 rounded-full"
                  style={{ width: `${50 + Math.random() * 40}%`, background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }} />
              ))}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6 flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Ashish Sharma</h3>
                <p className="font-medium gradient-text">Web Developer</p>
                <p className="text-sm mt-1 font-mono" style={{ color: 'var(--text-secondary)' }}>
                  ashish.builds207@gmail.com · Mohali, Punjab
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-3">
                {resumeHighlights.map(({ icon: Icon, label, sub, color }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: `${color}08`, border: `1px solid ${color}15` }}>
                    <Icon size={16} style={{ color }} />
                    <div>
                      <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{label}</p>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/Ashish_Resume_BW.pdf"
                  download="Ashish_Sharma_Resume.pdf"
                  className="btn-primary relative z-10 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  data-cursor
                >
                  <Download size={16} />
                  Download Resume
                </motion.a>

                <motion.button
                  onClick={() => setModalOpen(true)}
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  data-cursor
                >
                  <Eye size={16} />
                  Preview
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99990] flex items-center justify-center p-4 md:p-10"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
            onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid rgba(147,51,234,0.3)',
                boxShadow: '0 0 80px rgba(147,51,234,0.2)',
              }}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-5 border-b"
                style={{ borderColor: 'rgba(147,51,234,0.15)' }}>
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-purple-400" />
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Resume Preview</span>
                  <span className="tag text-xs">Ashish_Sharma_Resume.pdf</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/Ashish_Resume_BW.pdf"
                    download="Ashish_Sharma_Resume.pdf"
                    className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-xl transition-all"
                    style={{
                      background: 'rgba(147,51,234,0.1)',
                      border: '1px solid rgba(147,51,234,0.2)',
                      color: '#9333ea',
                    }}
                  >
                    <Download size={14} />
                    Download
                  </a>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-red-500/10"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)' }}
                    data-cursor
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* PDF iframe */}
              <div className="h-[70vh]">
                <iframe
                  src="/Ashish_Resume_BW.pdf"
                  className="w-full h-full"
                  title="Ashish Sharma Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
