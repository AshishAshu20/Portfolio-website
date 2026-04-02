'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* ================= SCROLL NAVBAR ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ================= ACTIVE SECTION (FIXED) ================= */
  useEffect(() => {
    const sections = links.map((link) =>
      document.querySelector(link.href)
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        // ❌ At top → no active
        if (window.scrollY < 100) {
          setActiveSection('');
          return;
        }
  
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  
        if (visible.length > 0) {
          setActiveSection('#' + visible[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );
  
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
  
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  /* ================= NAV CLICK ================= */
  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass border border-white/5 shadow-2xl py-3 mx-4'
              : ''
          }`}
        >
          {/* LOGO */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg, rgba(147,51,234,0.3), rgba(59,130,246,0.3))',
                border: '1px solid rgba(147,51,234,0.5)',
              }}
            >
              <span className="font-bold text-base gradient-text">A</span>
            </div>

            <span
              className="font-bold text-base hidden sm:block"
              style={{ color: 'var(--text-primary)' }}
            >
              Ashish<span className="gradient-text">.</span>
            </span>
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? 'bg-purple-500/10 shadow-[0_0_20px_rgba(147,51,234,0.4)]'
                        : 'hover:text-purple-400'
                    }`}
                  style={{
                    color: isActive
                      ? '#a855f7'
                      : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(147,51,234,0.1)',
                border: '1px solid rgba(147,51,234,0.2)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? (
                    <Sun size={16} className="text-yellow-400" />
                  ) : (
                    <Moon size={16} className="text-purple-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* CTA */}
            <button
  onClick={() => handleNav('#contact')}
  className="btn-primary hidden sm:flex items-center gap-2 text-sm py-2 px-5"
  style={{
    '--btn-bg':
      theme === 'dark'
        ? 'rgba(147,51,234,0.1)'
        : 'rgba(255,255,255,0.1)',

    '--btn-border':
      theme === 'dark'
        ? '1px solid rgba(147,51,234,0.2)'
        : '1px solid rgba(255,255,255,0.2)',

    '--btn-text':
      theme === 'dark'
        ? 'rgba(255,255,255,0.9)'
        : 'rgba(0,0,0,0.9)',

    '--btn-hover-bg':
      theme === 'dark'
        ? 'linear-gradient(135deg, var(--neon-purple), var(--neon-blue))'
        : 'linear-gradient(135deg, #ffffff, #e0e7ff)',
  } as React.CSSProperties}
>
  <span>Hire Me</span>
</button>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(147,51,234,0.1)',
                border: '1px solid rgba(147,51,234,0.2)',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-[9998] rounded-2xl p-6 glass"
            style={{ border: '1px solid rgba(147,51,234,0.2)' }}
          >
            <div className="flex flex-col gap-2">
              {links.map((link, i) => {
                const isActive = activeSection === link.href;

                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.href)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-all
                      ${
                        isActive
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'hover:text-purple-400 hover:bg-purple-500/5'
                      }`}
                    style={{
                      color: isActive
                        ? '#a855f7'
                        : 'var(--text-secondary)',
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}