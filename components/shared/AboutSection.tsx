'use client';

import React, { useEffect, useRef } from 'react';
import { CheckCircle, Sparkles, Zap, Target, Users, BookOpen, Award } from 'lucide-react';

const AboutSection = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const features = [
        "AI-Powered Learning Tools",
        "Interactive Course Content",
        "Real-World Project Experience",
        "Community-Driven Growth",
        "Future-Ready Skills Training",
        "Smart Automation Solutions"
    ];

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

        // Floating particles
        const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; }[] = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                color: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4'
            });
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                ctx.save();
                ctx.globalAlpha = particle.opacity;
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

    return (
        <section className="relative min-h-screen py-24 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden">
            {/* Animated Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ width: '100%', height: '100%' }}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 z-10">
                {/* Geometric shapes */}
                <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/30 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-10 w-16 h-64 bg-gradient-to-b from-purple-500/20 to-transparent rotate-12"></div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Content */}
                    <div className="relative">
                        {/* Main central hub */}
                        <div className="relative w-96 h-96 mx-auto">
                            {/* Central core */}
                            <div className="absolute inset-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl shadow-2xl shadow-purple-500/50 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <Sparkles className="w-16 h-16 text-white" />
                                </div>
                            </div>

                            {/* Floating feature cards */}
                            <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 max-w-[160px] animate-float">
                                <BookOpen className="w-8 h-8 text-cyan-400 mb-2" />
                                <div className="text-white text-sm font-semibold">Smart Learning</div>
                                <div className="text-white/60 text-xs">AI-Powered</div>
                            </div>

                            <div className="absolute -top-4 -right-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 max-w-[160px] animate-float" style={{ animationDelay: '1s' }}>
                                <Users className="w-8 h-8 text-purple-400 mb-2" />
                                <div className="text-white text-sm font-semibold">Community</div>
                                <div className="text-white/60 text-xs">Connected</div>
                            </div>

                            <div className="absolute -bottom-8 left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 max-w-[160px] animate-float" style={{ animationDelay: '2s' }}>
                                <Target className="w-8 h-8 text-pink-400 mb-2" />
                                <div className="text-white text-sm font-semibold">Innovation</div>
                                <div className="text-white/60 text-xs">Future-Ready</div>
                            </div>

                            <div className="absolute -bottom-4 -right-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 max-w-[160px] animate-float" style={{ animationDelay: '0.5s' }}>
                                <Award className="w-8 h-8 text-cyan-400 mb-2" />
                                <div className="text-white text-sm font-semibold">Excellence</div>
                                <div className="text-white/60 text-xs">Quality Driven</div>
                            </div>

                            {/* Connection lines */}
                            <div className="absolute inset-16">
                                <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform -translate-y-1/2 -translate-x-1/2"></div>
                                <div className="absolute top-1/2 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent transform -translate-y-1/2 -translate-x-1/2 rotate-45"></div>
                                <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform -translate-y-1/2 -translate-x-1/2 -rotate-45"></div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-sm">
                            <Zap className="w-4 h-4" />
                            <span>About Our Mission</span>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            <span className="block text-white mb-2">Pioneering the</span>
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                Digital Revolution
                            </span>
                        </h2>

                        {/* Description */}
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Founded in the heart of innovation, KOmmunity is a next-generation tech startup dedicated to building impactful digital products and empowering learners across the galaxy of knowledge.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our mission transcends traditional boundaries - we are creating intelligent SaaS platforms, AI-powered tools, and immersive educational experiences that prepare individuals and businesses for the cosmic digital age.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:border-purple-400/30 transition-all duration-300"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="flex items-center justify-between pt-8 border-t border-white/10">
                            <div className="text-center px-4 group cursor-pointer">
                                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">50+</div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300">Courses</div>
                                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="text-center px-4 group cursor-pointer">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10+</div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300">Programs</div>
                                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="text-center px-4 group cursor-pointer">
                                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10K+</div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300">Lives Impacted</div>
                                <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(1deg); }
                    66% { transform: translateY(5px) rotate(-1deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default AboutSection;