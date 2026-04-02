'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function FooterSection() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(147,51,234,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(147,51,234,0.3), rgba(59,130,246,0.2))',
                  border: '1px solid rgba(147,51,234,0.4)',
                }}>
                <span className="font-bold gradient-text">A</span>
              </div>
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                Ashish<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Web Developer crafting fast, beautiful, and impactful web experiences. Based in Mohali, Punjab.
            </p>
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:text-purple-400"
                  style={{
                    background: 'rgba(147,51,234,0.08)',
                    border: '1px solid rgba(147,51,234,0.15)',
                    color: 'var(--text-secondary)',
                  }}
                  data-cursor
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wider font-mono text-purple-400">NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-left transition-colors hover:text-purple-400"
                  style={{ color: 'var(--text-secondary)' }}
                  data-cursor
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wider font-mono text-purple-400">CONTACT</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:ashish.builds207@gmail.com"
                className="text-sm transition-colors hover:text-purple-400"
                style={{ color: 'var(--text-secondary)' }}>
                ashish.builds207@gmail.com
              </a>
              <a href="tel:+918580666891"
                className="text-sm transition-colors hover:text-purple-400"
                style={{ color: 'var(--text-secondary)' }}>
                +91 8580666891
              </a>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Mohali, Punjab, India</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: 'rgba(147,51,234,0.1)' }} />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using
            <span className="font-mono text-purple-400">Next.js</span> ·
            <span className="font-mono text-blue-400">React.js</span>
          </p>
          <p className="text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Ashish Sharma
          </p>
          <motion.button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
            style={{
              background: 'rgba(147,51,234,0.1)',
              border: '1px solid rgba(147,51,234,0.2)',
              color: '#9333ea',
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            data-cursor
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
