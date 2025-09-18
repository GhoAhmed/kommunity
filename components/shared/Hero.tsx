'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Users, BookOpen, Target } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Stars array
        const stars: { x: number; y: number; size: number; speed: number; opacity: number; }[] = [];
        for (let i = 0; i < 150; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.8 + 0.2
            });
        }

        // Particles for interactive effect
        type Particle = {
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
            opacity: number;
            color: string;
        };
        const particles: Particle[] = [];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach(star => {
                ctx.save();
                ctx.globalAlpha = star.opacity;
                ctx.fillStyle = '#8b5cf6';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = -10;
                    star.x = Math.random() * canvas.width;
                }
            });

            // Draw particles around mouse
            particles.forEach((particle, index) => {
                ctx.save();
                ctx.globalAlpha = particle.opacity;
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.opacity -= 0.01;
                particle.size *= 0.99;

                if (particle.opacity <= 0) {
                    particles.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Add particles on mouse move
            if (Math.random() > 0.8) {
                particles.push({
                    x: e.clientX + (Math.random() - 0.5) * 20,
                    y: e.clientY + (Math.random() - 0.5) * 20,
                    size: Math.random() * 3 + 1,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    opacity: 0.7,
                    color: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4'
                });
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
            />

            {/* Geometric Background Elements */}
            <div className="absolute inset-0 z-10">
                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/30 rotate-45 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-cyan-400/40 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-1/3 right-10 w-8 h-32 bg-gradient-to-b from-purple-500/30 to-transparent rotate-12 animate-pulse"></div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Main Content */}
            <div className="container mx-auto px-6 lg:px-20 py-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>New Community Features</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl lg:text-7xl font-bold leading-none">
                            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                                KOmmunity
                            </span>
                            <span className="block text-white mt-2">
                                Building <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Stellar</span> Connections
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            KOmmunity is where people, ideas, and opportunities come together.
                            Join us to collaborate, share knowledge, and make an impact in your community.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="relative flex items-center gap-2">
                                    Join The KOmmunity
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                            <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-200 font-semibold rounded-xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 hover:border-purple-400">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="relative">
                        {/* Central Hub */}
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Central circle */}
                            <div className="absolute inset-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full shadow-2xl shadow-purple-500/50 flex items-center justify-center">
                                <div className="w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                                    <Users className="w-16 h-16 text-white" />
                                </div>
                            </div>

                            {/* Orbiting elements */}
                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center">
                                    <ArrowRight className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Connection lines */}
                            <div className="absolute inset-0">
                                <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform -translate-y-1/2 -translate-x-1/2"></div>
                                <div className="absolute top-1/2 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -left-4 bottom-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-[200px] animate-float">
                            <div className="text-cyan-400 font-bold text-4xl mb-2">10K+</div>
                            <div className="text-white/80 text-sm">Active Members</div>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-3"></div>
                        </div>

                        <div className="absolute -right-4 top-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-[200px] animate-float" style={{ animationDelay: '1s' }}>
                            <div className="text-purple-400 font-bold text-4xl mb-2">500+</div>
                            <div className="text-white/80 text-sm">Projects Launched</div>
                            <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
                <span className="text-white/60 text-sm mb-3">Discover More</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full animate-bounce"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Hero;