'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const skillGroups = [
  {
    icon: '⚡',
    label: 'Frontend',
    color: '#9333ea',
    colorRgb: '147,51,234',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 93 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / SCSS', level: 96 },
    ],
  },
  {
    icon: '🔄',
    label: 'State & Data',
    color: '#3b82f6',
    colorRgb: '59,130,246',
    skills: [
      { name: 'Zustand', level: 90 },
      { name: 'Redux / Context API', level: 85 },
      { name: 'Axios / REST APIs', level: 92 },
      { name: 'WebSockets / Socket.io', level: 80 },
      { name: 'SSE (Server-Sent Events)', level: 78 },
    ],
  },
  {
    icon: '🛠️',
    label: 'Tools & More',
    color: '#06b6d4',
    colorRgb: '6,182,212',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'SEO Optimization', level: 85 },
      { name: 'Performance (Lighthouse)', level: 88 },
      { name: 'Chart.js', level: 78 },
      { name: 'Material UI / OneSignal', level: 80 },
    ],
  },
];

const techCloud = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Framer Motion',
  'Three.js', 'Zustand', 'Redux', 'WebSocket', 'SSE', 'REST API',
  'Git', 'SEO', 'Lighthouse', 'Node.js',
];

const stats = [
  { target: 3, suffix: '+', label: 'YRS EXP' },
  { target: 15, suffix: '+', label: 'TECH STACK' },
  { target: 10, suffix: '+', label: 'PROJECTS' },
  { target: 96, suffix: '%', label: 'TOP SKILL' },
];

function useCountUp(target: number, suffix: string, active: boolean, duration = 1400) {
  const [value, setValue] = useState('0' + suffix);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      setValue(Math.round(ease * target) + suffix);
      if (prog < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, suffix, duration]);
  return value;
}

function StatCard({
  target, suffix, label, active, delay,
}: {
  target: number; suffix: string; label: string; active: boolean; delay: number;
}) {
  const value = useCountUp(target, suffix, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="text-center py-4 px-3 rounded-2xl cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        className="text-2xl font-bold leading-none"
        style={{
          background: 'linear-gradient(120deg,#9333ea,#3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}
      </div>
      <div className="text-xs font-mono mt-1.5" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </div>
    </motion.div>
  );
}

function SkillRow({
  skill, color, colorRgb, inView, delay,
}: {
  skill: { name: string; level: number };
  color: string;
  colorRgb: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--text-secondary)' }}>
          {skill.name}
        </span>
        <motion.span
          className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
          style={{
            color,
            background: `rgba(${colorRgb},0.12)`,
            border: `1px solid rgba(${colorRgb},0.3)`,
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.25 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div
        className="relative h-[4px] rounded-full overflow-visible"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full relative"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.3, ease: [0.23, 1, 0.32, 1], delay }}
          style={{
            background: `linear-gradient(90deg, rgba(${colorRgb},0.6), ${color})`,
            boxShadow: `0 0 8px rgba(${colorRgb},0.5)`,
          }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={inView ? { backgroundPosition: ['200% 0%', '-200% 0%'] } : {}}
            transition={{ duration: 1.1, delay: delay + 0.7, ease: 'easeOut' }}
          />
          {/* Glowing dot at tip */}
          <motion.div
            className="absolute right-0 top-[-2.5px] -translate-y-1 w-2.5 h-2.5 rounded-full"
            style={{
              background: color,
              boxShadow: `0 0 10px ${color}, 0 0 4px ${color}`,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, scale: [1, 1.5, 1] } : {}}
            transition={{
              opacity: { delay: delay + 1.1, duration: 0.3 },
              scale: { delay: delay + 1.1, duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { theme } = useTheme();

  return (
    <section id="skills" ref={ref} className="py-32 relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full" style={{ width: "min(700px, 90vw)", height: "min(400px, 50vw)",
            background: 'radial-gradient(ellipse, rgba(147,51,234,0.07) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {[
          { rgb: '147,51,234', x: '6%', y: '18%', size: 140 },
          { rgb: '59,130,246', x: '86%', y: '12%', size: 100 },
          { rgb: '6,182,212', x: '78%', y: '70%', size: 80 },
          { rgb: '147,51,234', x: '10%', y: '78%', size: 65 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: orb.x, top: orb.y,
              width: orb.size, height: orb.size,
              background: `radial-gradient(circle, rgba(${orb.rgb},0.14) 0%, transparent 70%)`,
              filter: 'blur(24px)',
            }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5], x: [0, 18, -10, 0], y: [0, -14, 10, 0] }}
            transition={{ duration: 6 + i * 1.5, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] px-4 py-1.5 rounded-full mb-5"
            style={{
              color: '#9333ea',
              background: 'rgba(147,51,234,0.1)',
              border: '1px solid rgba(147,51,234,0.25)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"
            />
            MY TOOLKIT
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold leading-none" style={{ color: 'var(--text-primary)' }}>
            Skills &amp;{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Technologies I use daily to craft fast, scalable, and beautiful web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} active={inView} delay={0.2 + i * 0.08} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: gi * 0.15, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: theme === 'light'
                    ? `linear-gradient(145deg, rgba(${group.colorRgb},0.06) 0%, rgba(255,255,255,0.97) 60%)`
                    : `linear-gradient(145deg, rgba(${group.colorRgb},0.07) 0%, rgba(10,10,20,0.95) 60%)`,
                  border: `1px solid rgba(${group.colorRgb},0.18)`,
                  borderRadius: '24px',
                }}
              />
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${group.color}, rgba(${group.colorRgb},0.1))` }}
              />

              <div className="relative p-8 flex flex-col gap-5">
                {/* Card header */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: `rgba(${group.colorRgb},0.12)`,
                      border: `1px solid rgba(${group.colorRgb},0.28)`,
                      boxShadow: `0 0 16px rgba(${group.colorRgb},0.18)`,
                    }}
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3 + gi * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {group.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                      {group.label}
                    </h3>
                    <p className="text-xs font-mono" style={{ color: group.color }}>
                      {group.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill rows */}
                <div className="flex flex-col gap-4">
                  {group.skills.map((skill, si) => (
                    <SkillRow
                      key={skill.name}
                      skill={skill}
                      color={group.color}
                      colorRgb={group.colorRgb}
                      inView={inView}
                      delay={0.25 * gi + 0.08 * si}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-mono tracking-[0.2em] mb-5" style={{ color: 'var(--text-secondary)' }}>
            ALSO PROFICIENT IN
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techCloud.map((tech, i) => (
              <motion.span
                key={tech}
                className="text-xs font-mono font-semibold px-4 py-2 rounded-full cursor-default select-none"
                style={{
                  color: 'var(--text-secondary)',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                  border: '1px solid rgba(147,51,234,0.12)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, -(4 + (i % 3) * 2), 0],
                } : {}}
                transition={{
                  opacity: { delay: 0.65 + i * 0.04, duration: 0.35 },
                  scale: { delay: 0.65 + i * 0.04, duration: 0.35 },
                  y: {
                    delay: 0.65 + i * 0.1,
                    duration: 2.5 + (i % 4) * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                whileHover={{
                  scale: 1.12,
                  y: -5,
                  color: '#9333ea',
                  background: 'rgba(147,51,234,0.1)',
                  borderColor: 'rgba(147,51,234,0.4)',
                  boxShadow: '0 0 16px rgba(147,51,234,0.2)',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}