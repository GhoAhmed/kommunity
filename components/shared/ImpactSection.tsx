'use client';


import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/lib/constants';

const ImpactSection = () => {

    return (
        <section className="py-24 relative bg-purple-700 text-white">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800 opacity-30 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Our Global Impact</h2>
                    <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                        For over two decades, we&apos;ve been making a difference in education, research,
                        and community development across the globe.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-purple-200">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-xl sm:mx-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Transforming Lives Through Education</h3>
                            <p className="text-purple-100 mb-6">
                                Our educational initiatives have reached students from more than 50 schools,
                                providing access to quality education and fostering intercultural understanding.
                            </p>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "85%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    className="h-full bg-white rounded-full"
                                ></motion.div>
                            </div>
                            <div className="flex justify-between mt-2 text-sm">
                                <span>Progress</span>
                                <span>85%</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Advancing Scientific Research</h3>
                            <p className="text-purple-100 mb-6">
                                Our research initiatives have led to breakthrough discoveries in agriculture, sustainable
                                energy, and AI, contributing to the technology advancement.
                            </p>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "72%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    className="h-full bg-white rounded-full"
                                ></motion.div>
                            </div>
                            <div className="flex justify-between mt-2 text-sm">
                                <span>Progress</span>
                                <span>72%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactSection;
