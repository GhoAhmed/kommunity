'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { features } from '@/lib/constants';

const AboutSection = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="px-20 py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Image side */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300 dark:bg-purple-800/30 rounded-lg -z-10"></div>
                        <Image
                            width={600}
                            height={400}
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                            alt="Our Mission"
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                        />
                    </motion.div>

                    {/* Text content */}
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">About Our Foundation</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Founded in the heart of innovation, KOmmunity is a next-generation tech startup dedicated to building impactful digital products and empowering learners worldwide. Our mission is to drive growth through intelligent SaaS platforms, AI-powered tools, and accessible educational content that equips individuals and businesses for the digital age.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            With a strong focus on software development, real-world learning, and future-ready solutions, KOmmunity bridges the gap between technology and education. Whether it&apos;s through interactive courses, practical tutorials, or smart automation tools, we&apos;re shaping a smarter, more connected future.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle className="text-purple-600 dark:text-purple-400 h-5 w-5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-6">
                            <div className="text-center px-4">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                                <div className="text-sm text-gray-500">Online Courses</div>
                            </div>
                            <div className="text-center px-4">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                                <div className="text-sm text-gray-500">Active Programs</div>
                            </div>
                            <div className="text-center px-4">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1k+</div>
                                <div className="text-sm text-gray-500">Lives Impacted</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;