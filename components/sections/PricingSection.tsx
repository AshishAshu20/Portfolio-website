'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Star, Rocket, Crown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const pricingPlans = [
    {
        id: 1,
        title: "Starter Website",
        subtitle: "Perfect for small businesses & personal brands",
        price: "₹12,999",
        color: "#8b5cf6",
        colorRgb: "139,92,246",
        icon: Star,
        features: [
            "1 Responsive Website",
            "SEO Optimised Pages",
            "Mobile-First UI Design",
            "Basic Admin Support",
            "5-7 Days Delivery",
        ],
    },
    {
        id: 2,
        title: "Business Pro Web App",
        subtitle: "Ideal for growing companies needing real features",
        price: "₹24,999",
        color: "#06b6d4",
        colorRgb: "6,182,212",
        icon: Rocket,
        features: [
            "Full Web Application",
            "API Integration (REST)",
            "Zustand / Redux State Management",
            "Dashboard + Authentication",
            "Real-Time Notifications",
        ],
    },
    {
        id: 3,
        title: "Enterprise System",
        subtitle: "Advanced & scalable solutions for enterprises",
        price: "₹49,999",
        color: "#f59e0b",
        colorRgb: "245,158,11",
        icon: Crown,
        features: [
            "AI-Powered Features",
            "Multi-Portal System",
            "High Performance + SEO",
            "Advanced Analytics",
            "Premium Support",
        ],
    },
];

interface PricingPlan {
    id: number;
    title: string;
    subtitle: string;
    price: string;
    color: string;
    colorRgb: string;
    icon: React.ElementType;
    features: string[];
}


function PricingCard({
    plan,
    index,
}: {
    plan: PricingPlan;
    index: number;
}) {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { theme } = useTheme();
    const Icon = plan.icon;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 150, damping: 20 });

    const handleMouse = (e: any) => {
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
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                onMouseMove={handleMouse}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="group relative rounded-3xl overflow-hidden p-8 cursor-pointer"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
            >
                <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        background:
                            theme === 'light'
                                ? `linear-gradient(135deg, rgba(${plan.colorRgb},0.1), rgba(255,255,255,0.95))`
                                : `linear-gradient(135deg, rgba(${plan.colorRgb},0.17), rgba(10,10,18,0.95))`,
                        border: `1px solid rgba(${plan.colorRgb},0.2)`
                    }}
                />

                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ boxShadow: `0 0 80px rgba(${plan.colorRgb},0.35)` }}
                />

                <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${plan.color}, transparent)` }}
                />

                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{
                                background: `rgba(${plan.colorRgb},0.15)`,
                                border: `1px solid rgba(${plan.colorRgb},0.3)`,
                            }}
                            whileHover={{ scale: 1.15, rotate: 6 }}
                        >
                            <Icon size={26} style={{ color: plan.color }} />
                        </motion.div>
                        <h3 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                            {plan.title}
                        </h3>
                    </div>

                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {plan.subtitle}
                    </p>

                    <h2
                        className="text-4xl font-extrabold font-mono"
                        style={{ color: plan.color }}
                    >
                        {plan.price}
                    </h2>

                    <div className="flex flex-col gap-2">
                        {plan.features.map((f: any) => (
                            <div
                                key={f}
                                className="text-sm font-mono px-3 py-2 rounded-lg"
                                style={{
                                    background: `rgba(${plan.colorRgb},0.09)`,
                                    border: `1px solid rgba(${plan.colorRgb},0.3)`,
                                    color: plan.color,
                                }}
                            >
                                ✦ {f}
                            </div>
                        ))}
                    </div>

                    <motion.a
                        href="#contact"
                        className="relative w-full mt-4 py-3 text-center rounded-full font-mono text-sm overflow-hidden transition-all duration-300"
                        style={{
                            border: `1px solid ${plan.color}`,
                            color: plan.color,
                            boxShadow: `0 0 20px rgba(${plan.colorRgb}, 0.3)`
                        }}
                        whileHover={{
                            scale: 1.04,
                            backgroundColor: plan.color,
                            color: "#fff",
                            boxShadow: `0 0 40px rgba(${plan.colorRgb}, 0.6), 0 10px 30px rgba(0,0,0,0.3)`,
                            y: -2
                        }}
                    >
                        <motion.span
                            className="absolute inset-0 opacity-0"
                            style={{
                                background: `linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)`
                            }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                        <span className="relative z-10">Contact Us</span>
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function PricingSection() {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
    const { theme } = useTheme();

    return (
        <section id="pricing" ref={ref} className="py-20 md:py-32 relative">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.p
                        className="text-xs font-mono mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                        style={{
                            color: '#8b5cf6',
                            background: theme === 'light' ? 'rgba(139,92,246,0.1)' : 'rgba(139,92,246,0.15)',
                            border: '1px solid rgba(139,92,246,0.25)',
                        }}
                    >
                        <Sparkles size={10} /> PRICING PLANS
                    </motion.p>

                    <h2
                        className="text-4xl md:text-6xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Flexible <span className="gradient-text">Pricing</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, i) => (
                        <PricingCard key={plan.id} plan={plan} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}