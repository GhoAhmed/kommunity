'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Rocket, Brain, Code, Users, Star, Globe } from 'lucide-react';
import Image from 'next/image';

const ServicesSection = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            id: 1,
            title: "AI-Powered SaaS",
            description: "Revolutionary software solutions powered by cutting-edge artificial intelligence to automate and optimize your business processes.",
            icon: Brain,
            color: "from-purple-500 to-pink-500",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            link: "/services/ai-saas"
        },
        {
            id: 2,
            title: "Smart Learning",
            description: "Interactive educational platforms with personalized learning paths, real-time progress tracking, and immersive experiences.",
            icon: Rocket,
            color: "from-cyan-500 to-blue-500",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            link: "/services/learning"
        },
        {
            id: 3,
            title: "Developer Tools",
            description: "Advanced development frameworks, APIs, and tools designed to accelerate your coding journey and boost productivity.",
            icon: Code,
            color: "from-green-500 to-teal-500",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            link: "/services/dev-tools"
        },
        {
            id: 4,
            title: "Community Hub",
            description: "Connect with like-minded innovators, collaborate on projects, and build the future together in our thriving ecosystem.",
            icon: Users,
            color: "from-orange-500 to-red-500",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            link: "/services/community"
        }
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

        // Constellation effect
        const stars: { x: number; y: number; size: number; opacity: number; twinkle: number; }[] = [];
        for (let i = 0; i < 80; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.6 + 0.2,
                twinkle: Math.random() * 0.02 + 0.005
            });
        }

        let frame = 0;
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            stars.forEach(star => {
                ctx.save();
                star.opacity += Math.sin(frame * star.twinkle) * 0.01;
                ctx.globalAlpha = Math.max(0.1, Math.min(0.8, star.opacity));
                ctx.fillStyle = '#8b5cf6';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <section className="relative min-h-screen py-24 bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900 overflow-hidden">
            {/* Animated Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ width: '100%', height: '100%' }}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 z-10">
                {/* Floating geometric shapes */}
                <div className="absolute top-32 left-20 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-64 right-32 w-16 h-16 border border-purple-500/40 rotate-45 animate-spin" style={{ animationDuration: '12s' }}></div>
                <div className="absolute bottom-48 left-40 w-12 h-32 bg-gradient-to-t from-purple-500/20 to-transparent rotate-12"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.4) 1px, transparent 0)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>
            </div>

            {/* Orbital rings */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
            <div className="absolute bottom-1/4 left-1/5 w-64 h-64 border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-20">
                {/* Header */}
                <div className="text-center mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-sm mb-6">
                        <Star className="w-4 h-4" />
                        <span>Our Services</span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="block text-white mb-2">Explore Our</span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Digital Universe
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Journey through our constellation of services—from AI-powered SaaS platforms to immersive learning experiences,
                        each designed to propel you into the future of technology.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative h-full cursor-pointer"
                                onMouseEnter={() => setHoveredCard(service.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Card */}
                                <div className="relative h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>

                                        {/* Floating Icon */}
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                Explore Service
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                                            <span className="text-sm font-medium">Learn More</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.3) 50%, transparent 70%)', backgroundSize: '200% 200%', animation: hoveredCard === service.id ? 'borderFlow 2s linear infinite' : 'none' }}></div>
                                </div>

                                {/* Floating particles */}
                                {hoveredCard === service.id && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                                        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30">
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center gap-3">
                            <Globe className="w-5 h-5" />
                            <span>Explore All Services</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </button>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-sm mt-4">
                        Join thousands of innovators already using our platforms
                    </p>
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
                
                @keyframes borderFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
};

export default ServicesSection;