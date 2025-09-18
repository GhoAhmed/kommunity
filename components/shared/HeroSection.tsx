import { ArrowRight, Badge } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const heroImage = '/images/hero-bg.jpg';

const HeroSection = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1)), url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-background/80"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-slide-up">
                        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                            ✨ Welcome to the Future of Web Development
                        </Badge>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
                            <span className="bg-gradient-primary bg-clip-text text-transparent">
                                TechFlow
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                            Crafting exceptional digital experiences with cutting-edge technology and innovative design
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold text-lg hover-lift glow-effect flex items-center"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="/projects"
                                className="px-8 py-4 border border-primary/50 text-foreground rounded-xl font-semibold text-lg hover:bg-primary/10 transition-all duration-300 flex items-center"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 animate-float">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full opacity-20"></div>
                    </div>
                    <div className="absolute bottom-32 right-10 animate-float" style={{ animationDelay: '2s' }}>
                        <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-30"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection