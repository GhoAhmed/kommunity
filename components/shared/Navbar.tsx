'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Sparkles, Zap } from 'lucide-react';
import { navItems } from '@/lib/constants';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="relative">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-purple-500/25 transition-transform duration-300 group-hover:scale-110">
                                    <span className="font-bold text-white text-lg">K</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                    KOmmunity
                                </h1>
                                <div className="text-xs text-gray-400 -mt-1">Building Connections</div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    className="relative group font-medium text-white/80 hover:text-white transition-all duration-300"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100"></div>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>

                                    {/* Floating particles on hover */}
                                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                                        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                    </div>
                                </a>
                            ))}

                            {/* CTA Button */}
                            <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="relative flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Join Now
                                </div>
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-white hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            <div className="relative z-10">
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </div>
                            {!mobileMenuOpen && (
                                <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <nav className="bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20 px-6 py-6">
                        <div className="space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 border border-white/10 hover:border-purple-500/30 text-white transition-all duration-300 transform hover:scale-[1.02]"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animation: mobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                                    }}
                                >
                                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="font-medium">{item.name}</span>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Zap className="w-4 h-4 text-cyan-400" />
                                    </div>
                                </a>
                            ))}

                            {/* Mobile CTA */}
                            <div className="pt-4 border-t border-white/10">
                                <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Join The KOmmunity
                                    </div>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
};
