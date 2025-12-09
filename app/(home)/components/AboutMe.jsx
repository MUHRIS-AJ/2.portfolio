"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';
import GlassCard from '@/components/GlassCard';

const AboutMe = () => {
    const { about } = config;

    if (!about) return null;

    return (
        <section className="py-20 relative z-10" id="about">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {/* Who Am I */}
                    <GlassCard className="p-8 space-y-4 border-warm-orange/20">
                        <h3 className="text-2xl font-bold text-warm-orange">{about.title}</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {about.description}
                        </p>
                    </GlassCard>

                    {/* How I Fit */}
                    <GlassCard className="p-8 space-y-4 border-warm-orange/20">
                        <h3 className="text-2xl font-bold text-warm-orange">{about.fit}</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {about.fitDescription}
                        </p>
                    </GlassCard>

                    {/* My Knowledge */}
                    <GlassCard className="p-8 space-y-4 border-warm-orange/20">
                        <h3 className="text-2xl font-bold text-warm-orange">{about.knowledge}</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {about.knowledgeDescription}
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
