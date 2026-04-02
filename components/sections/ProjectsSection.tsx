'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles, Globe, BarChart2, Briefcase } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const projects = [
  {
    id: 1,
    title: 'Business Website Suite',
    subtitle: '3 Responsive SEO-Optimized Websites',
    desc: 'Launched three production-ready, SEO-optimized responsive websites with Zustand state management and tuned REST API integrations. Achieved full cross-browser compatibility with mobile-first layouts.',
    tech: ['Next.js', 'React.js', 'Zustand', 'HTML5', 'CSS3', 'REST APIs'],
    color: '#9333ea',
    colorRgb: '147,51,234',
    icon: Globe,
    inspired: 'teamco.work',
    highlights: ['SEO Optimized', 'Mobile-First', 'Cross-Browser'],
    number: '01',
  },
  {
    id: 2,
    title: 'Sales Flow & Task Manager',
    subtitle: 'End-to-End Sales Pipeline System',
    desc: 'Built a full sales pipeline with lead capture, smart assignment, and real-time conversion tracking. Crafted drag-and-drop task boards with live status sync and priority tags for smooth team productivity.',
    tech: ['Next.js', 'TypeScript', 'Zustand', 'Bootstrap', 'WebSockets'],
    color: '#3b82f6',
    colorRgb: '59,130,246',
    icon: BarChart2,
    inspired: 'pilltabs.com',
    highlights: ['Drag & Drop', 'Real-time Sync', 'Smart Assignment'],
    number: '02',
  },
  {
    id: 3,
    title: 'Job Management System',
    subtitle: 'AI-Powered Multi-Portal Recruitment Hub',
    desc: 'Engineered a multi-portal job platform with SSR, fast Next.js frontend, and deep SEO optimization. Integrated AI APIs and interactive widgets, turning a basic listing tool into a smart recruitment hub.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Zustand', 'AI APIs'],
    color: '#06b6d4',
    colorRgb: '6,182,212',
    icon: Briefcase,
    inspired: 'hiremii',
    highlights: ['AI Integrated', 'SSR', 'Multi-Portal'],
    number: '03',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { theme } = useTheme();
  const Icon = project.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative rounded-3xl overflow-hidden h-full cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 rounded-3xl transition-all duration-500"
          style={{
            background: theme === 'light'
              ? `linear-gradient(135deg, rgba(${project.colorRgb},0.07) 0%, rgba(255,255,255,0.97) 100%)`
              : `linear-gradient(135deg, rgba(${project.colorRgb},0.15) 0%, rgba(10,10,18,0.96) 100%)`,
            border: `1px solid rgba(${project.colorRgb},${theme === 'light' ? '0.2' : '0.18'})`,
            boxShadow: theme === 'light' ? `0 4px 20px rgba(${project.colorRgb},0.08)` : 'none',
          }}
        />

        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `0 0 60px rgba(${project.colorRgb},0.2), inset 0 0 60px rgba(${project.colorRgb},0.04)` }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
          style={{ background: `linear-gradient(90deg, ${project.color}, rgba(${project.colorRgb},0.2))` }}
        />

        <div className="relative p-8 flex flex-col gap-6 h-full">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `rgba(${project.colorRgb},0.12)`,
                  border: `1px solid rgba(${project.colorRgb},0.3)`,
                  boxShadow: `0 0 20px rgba(${project.colorRgb},0.2)`,
                }}
                whileHover={{ scale: 1.12, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={24} style={{ color: project.color }} />
              </motion.div>
              <span
                className="text-5xl font-bold font-mono opacity-10 group-hover:opacity-25 transition-opacity"
                style={{ color: project.color }}
              >
                {project.number}
              </span>
            </div>

            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
              style={{
                background: `rgba(${project.colorRgb},0.1)`,
                border: `1px solid rgba(${project.colorRgb},0.25)`,
                color: project.color,
              }}
            >
              <Sparkles size={10} />
              {project.inspired}
            </div>
          </div>

          <div>
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h3>
            <p className="text-sm font-semibold" style={{ color: project.color }}>{project.subtitle}</p>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map(h => (
              <span
                key={h}
                className="text-xs font-mono px-3 py-1 rounded-full flex items-center gap-1"
                style={{
                  background: `rgba(${project.colorRgb},0.1)`,
                  border: `1px solid rgba(${project.colorRgb},0.25)`,
                  color: project.color,
                }}
              >
                ✦ {h}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-lg"
                style={{
                  background: 'var(--tech-tag-bg)',
                  border: '1px solid var(--tech-tag-border)',
                  color: 'var(--tech-tag-color)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

        
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { theme } = useTheme();

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
            <span>◈</span> WHAT I&apos;VE BUILT
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono glass"
            style={{
              border: theme === 'light' ? '1px solid rgba(147,51,234,0.2)' : '1px solid rgba(147,51,234,0.2)',
              color: 'var(--text-secondary)',
            }}
          >
            <Sparkles size={14} className="text-purple-500" />
            Inspired by world-class platforms — built better, designed uniquely
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
