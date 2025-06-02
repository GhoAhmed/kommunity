'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-300/30 dark:bg-purple-800/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
            </div>

            {/* Content container */}
            <div className="container mx-auto px-20 py-24 md:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-10 md:leading-14">
                            <span className="block gradient-text">KwikTek</span> Smart Tech & Stronger Business
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            From custom software to cutting-edge AI, KWIKTEK delivers fast, scalable solutions that drive real impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href={"/services"}>
                                <Button size="lg" className="btn-primary">
                                    Discover Our Services
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href={"/about"}>
                                <Button size="lg" variant="outline">
                                    Learn About Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Hero image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent pointer-events-none z-10"></div>
                            <Image
                                width={800}
                                height={600}
                                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                                alt="Education and innovation"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating stats cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -left-8 bottom-16 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-[180px]"
                        >
                            <div className="text-purple-600 dark:text-purple-400 font-bold text-3xl">10+</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Years of Excellence</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute right-8 -bottom-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-[180px]"
                        >
                            <div className="text-purple-600 dark:text-purple-400 font-bold text-3xl">50+</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Online Courses</div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-1 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-2 bg-purple-600 rounded-full"
                        ></motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
