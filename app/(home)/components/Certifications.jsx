"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBadgeCheck, HiCalendar } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const CertificationsSection = () => {
    const certifications = config.certifications || [];

    if (!certifications || certifications.length === 0) {
        return null;
    }

    return (
        <section className="py-24 relative" id="certifications">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-purple-500/10 border-[1.8px] border-purple-500/30 px-4 py-2 rounded-full text-purple-300 backdrop-blur-sm shadow-lg shadow-purple-500/20"
                        >
                            <HiBadgeCheck className="w-5 h-5 text-purple-300" />
                            <span className="text-sm font-medium text-purple-300">
                                Certifications & Achievements
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Professional Certifications
                            </h2>
                            <p className="text-lg text-purple-200/70">
                                Validated expertise in data science, programming, and technology
                            </p>
                        </motion.div>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            variants={containerAnimation}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className="group"
                                >
                                    <div className="neumorphic rounded-2xl p-6 h-full backdrop-blur-md hover:border-purple-500/60 transition-all duration-300 relative overflow-hidden">
                                        {/* Shiny overlay effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent shiny-sweep" />
                                        </div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                                                    <HiBadgeCheck className="w-6 h-6 text-purple-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-white mb-1">
                                                        {cert.title}
                                                    </h3>
                                                    <p className="text-purple-300/80 text-sm font-medium">
                                                        {cert.issuer}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-purple-200/70 mb-4">
                                                <HiCalendar className="w-4 h-4" />
                                                <span>Issued {cert.issuedDate}</span>
                                            </div>

                                            {cert.credentialId && (
                                                <p className="text-xs text-purple-300/60 mb-4 font-mono">
                                                    ID: {cert.credentialId}
                                                </p>
                                            )}

                                            {cert.skills && cert.skills.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {cert.skills.slice(0, 4).map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                    {cert.skills.length > 4 && (
                                                        <span className="text-xs text-purple-300/50">
                                                            +{cert.skills.length - 4} more
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CertificationsSection;

