'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        content: "The Qatar Foundation has transformed my academic journey. The resources, mentorship, and global exposure I received were invaluable for my career and personal growth.",
        author: "Sarah Al-Thani",
        title: "PhD Graduate, Georgetown University in Qatar",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
    },
    {
        id: 2,
        content: "As a researcher, the foundation provided me with world-class facilities and funding to pursue groundbreaking research in sustainable energy. Their commitment to innovation is remarkable.",
        author: "Dr. James Wilson",
        title: "Lead Researcher, Energy Innovation Program",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
    },
    {
        id: 3,
        content: "The entrepreneurship program gave me the skills, connections, and confidence to launch my tech startup. Their holistic approach to innovation and business development is exceptional.",
        author: "Fatima Ahmed",
        title: "Founder & CEO, EcoTech Solutions",
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
    },
];

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
                                        @quote{testimonials[current].content}@quote
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