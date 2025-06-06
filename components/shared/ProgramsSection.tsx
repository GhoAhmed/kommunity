'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { programs } from '@/lib/constants';

const ProgramsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mx-auto">Our Programs</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Explore our diverse range of programs and initiatives designed to foster education,
                        research, community development, and innovation across multiple sectors.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {programs.map((program) => (
                        <motion.div key={program.id} variants={itemVariants} className="h-full">
                            <Card className="h-full overflow-hidden card-hover">
                                <div className="h-48 overflow-hidden">
                                    <Image
                                        width={400}
                                        height={300}
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-700 dark:text-purple-400">
                                        {program.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                                        {program.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <Button
                                        variant="ghost"
                                        className="text-purple-600 dark:text-purple-400 p-0 hover:bg-transparent hover:text-purple-800 dark:hover:text-purple-300"
                                    >
                                        Learn more
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <Button size="lg" className="btn-primary">
                        View All Programs
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramsSection;