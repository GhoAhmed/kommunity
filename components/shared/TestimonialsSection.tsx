'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Heart, MessageCircle } from 'lucide-react';
import { testimonials } from '@/lib/constants';
import Image from 'next/image';

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

        // Floating testimonial particles
        const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; pulse: number; }[] = [];
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.8,
                speedY: (Math.random() - 0.5) * 0.8,
                opacity: Math.random() * 0.6 + 0.2,
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
                ctx.globalAlpha = Math.max(0.1, Math.min(0.7, particle.opacity));
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

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const next = () => {
        setCurrent((current + 1) % testimonials.length);
        setIsAutoPlay(false);
    };

    const prev = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlay(false);
    };

    const goTo = (index: number) => {
        setCurrent(index);
        setIsAutoPlay(false);
    };

    return (
        <section className="relative min-h-screen py-24 bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900 overflow-hidden">
            {/* Animated Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ width: '100%', height: '100%' }}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 z-10">
                {/* Quote constellation */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-16 w-24 h-24 border-2 border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-bounce"></div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-3">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
            </div>

            {/* Orbital rings */}
            <div className="absolute top-1/4 right-1/5 w-72 h-72 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '50s' }}></div>
            <div className="absolute bottom-1/4 left-1/6 w-56 h-56 border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-sm mb-6">
                        <MessageCircle className="w-4 h-4" />
                        <span>Community Voices</span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="block text-white mb-2">What Our</span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Space Pioneers Say
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Discover how our galactic community of learners, creators, and innovators
                        are reshaping their futures across the digital cosmos.
                    </p>
                </div>

                {/* Testimonial Container */}
                <div className="max-w-6xl mx-auto relative">
                    {/* Large Quote Icon */}
                    <div className="absolute -top-8 -left-8 z-10">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                            <Quote className="w-10 h-10 text-purple-400" />
                        </div>
                    </div>

                    {/* Main Testimonial Card */}
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 hover:border-purple-400/30 transition-all duration-500 relative overflow-hidden">
                        {/* Background gradient based on current testimonial */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[current].gradient} opacity-5 transition-all duration-1000`}></div>

                        <div className="relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                {/* Profile Section */}
                                <div className="text-center lg:text-left">
                                    {/* Profile Image */}
                                    <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[current].gradient} rounded-full animate-pulse`}></div>
                                        <Image
                                            src={testimonials[current].image}
                                            alt={testimonials[current].author}
                                            width={128}
                                            height={128}
                                            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20"
                                        />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                                            <Heart className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex justify-center lg:justify-start gap-1 mb-4">
                                        {[...Array(testimonials[current].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    {/* Author Info */}
                                    <h4 className="text-2xl font-bold text-white mb-2">
                                        {testimonials[current].author}
                                    </h4>
                                    <p className="text-purple-300 font-semibold mb-1">
                                        {testimonials[current].title}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {testimonials[current].company}
                                    </p>
                                </div>

                                {/* Testimonial Content */}
                                <div className="lg:col-span-2 space-y-6">
                                    <blockquote className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light italic">
                                        &quot;{testimonials[current].content}&quot;
                                    </blockquote>

                                    {/* Decorative elements */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className={`w-16 h-1 bg-gradient-to-r ${testimonials[current].gradient} rounded-full`}></div>
                                        <div className="text-gray-400 text-sm">
                                            Verified Community Member
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center mt-12 gap-6">
                        {/* Previous Button */}
                        <button
                            onClick={prev}
                            className="group w-14 h-14 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goTo(index)}
                                    className={`transition-all duration-300 rounded-full ${index === current
                                        ? `w-12 h-3 bg-gradient-to-r ${testimonials[current].gradient}`
                                        : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                                        }`}
                                ></button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={next}
                            className="group w-14 h-14 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;