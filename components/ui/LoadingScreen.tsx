'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 18 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(() => setLoading(false), 600);
      }
      setProgress(Math.min(p, 100));
    }, 120);
    return () => clearInterval(iv);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#030305' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Glowing orbs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)' }} />

          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(147,51,234,0.2), rgba(59,130,246,0.2))',
                  border: '1px solid rgba(147,51,234,0.4)',
                  boxShadow: '0 0 40px rgba(147,51,234,0.3)',
                }}>
                <span className="text-3xl font-bold gradient-text font-display">A</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold tracking-widest text-white mb-1">ASHISH SHARMA</h1>
              <p className="text-xs font-mono tracking-[0.3em] text-purple-400">Web DEVELOPER</p>
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-64 flex flex-col gap-3"
            >
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #9333ea, #06b6d4)',
                    boxShadow: '0 0 10px #9333ea',
                    transition: 'width 0.15s ease',
                  }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-white/30">
                <span>Initializing...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
