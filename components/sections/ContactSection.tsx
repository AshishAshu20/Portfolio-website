'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, MapPin, Phone, MessageSquare, Instagram } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendEmails } from '../../lib/email';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ashish.builds207@gmail.com', href: 'mailto:ashish.builds207@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8580666891', href: 'tel:+918580666891' },
  { icon: MapPin, label: 'Location', value: 'Mohali, Punjab, India', href: '#' },
];


function FloatingInput({ label, type = 'text', id, textarea = false, resetSignal }: {
  label: string;
  type?: string;
  id: string;
  textarea?: boolean;
  resetSignal?:number;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const isFloating = focused || value.length > 0;

  const baseStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.02)',
    border: `1px solid ${focused ? 'rgba(147,51,234,0.5)' : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '14px',
    padding: textarea ? '28px 16px 12px' : '24px 16px 8px',
    color: 'var(--text-primary)',
    fontFamily: 'inherit',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s ease',
    minHeight: textarea ? '140px' : 'auto',
    resize: textarea ? 'none' : undefined,
    boxShadow: focused ? '0 0 0 3px rgba(147,51,234,0.08)' : 'none',
  };

  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    left: '16px',
    top: isFloating ? (textarea ? '10px' : '8px') : (textarea ? '22px' : '50%'),
    transform: isFloating ? 'none' : 'translateY(-50%)',
    color: isFloating ? '#9333ea' : 'var(--text-secondary)',
    fontSize: isFloating ? '11px' : '15px',
    fontWeight: isFloating ? '600' : '400',
    letterSpacing: isFloating ? '0.06em' : '0',
    pointerEvents: 'none',
    transition: 'all 0.25s cubic-bezier(0.23,1,0.32,1)',
  };

  useEffect(() => {
    setValue('');
  }, [resetSignal])
  return (
    <div style={{ position: 'relative' }}>
      {textarea ? (
        <textarea
          id={id}
          name={id} 
          style={baseStyle}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=""
        />
      ) : (
        <input
          id={id}
          name={id} 
          type={type}
          style={baseStyle}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=""
        />
      )}
      <label htmlFor={id} style={labelStyle}>{label}</label>
    </div>
  );
}


export default function ContactSection() {
  const [resetSignal, setResetSignal] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [sending, setSending] = useState(false);
  const showSuccess = (msg: string) => {
    toast.success(msg, {
      icon: '🚀',
      style: {
        border: '1px solid rgba(34,197,94,0.3)',
        background: 'rgba(22, 101, 52, 0.25)',
      },
    });
  };
  
  const showError = (msg: string) => {
    toast.error(msg, {
      icon: '⚠️',
      style: {
        border: '1px solid rgba(239,68,68,0.3)',
        background: 'rgba(127, 29, 29, 0.25)',
      },
    });
  };
  
  const showInfo = (msg: string) => {
    toast(msg, {
      icon: '💬',
      style: {
        border: '1px solid rgba(59,130,246,0.3)',
        background: 'rgba(30, 64, 175, 0.25)',
      },
    });
  };

  // ✅ FULL WORKING SUBMIT FUNCTION
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // ✅ VALIDATION
    if (!name) {
      showError('Name is required');
      return;
    }
    
    if (!email) {
      showError('Email is required');
      return;
    }
    
    // ✅ Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Enter a valid email address');
      return;
    }
    
    if (!subject) {
      showError('Subject is required');
      return;
    }
    
    if (!message) {
      showError('Message cannot be empty');
      return;
    }

    try {
      setSending(true);

      await sendEmails({
        name,
        email,
        subject,
        message,
      });

      showSuccess('Message sent! I\'ll get back to you soon.');
      setResetSignal(prev => prev + 1);


    } catch (error) {
      console.error(error);
      showError('Failed to send message ❌');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(147,51,234,0.06) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-mono tracking-widest text-purple-400 mb-4">LET&apos;S CONNECT</p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
          </p>
        </motion.div>


        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Status */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-mono text-green-400">Available for work</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Currently open to full-time positions and exciting freelance projects. Response time: within 24 hours.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass-card p-4 rounded-2xl flex items-center gap-4 group"
                  data-cursor
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ background: 'rgba(147,51,234,0.1)', border: '1px solid rgba(147,51,234,0.2)' }}>
                    <Icon size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-purple-400 mb-0.5">{label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

          </motion.div>

          {/* FORM */}
          <motion.div className="lg:col-span-3">
            <div className="glass-card p-8 rounded-3xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FloatingInput label="Your Name" id="name" resetSignal={resetSignal}/>
                  <FloatingInput label="Email Address" type="email" id="email" resetSignal={resetSignal}/>
                </div>
                <FloatingInput label="Subject" id="subject" resetSignal={resetSignal} />
                <FloatingInput label="Your Message..." id="message" textarea resetSignal={resetSignal}/>

                <motion.button type="submit" disabled={sending} className="btn-primary flex items-center justify-center gap-2">
                  {sending ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}