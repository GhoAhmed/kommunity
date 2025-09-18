'use client';

import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, Mail, Rocket, Star, Globe, Zap } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
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

        // Nebula effect particles
        const nebula: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; pulse: number; }[] = [];
        for (let i = 0; i < 120; i++) {
            nebula.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.6 + 0.1,
                color: Math.random() > 0.6 ? '#8b5cf6' : Math.random() > 0.3 ? '#06b6d4' : '#ec4899',
                pulse: Math.random() * 0.02 + 0.008
            });
        }

        let frame = 0;
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            nebula.forEach(particle => {
                ctx.save();
                particle.opacity += Math.sin(frame * particle.pulse) * 0.01;
                ctx.globalAlpha = Math.max(0.05, Math.min(0.7, particle.opacity));
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

    const quickLinks = [
        { name: 'About Mission', href: '/about' },
        { name: 'Space Programs', href: '/services' },
        { name: 'Research Labs', href: '/projects' },
        { name: 'Cosmic Events', href: '/events' },
        { name: 'Contact Hub', href: '/contact' }
    ];

    const educationLinks = [
        { name: 'Stellar Education', href: '/courses' },
        { name: 'Orbital Courses', href: '/courses' },
        { name: 'Quantum Skills', href: '/courses' },
        { name: 'Digital Learning', href: '/courses' },
        { name: 'Future Development', href: '/courses' }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: <FaFacebookF size={20} />, href: '#' },
        { name: 'Twitter', icon: <FaTwitter size={20} />, href: '#' },
        { name: 'Instagram', icon: <FaInstagram size={20} />, href: '#' },
        { name: 'LinkedIn', icon: <FaLinkedinIn size={20} />, href: '#' },
    ];

    const contactInfo = [
        {
            icon: MapPin,
            text: 'KOmmunity Headquarters\nEducation City, Tunisia',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: Clock,
            text: 'Mission Hours: 24/7\nSupport: Mon-Fri 8AM-5PM',
            gradient: 'from-cyan-500 to-blue-500'
        },
        {
            icon: Phone,
            text: '+216 33 492 766',
            gradient: 'from-green-500 to-teal-500'
        },
        {
            icon: Mail,
            text: 'KOmmunity0@gmail.com',
            gradient: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
            {/* Animated Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ width: '100%', height: '100%' }}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 z-10">
                {/* Cosmic elements */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-32 w-24 h-24 border-2 border-cyan-400/15 rotate-45 animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full animate-bounce"></div>

                {/* Galaxy grid */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                            radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 lg:px-20 py-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="relative">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-500/25 transition-transform duration-300 group-hover:scale-110">
                                    <span className="font-bold text-white text-lg">K</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                    KOmmunity
                                </h1>
                                <div className="text-xs text-gray-400 -mt-1">Space Innovation Hub</div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed">
                            Pioneering the future of digital innovation through AI-powered platforms,
                            immersive learning experiences, and cosmic-scale community connections.
                        </p>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-white font-semibold flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400" />
                                Join Our Galaxy
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="group w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 transition-all duration-300"
                                    >
                                        <span className="text-xl group-hover:scale-125 transition-transform duration-300">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white text-lg font-bold flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-purple-400" />
                            Navigation Hub
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        <div className="w-1 h-1 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-2 transition-all duration-300"></div>
                                        {link.name}
                                        <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Education Links */}
                    <div className="space-y-6">
                        <h4 className="text-white text-lg font-bold flex items-center gap-2">
                            <Globe className="w-5 h-5 text-cyan-400" />
                            Learning Universe
                        </h4>
                        <ul className="space-y-3">
                            {educationLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-2 transition-all duration-300"></div>
                                        {link.name}
                                        <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white text-lg font-bold flex items-center gap-2">
                            <Mail className="w-5 h-5 text-green-400" />
                            Mission Control
                        </h4>
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="group flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line group-hover:text-white transition-colors duration-300">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 mt-16 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm flex items-center gap-2">
                            <Star className="w-4 h-4 text-purple-400" />
                            <span>&copy; {new Date().getFullYear()} KOmmunity. Connecting across the digital cosmos.</span>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm">
                            <a href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1">
                                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
                                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                                Terms of Use
                            </a>
                            <a href="/accessibility" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-1">
                                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                Accessibility
                            </a>
                        </div>
                    </div>

                    {/* Launch Message */}
                    <div className="text-center mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-white/10">
                        <p className="text-gray-300 text-sm">
                            🚀 Ready to launch your cosmic journey?
                            <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold">
                                {" "}The universe of possibilities awaits!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;