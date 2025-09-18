'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send, Zap, Globe, MessageSquare } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        // Communication signals particles
        const signals: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; pulse: number; }[] = [];
        for (let i = 0; i < 80; i++) {
            signals.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 1.2,
                speedY: (Math.random() - 0.5) * 1.2,
                opacity: Math.random() * 0.8 + 0.2,
                color: Math.random() > 0.6 ? '#8b5cf6' : Math.random() > 0.3 ? '#06b6d4' : '#10b981',
                pulse: Math.random() * 0.03 + 0.01
            });
        }

        let frame = 0;
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            signals.forEach(signal => {
                ctx.save();
                signal.opacity += Math.sin(frame * signal.pulse) * 0.02;
                ctx.globalAlpha = Math.max(0.1, Math.min(0.9, signal.opacity));
                ctx.fillStyle = signal.color;
                ctx.beginPath();
                ctx.arc(signal.x, signal.y, signal.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                signal.x += signal.speedX;
                signal.y += signal.speedY;

                if (signal.x < 0 || signal.x > canvas.width) signal.speedX *= -1;
                if (signal.y < 0 || signal.y > canvas.height) signal.speedY *= -1;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert('Message sent successfully! 🚀');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'KOmmunity0@gmail.com',
            link: 'mailto:KOmmunity0@gmail.com',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+216-29492766',
            link: 'tel:+21629492766',
            gradient: 'from-cyan-500 to-blue-500'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Education City, Tunisia',
            link: '#',
            gradient: 'from-green-500 to-teal-500'
        }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: <FaFacebookF size={20} />, href: '#' },
        { name: 'Twitter', icon: <FaTwitter size={20} />, href: '#' },
        { name: 'Instagram', icon: <FaInstagram size={20} />, href: '#' },
        { name: 'LinkedIn', icon: <FaLinkedinIn size={20} />, href: '#' },
    ];

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
                {/* Communication satellites */}
                <div className="absolute top-32 right-32 w-24 h-24 border-2 border-purple-400/30 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
                <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full animate-pulse"></div>

                {/* Signal waves */}
                <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-purple-500/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-36 h-36 border border-cyan-500/10 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

                {/* Network grid */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.2) 2px, transparent 2px)
                        `,
                        backgroundSize: '50px 50px, 50px 50px, 25px 25px'
                    }}></div>
                </div>
            </div>

            {/* Orbital communication rings */}
            <div className="absolute top-1/4 right-1/5 w-80 h-80 border border-purple-500/15 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>
            <div className="absolute bottom-1/4 left-1/6 w-64 h-64 border border-green-500/15 rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-20">
                {/* Header */}
                <div className="text-center mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-sm mb-6">
                        <MessageSquare className="w-4 h-4" />
                        <span>Galactic Communication Hub</span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="block text-white mb-2">Connect Across</span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            The Digital Universe
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Ready to embark on your cosmic journey? Reach out to our mission control team and
                        let&apos;s launch your next big idea into the stratosphere of success.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Contact Info Cards */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Globe className="w-6 h-6 text-cyan-400" />
                                Mission Control
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-purple-300 mb-1">{item.title}</h4>
                                                <a
                                                    href={item.link}
                                                    className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg"
                                                >
                                                    {item.value}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <Zap className="w-5 h-5 text-yellow-400" />
                                Join Our Constellation
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                                    >
                                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{social.icon}</span>
                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Send className="w-6 h-6 text-purple-400" />
                                Transmit Your Message
                            </h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-purple-300 mb-2">
                                            Commander Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Captain Space Explorer"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-purple-300 mb-2">
                                            Cosmic Coordinates
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="explorer@galaxy.space"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-purple-300 mb-2">
                                        Mission Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Ready for launch? Let's explore the possibilities..."
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400/50 focus:bg-white/10 transition-all duration-300 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-purple-300 mb-2">
                                        Transmission Details
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Share your cosmic vision, questions, or collaboration ideas. We're listening across all frequencies..."
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-pink-400/50 focus:bg-white/10 transition-all duration-300 focus:outline-none resize-none"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        <div className="relative flex items-center gap-3">
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    <span>Transmitting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Launch Message</span>
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;