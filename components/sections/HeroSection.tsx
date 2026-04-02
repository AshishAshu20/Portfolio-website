'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Mail, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const ParticleBackground = dynamic(
  () => import('@/components/three/ParticleBackground'),
  { ssr: false }
);

export default function HeroSection() {
  const { theme } = useTheme();

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <ParticleBackground />

      {/* Decorative orbs — clamped to max 50vw so they never cause scroll */}
      <div
        className="absolute top-1/4 left-1/4 rounded-full pointer-events-none"
        style={{
          width: 'min(600px, 50vw)', height: 'min(600px, 50vw)',
          background: 'radial-gradient(circle, rgba(147,51,234,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 rounded-full pointer-events-none"
        style={{
          width: 'min(500px, 50vw)', height: 'min(500px, 50vw)',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <span className="tag">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="text-sm font-mono tracking-widest text-purple-400 mb-3">Hello, I&apos;m</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-none mb-2" style={{ color: 'var(--text-primary)' }}>
                Ashish
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold leading-none gradient-text">
                Sharma
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="text-lg font-mono" style={{ color: 'var(--text-secondary)' }}>I build</span>
              <span className="text-lg font-mono font-semibold text-purple-400">
                <TypeAnimation
                  sequence={[
                    'blazing fast UIs', 2000,
                    'Next.js applications', 2000,
                    'seamless experiences', 2000,
                    'pixel-perfect designs', 2000,
                    'real-time systems', 2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Web Developer specializing in{' '}
              <strong className={theme === 'dark' ? 'text-white/80' : 'text-black/80'}>React.js</strong> &amp;{' '}
              <strong className={theme === 'dark' ? 'text-white/80' : 'text-black/80'}>Next.js</strong>.{' '}
              Turning complex ideas into smooth, scalable user experiences with a sharp eye for animation and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.9 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary relative z-10 flex items-center gap-2"
              >
                View My Work <ArrowDown size={16} />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline flex items-center gap-2"
              >
                <Mail size={16} /> Let&apos;s Talk
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.1 }}
              className="flex items-center gap-5"
            >
              <span className="text-xs font-mono tracking-wider" style={{ color: 'var(--text-secondary)' }}>FIND ME ON</span>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/__nobody_207', label: 'Instagram' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-developer', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:ashish.builds207@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-purple-400"
                    style={{
                      background: 'rgba(147,51,234,0.08)',
                      border: '1px solid rgba(147,51,234,0.2)',
                      color: 'var(--text-secondary)',
                    }}
                    data-cursor
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Spinning ring */}
              <div
                className="absolute -inset-4 rounded-full animate-spin-slow opacity-40"
                style={{ background: 'conic-gradient(from 0deg, #9333ea, #3b82f6, #06b6d4, #9333ea)' }}
              />
              <div
                className="absolute -inset-4 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(3,3,5,1) 85%, transparent 100%)' }}
              />

              {/* Photo */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-float"
                style={{
                  border: '2px solid rgba(147,51,234,0.5)',
                  boxShadow: '0 0 60px rgba(147,51,234,0.3), 0 0 120px rgba(59,130,246,0.1)',
                }}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Ashish Sharma"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(3,3,5,0.4) 0%, transparent 60%)' }}
                />
              </div>

              {/* Floating stat cards — hidden on mobile via CSS class */}
              <motion.div
                className="hero-stat-card absolute glass-card px-4 py-3 rounded-2xl animate-float-delayed"
                style={{
                  left: '-3rem',
                  top: '25%',
                  animationDelay: '1s',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4.5 }}
              >
                <p className="text-2xl font-bold gradient-text">3+</p>
                <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>Years Exp</p>
              </motion.div>

              <motion.div
                className="hero-stat-card absolute glass-card px-4 py-3 rounded-2xl animate-float"
                style={{
                  right: '-2.5rem',
                  bottom: '25%',
                  animationDelay: '2s',
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4.7 }}
              >
                <p className="text-2xl font-bold gradient-text">10+</p>
                <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>Projects</p>
              </motion.div>

              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 glass-card px-4 py-2 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.0 }}
              >
                <p className="text-xs font-mono text-center gradient-text font-semibold">React • Next.js • TS</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          data-cursor
        >
          <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--text-secondary)' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
            style={{ borderColor: 'rgba(147,51,234,0.4)' }}
          >
            <div className="w-1 h-2 rounded-full bg-purple-500" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}