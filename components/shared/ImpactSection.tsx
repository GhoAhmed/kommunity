'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Rocket, Zap, Globe, Target, Award } from 'lucide-react';

const ImpactSection = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [counters, setCounters] = useState<{ [key: number]: number }>({});
    const [isVisible, setIsVisible] = useState(false);

    const stats = React.useMemo(() => [
        { value: 10000, suffix: '+', label: 'Active Learners', icon: Users, color: 'from-purple-400 to-pink-400' },
        { value: 500, suffix: '+', label: 'Projects Launched', icon: Rocket, color: 'from-cyan-400 to-blue-400' },
        { value: 50, suffix: '+', label: 'Countries Reached', icon: Globe, color: 'from-green-400 to-teal-400' },
        { value: 95, suffix: '%', label: 'Success Rate', icon: Target, color: 'from-orange-400 to-red-400' }
    ], []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Energy particles
        const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; pulse: number; }[] = [];
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 1,
                speedY: (Math.random() - 0.5) * 1,
                opacity: Math.random() * 0.8 + 0.2,
                color: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4',
                pulse: Math.random() * 0.02 + 0.01
            });
        }

        let frame = 0;
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            particles.forEach(particle => {
                ctx.save();
                particle.opacity += Math.sin(frame * particle.pulse) * 0.02;
                ctx.globalAlpha = Math.max(0.1, Math.min(0.9, particle.opacity));
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    // Counter animation
    useEffect(() => {
        if (!isVisible) return;

        stats.forEach((stat, index) => {
            const start = 0;
            const end = stat.value;
            const duration = 2000;
            const startTime = Date.now() + (index * 200);

            const updateCounter = () => {
                const now = Date.now();
                const elapsed = now - startTime;

                if (elapsed < 0) {
                    requestAnimationFrame(updateCounter);
                    return;
                }

                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (end - start) * progress);

                setCounters(prev => ({
                    ...prev,
                    [index]: current
                }));

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            updateCounter();
        });
    }, [isVisible, stats]);

    // Intersection observer for counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('impact-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="impact-section"
            className="relative min-h-screen py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 overflow-hidden"
        >
            {/* Animated Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ width: '100%', height: '100%' }}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 z-10">
                {/* Energy rings */}
                <div className="absolute top-20 left-20 w-40 h-40 border-2 border-purple-500/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-20 w-60 h-60 border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute bottom-40 left-1/3 w-32 h-32 border-2 border-pink-500/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

                {/* Geometric patterns */}
                <div className="absolute top-1/2 left-10 w-20 h-80 bg-gradient-to-b from-purple-500/10 to-transparent rotate-12"></div>
                <div className="absolute bottom-20 right-40 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rotate-45 animate-pulse"></div>

                {/* Hexagonal grid */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: `
                            radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.4) 2px, transparent 2px),
                            radial-gradient(circle at 75px 75px, rgba(6, 182, 212, 0.4) 2px, transparent 2px)
                        `,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            {/* Orbital elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
            <div className="absolute bottom-1/4 left-1/5 w-80 h-80 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-20">
                {/* Header */}
                <div className="text-center mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-sm mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span>Galactic Impact Metrics</span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="block text-white mb-2">Our</span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Cosmic Impact
                        </span>
                    </h2>

                    {/* Divider */}
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Across the digital universe, we&apos;ve been igniting innovation, fostering connections, and
                        transforming lives through cutting-edge technology and boundless learning opportunities.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const currentValue = counters[index] || 0;

                        return (
                            <div
                                key={index}
                                className="group relative text-center p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-4 relative">
                                    <div className={`w-full h-full bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                                </div>

                                {/* Value */}
                                <div className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                    {currentValue.toLocaleString()}{stat.suffix}
                                </div>

                                {/* Label */}
                                <div className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                                    {stat.label}
                                </div>

                                {/* Progress bar */}
                                <div className="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                                        style={{
                                            width: isVisible ? `${(currentValue / stat.value) * 100}%` : '0%',
                                            transitionDelay: `${index * 200}ms`
                                        }}
                                    ></div>
                                </div>

                                {/* Hover particles */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Impact Stories */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-purple-400/30 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Education Impact */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Transforming Digital Education</h3>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                Our revolutionary learning platforms have empowered students across 50+ countries,
                                providing immersive educational experiences that bridge the gap between knowledge and innovation.
                            </p>

                            {/* Progress bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Global Reach Progress</span>
                                    <span className="text-purple-400 font-semibold">85%</span>
                                </div>
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-2000 ease-out"
                                        style={{
                                            width: isVisible ? '85%' : '0%',
                                            transitionDelay: '1s'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Research Impact */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Advancing AI Innovation</h3>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                Our cutting-edge research initiatives have led to breakthrough discoveries in AI,
                                sustainable technology, and automation, propelling humanity into the next digital era.
                            </p>

                            {/* Progress bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Innovation Index</span>
                                    <span className="text-cyan-400 font-semibold">92%</span>
                                </div>
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-2000 ease-out"
                                        style={{
                                            width: isVisible ? '92%' : '0%',
                                            transitionDelay: '1.2s'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default ImpactSection;