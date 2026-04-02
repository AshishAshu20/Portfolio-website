'use client';

import { useTheme } from '@/context/ThemeContext';

const items = [
  'React.js', '✦', 'Next.js', '✦', 'TypeScript', '✦', 'Tailwind CSS', '✦',
  'Framer Motion', '✦', 'Three.js', '✦', 'GSAP', '✦', 'Zustand', '✦',
  'WebSockets', '✦', 'SSE', '✦', 'Redux', '✦', 'REST APIs', '✦',
  'Node.js', '✦', 'SEO', '✦', 'Performance', '✦', 'Animations', '✦',
];

export default function MarqueeBar() {
  const { theme } = useTheme();
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-5 relative"
      style={{
        borderTop: theme === 'light' ? '1px solid rgba(147,51,234,0.12)' : '1px solid rgba(255,255,255,0.05)',
        borderBottom: theme === 'light' ? '1px solid rgba(147,51,234,0.12)' : '1px solid rgba(255,255,255,0.05)',
        background: theme === 'light'
          ? 'rgba(255,255,255,0.5)'
          : 'rgba(255,255,255,0.01)',
      }}
    >
      {/* Fade edges using CSS var */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(90deg, var(--marquee-fade-start) 0%, transparent 12%, transparent 88%, var(--marquee-fade-start) 100%)`,
        }}
      />
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-4 text-sm font-mono font-semibold"
            style={{
              color: item === '✦' ? 'var(--neon-purple)' : 'var(--marquee-text)',
              textShadow: item === '✦' && theme === 'dark' ? '0 0 8px rgba(147,51,234,0.6)' : 'none',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
