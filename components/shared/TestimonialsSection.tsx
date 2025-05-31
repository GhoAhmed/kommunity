'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/constants';

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((current + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mx-auto">What People Say</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Hear from our community members about their experiences and the impact
                        our programs have had on their lives and careers.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Large quote icon */}
                    <div className="absolute -top-10 left-0 text-purple-200 dark:text-purple-900/30">
                        <Quote size={80} />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg relative z-10"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-purple-100 dark:border-purple-900/50">
                                    <Image
                                        width={128}
                                        height={128}
                                        src={testimonials[current].image}
                                        alt={testimonials[current].author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                                        &quot;{testimonials[current].content}&quot;
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {testimonials[current].author}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {testimonials[current].title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <div className="flex justify-center mt-8 gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                                        ? 'w-8 bg-purple-600 dark:bg-purple-400'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                ></button>
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;