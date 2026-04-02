'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/ThemeContext';

const skillGroups = [
  {
    label: 'Frontend',
    color: '#9333ea',
    colorRgb: '147,51,234',
    icon: '⚡',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 93 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3 / SCSS', level: 96 },
    ],
  },
  {
    label: 'State & Data',
    color: '#3b82f6',
    colorRgb: '59,130,246',
    icon: '🔄',
    skills: [
      { name: 'Zustand', level: 90 },
      { name: 'Redux / Context API', level: 85 },
      { name: 'WebSockets / Socket.io', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Axios', level: 92 },
    ],
  },
  {
    label: 'Tools & More',
    color: '#06b6d4',
    colorRgb: '6,182,212',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'SEO Optimization', level: 85 },
      { name: 'Chart.js', level: 78 },
      { name: 'Material UI / OneSignal', level: 80 },
    ],
  },
];

const techCloud = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'Redux', 'WebSocket', 'CSS', 'REST API',
  'Git', 'SEO', 'Node.js',
];

const stats = [
  { value: '3+', label: 'Years Exp.' },
  { value: '15+', label: 'Tech Stack' },
  { value: '10+', label: 'Projects' },
  { value: '95%', label: 'Top Skill' },
];

function AnimatedSkillBar({
  skill, color, colorRgb, inView, index,
}: {
  skill: { name: string; level: number };
  color: string;
  colorRgb: string;
  inView: boolean;
  index: number;
}) {
  const { theme } = useTheme();
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm font-medium tracking-wide transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}
        >
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
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 + index * 0.08 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div
        className="relative h-2 rounded-full overflow-hidden"
        style={{ background: theme === 'light' ? `rgba(${colorRgb},0.1)` : 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full relative"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.3, ease: [0.23, 1, 0.32, 1], delay: 0.3 + index * 0.06 }}
          style={{
            background: `linear-gradient(90deg, rgba(${colorRgb},0.8), ${color})`,
            boxShadow: theme === 'dark' ? `0 0 10px rgba(${colorRgb},0.5)` : `0 2px 8px rgba(${colorRgb},0.35)`,
          }}
        >
          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={inView ? { backgroundPosition: ['200% 0', '-200% 0'] } : {}}
            transition={{ duration: 1.5, delay: 0.8 + index * 0.06, ease: 'easeOut' }}
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
    <section id="skills" ref={ref} className="py-10 md:py-32  relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background: theme === 'light'
              ? 'radial-gradient(ellipse, rgba(147,51,234,0.08) 0%, transparent 70%)'
              : 'radial-gradient(ellipse, rgba(147,51,234,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {[
          { color: '147,51,234', x: '8%', y: '20%', size: 120, delay: 0 },
          { color: '59,130,246', x: '85%', y: '15%', size: 90, delay: 1.5 },
          { color: '6,182,212', x: '75%', y: '72%', size: 70, delay: 0.8 },
          { color: '147,51,234', x: '12%', y: '75%', size: 60, delay: 2 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: orb.x, top: orb.y,
              width: orb.size, height: orb.size,
              background: `radial-gradient(circle, rgba(${orb.color},${theme === 'light' ? '0.18' : '0.12'}) 0%, transparent 70%)`,
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.9, 0.5],
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
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
            <span>◈</span> MY TOOLKIT
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Technologies I use daily to craft fast, scalable, and beautiful web applications.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-16 flex-wrap"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center px-6 py-3 rounded-2xl"
              style={{
                background: theme === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.03)',
                border: theme === 'light' ? '1px solid rgba(147,51,234,0.15)' : '1px solid rgba(255,255,255,0.07)',
                boxShadow: theme === 'light' ? '0 2px 12px rgba(147,51,234,0.06)' : 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.08 }}
              whileHover={{ scale: 1.06, y: -2 }}
            >
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: gi * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="relative rounded-3xl overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Card glow bg */}
              <div
                className="absolute inset-0"
                style={{
                  background: theme === 'light'
                    ? `linear-gradient(135deg, rgba(${group.colorRgb},0.07) 0%, rgba(255,255,255,0.95) 100%)`
                    : `linear-gradient(135deg, rgba(${group.colorRgb},0.08) 0%, rgba(10,10,20,0.95) 100%)`,
                  border: `1px solid rgba(${group.colorRgb},0.2)`,
                  borderRadius: '24px',
                }}
              />
              {/* Top color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, rgba(${group.colorRgb},0.6), rgba(${group.colorRgb},0.2))` }}
              />

              <div className="relative p-8 flex flex-col gap-6">
                {/* Group header */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `rgba(${group.colorRgb},0.12)`,
                      border: `1px solid rgba(${group.colorRgb},0.3)`,
                      boxShadow: `0 0 16px rgba(${group.colorRgb},0.2)`,
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: gi * 0.5 }}
                  >
                    {group.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{group.label}</h3>
                    <p className="text-xs font-mono" style={{ color: group.color }}>{group.skills.length} skills</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill, si) => (
                    <AnimatedSkillBar
                      key={skill.name}
                      skill={skill}
                      color={group.color}
                      colorRgb={group.colorRgb}
                      inView={inView}
                      index={si}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud — enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-mono tracking-widest mb-6" style={{ color: 'var(--text-secondary)' }}>
            ALSO PROFICIENT IN
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techCloud.map((tech, i) => (
              <motion.span
                key={tech}
                className="text-xs font-mono font-semibold px-4 py-2 rounded-full cursor-default select-none"
                style={{
                  background: 'var(--skill-tag-bg)',
                  border: '1px solid var(--skill-tag-border)',
                  color: 'var(--skill-tag-color)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.65 + i * 0.04, duration: 0.4 }}
                whileHover={{
                  scale: 1.12,
                  background: 'rgba(147,51,234,0.15)',
                  borderColor: 'rgba(147,51,234,0.5)',
                  color: '#9333ea',
                  boxShadow: '0 0 16px rgba(147,51,234,0.25)',
                  y: -3,
                }}
                animate-y={{ y: [0, -4, 0] }}
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
