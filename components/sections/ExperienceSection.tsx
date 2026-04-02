'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, CheckCircle2, GraduationCap, Zap, Award, Code2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

const experiences = [
  {
    role: 'Web Developer',
    company: 'Ellocent Labs IT Solutions Pvt. Ltd.',
    period: 'Feb 2025 – Feb 2026',
    duration: '1 year',
    type: 'Current',
    color: '#9333ea',
    colorRgb: '147,51,234',
    icon: Zap,
    stat: { value: '3', label: 'Live Products' },
    highlights: [
      { text: 'Built scalable React.js and Next.js apps with SSR, code splitting, lazy loading, and SEO-optimized architecture.', icon: '⚡' },
      { text: 'Implemented Zustand-based state with modular UI components, reducing re-renders and speeding up delivery.', icon: '🧩' },
      { text: 'Integrated live REST APIs and real-time data flows; configured push notification flows to boost user engagement.', icon: '🔗' },
      { text: 'Shipped pixel-perfect, mobile-first interfaces with smooth animations and micro-interactions across all devices.', icon: '✨' },
      { text: 'Partnered with designers and backend engineers, turning Figma designs into accessible, high-quality components.', icon: '🎨' },
      { text: 'Ensured cross-browser compatibility and consistent UI performance across all major browsers and screen sizes.', icon: '🌐' },
    ],
    tech: ['Next.js', 'React.js', 'TypeScript', 'Zustand', 'REST APIs', 'SSR'],
  },
  {
    role: 'Web Developer',
    company: 'Sogrow Venture Pvt. Ltd.',
    period: 'Oct 2022 – Feb 2025',
    duration: '2 yrs 4 months',
    type: 'Previous',
    color: '#3b82f6',
    colorRgb: '59,130,246',
    icon: Code2,
    stat: { value: '5+', label: 'Products Built' },
    highlights: [
      { text: 'Optimized REST API layers with caching and advanced state patterns for noticeably faster load times.', icon: '🚀' },
      { text: 'Built a shared component library from scratch, adopted across multiple products for consistent UI.', icon: '🧱' },
      { text: 'Profiled with Chrome DevTools and Lighthouse; resolved rendering bottlenecks and reduced bundle sizes.', icon: '📊' },
      { text: 'Shipped WebSocket and SSE real-time features with solid third-party integrations and frontend security practices.', icon: '⚙️' },
      { text: 'Mentored junior developers through code reviews and pair programming, raising team quality standards.', icon: '👥' },
      { text: 'Developed responsive, accessible UIs following best practices for semantic HTML, ARIA, and mobile-first design.', icon: '♿' },
    ],
    tech: ['React.js', 'WebSockets', 'SSE', 'Redux', 'Lighthouse', 'Component Library'],
  },
];

function ExperienceCard({ exp, index, inView }: {
  exp: typeof experiences[0];
  index: number;
  inView: boolean;
}) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(true);
  const Icon = exp.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [4, -4]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-4, 4]), { stiffness: 200, damping: 25 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Card base */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: theme === 'light'
              ? `linear-gradient(135deg, rgba(${exp.colorRgb},0.06) 0%, rgba(255,255,255,0.97) 100%)`
              : `linear-gradient(135deg, rgba(${exp.colorRgb},0.1) 0%, rgba(8,8,18,0.97) 100%)`,
            border: `1px solid rgba(${exp.colorRgb},${theme === 'light' ? '0.2' : '0.15'})`,
            boxShadow: theme === 'light'
              ? `0 8px 32px rgba(${exp.colorRgb},0.08), 0 2px 8px rgba(0,0,0,0.04)`
              : `0 8px 40px rgba(${exp.colorRgb},0.06)`,
          }}
        />

        {/* Animated corner glow */}
        <motion.div
          className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(${exp.colorRgb},0.12) 0%, transparent 70%)`,
            filter: 'blur(20px)',
            translateX: '30%',
            translateY: '-30%',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, ${exp.color}, rgba(${exp.colorRgb},0.2), transparent)` }}
        />

        <div className="relative p-8 md:p-10">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-5 mb-8">
            <div className="flex items-start gap-4">
              {/* Icon badge */}
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `rgba(${exp.colorRgb},0.12)`,
                  border: `1px solid rgba(${exp.colorRgb},0.3)`,
                  boxShadow: `0 0 24px rgba(${exp.colorRgb},0.2)`,
                }}
                animate={{ boxShadow: [`0 0 20px rgba(${exp.colorRgb},0.15)`, `0 0 35px rgba(${exp.colorRgb},0.35)`, `0 0 20px rgba(${exp.colorRgb},0.15)`] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              >
                <Icon size={22} style={{ color: exp.color }} />
              </motion.div>

              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {exp.role}
                  </h3>
                  {exp.type === 'Current' && (
                    <motion.span
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(34,197,94,0.12)',
                        border: '1px solid rgba(34,197,94,0.35)',
                        color: '#22c55e',
                      }}
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      CURRENT
                    </motion.span>
                  )}
                </div>
                <p className="text-base font-semibold" style={{ color: exp.color }}>{exp.company}</p>
              </div>
            </div>

            {/* Right: period + stat */}
            <div className="flex flex-col items-end gap-2">
              <div
                className="flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-xl"
                style={{
                  background: theme === 'light' ? `rgba(${exp.colorRgb},0.07)` : `rgba(${exp.colorRgb},0.08)`,
                  border: `1px solid rgba(${exp.colorRgb},0.2)`,
                  color: 'var(--text-secondary)',
                }}
              >
                <Calendar size={13} style={{ color: exp.color }} />
                {exp.period}
              </div>
              <span
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{
                  background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                  color: 'var(--text-secondary)',
                  border: theme === 'light' ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {exp.duration}
              </span>
            </div>
          </div>

          {/* Stat chip */}
          <div className="flex items-center gap-3 mb-7">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{
                background: `rgba(${exp.colorRgb},0.1)`,
                border: `1px solid rgba(${exp.colorRgb},0.25)`,
              }}
            >
              <Award size={14} style={{ color: exp.color }} />
              <span className="text-lg font-bold" style={{ color: exp.color }}>{exp.stat.value}</span>
              <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>{exp.stat.label}</span>
            </div>
            {/* Divider line */}
            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, rgba(${exp.colorRgb},0.3), transparent)` }} />
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-3 mb-7">
            {exp.highlights.map((point, j) => (
              <motion.div
                key={j}
                className="flex gap-3 p-3 rounded-xl group/item"
                style={{
                  background: theme === 'light' ? `rgba(${exp.colorRgb},0.04)` : `rgba(${exp.colorRgb},0.04)`,
                  border: `1px solid rgba(${exp.colorRgb},0.08)`,
                  transition: 'all 0.25s ease',
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 + j * 0.06 }}
                whileHover={{
                  background: `rgba(${exp.colorRgb},0.09)`,
                  borderColor: `rgba(${exp.colorRgb},0.22)`,
                  x: 3,
                }}
              >
                <span className="text-base flex-shrink-0 mt-0.5">{point.icon}</span>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-5 border-t" style={{ borderColor: `rgba(${exp.colorRgb},0.12)` }}>
            {exp.tech.map((t, ti) => (
              <motion.span
                key={t}
                className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: `rgba(${exp.colorRgb},0.1)`,
                  border: `1px solid rgba(${exp.colorRgb},0.28)`,
                  color: exp.color,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2 + ti * 0.05 }}
                whileHover={{ scale: 1.08, y: -2, boxShadow: `0 4px 12px rgba(${exp.colorRgb},0.3)` }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="py-10 md:py-32  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.p
            className="text-xs font-mono tracking-[0.3em] mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{
              color: '#9333ea',
              background: theme === 'light' ? 'rgba(147,51,234,0.08)' : 'rgba(147,51,234,0.12)',
              border: '1px solid rgba(147,51,234,0.25)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>◈</span> MY JOURNEY
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            3+ years building production-grade frontend systems at fast-moving companies.
          </p>
        </motion.div>

        {/* Timeline connector bar */}
        <div className="relative">
          {/* Animated vertical line between cards */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(147,51,234,0.6), rgba(59,130,246,0.4), rgba(6,182,212,0.2))',
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          />

          <div className="flex flex-col gap-8 relative z-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
            ))}
          </div>

          <div className="hidden md:flex absolute right-0 top-0 bottom-0 flex-col justify-between pointer-events-none pr-2">
            {['2026', '2025', '2024', '2023', '2022'].map((yr, i) => (
              <motion.span
                key={yr}
                className="text-xs font-mono"
                style={{ color: 'var(--text-secondary)', opacity: 0.4 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.4 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {yr}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 relative rounded-3xl overflow-hidden"
          whileHover={{ y: -4 }}
        >
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: theme === 'light'
                ? 'linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(255,255,255,0.97) 100%)'
                : 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(8,8,18,0.97) 100%)',
              border: `1px solid rgba(6,182,212,${theme === 'light' ? '0.2' : '0.15'})`,
              boxShadow: theme === 'light'
                ? '0 8px 32px rgba(6,182,212,0.08)'
                : '0 8px 40px rgba(6,182,212,0.05)',
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #06b6d4, rgba(6,182,212,0.2), transparent)' }} />

          <div className="relative p-8 md:p-10">
            <div className="flex flex-wrap items-start gap-6 justify-between">
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(6,182,212,0.12)',
                    border: '1px solid rgba(6,182,212,0.3)',
                    boxShadow: '0 0 24px rgba(6,182,212,0.2)',
                  }}
                >
                  <GraduationCap size={22} className="text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      BTech — Computer Science &amp; Engineering
                    </h3>
                  </div>
                  <p className="text-base font-semibold text-cyan-500 mb-1">Career Point University, Hamirpur, HP</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(6,182,212,0.1)',
                        border: '1px solid rgba(6,182,212,0.25)',
                        color: '#06b6d4',
                      }}
                    >
                      CGPA: 7.8 / 10
                    </span>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                      Apr 2018 – Jul 2022
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini skill chips for edu */}
              <div className="flex flex-wrap gap-2 items-start">
                {['Web Developer','OS', 'DBMS', 'Networks'].map(s => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg"
                    style={{
                      background: theme === 'light' ? 'rgba(6,182,212,0.07)' : 'rgba(6,182,212,0.07)',
                      border: '1px solid rgba(6,182,212,0.18)',
                      color: theme === 'light' ? '#0e7490' : '#22d3ee',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
