'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Monitor, Globe } from 'lucide-react';

const strengths = [
  { icon: Code2, title: 'Clean Architecture', desc: 'Modular, maintainable code that scales with your team and product.' },
  { icon: Zap, title: 'Performance First', desc: 'Lighthouse-optimized builds with lazy loading, caching, and SSR strategies.' },
  { icon: Monitor, title: 'Pixel-Perfect UI', desc: 'Every detail matters — animations, spacing, and micro-interactions.' },
  { icon: Globe, title: 'Real-time Systems', desc: 'WebSockets, SSE, and live data flows integrated seamlessly.' },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '2', label: 'Companies' },
  { value: '∞', label: 'Passion for Code' },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Bg glow */}
      <div className="absolute left-0 top-1/2 rounded-full pointer-events-none" style={{ width: "min(400px, 40vw)", height: "min(400px, 40vw)",
        background: 'radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-mono tracking-widest text-purple-400 mb-4">GET TO KNOW ME</p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m a <strong className="text-white">passionate Frontend Developer</strong> focused on building fast, scalable, and visually polished web applications. I specialize in{' '}
              <strong className="text-purple-400">React.js</strong>,{' '}
              <strong className="text-blue-400">Next.js</strong>, and{' '}
              <strong className="text-cyan-400">TypeScript</strong>, turning complex ideas into seamless user experiences.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              With <strong className="text-white">3+ years of hands-on experience</strong>, I&apos;ve shipped production-grade applications ranging from real-time sales dashboards to AI-powered job platforms. I care deeply about micro-interactions, accessibility, and crafting smooth, premium experiences across all devices.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Currently based in <strong className="text-white">Mohali, Punjab</strong>, I&apos;m always exploring new technologies and pushing the boundaries of what&apos;s possible on the web. My work is inspired by cutting-edge platforms like{' '}
              <span className="text-purple-400 font-mono text-sm">teamco.work</span>,{' '}
              <span className="text-blue-400 font-mono text-sm">pilltabs.com</span>, and{' '}
              <span className="text-cyan-400 font-mono text-sm">hiremii</span>.
            </p>

            {/* Stats row */}
            <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card p-4 text-center rounded-2xl"
                >
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-xs font-mono mt-1" style={{ color: 'var(--text-secondary)' }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: strength cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strengths.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(147,51,234,0.1)', border: '1px solid rgba(147,51,234,0.2)' }}>
                  <Icon size={22} className="text-purple-400" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}