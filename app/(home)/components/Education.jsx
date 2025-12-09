"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBadgeCheck, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const EducationSection = () => {
    const education = config.education || [];

    if (!education || education.length === 0) {
        return null;
    }

    return (
        <section className="py-24 relative" id="education">
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
                            <HiAcademicCap className="w-5 h-5 text-purple-300" />
                            <span className="text-sm font-medium text-purple-300">
                                Educational Journey
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Education & Learning
                            </h2>
                            <p className="text-lg text-purple-200/70">
                                My academic journey and continuous learning path
                            </p>
                        </motion.div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={containerAnimation}
                            className="space-y-8"
                        >
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className="relative"
                                >
                                    <div className="flex gap-6">
                                        {/* Timeline icon */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-xl neumorphic flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-purple-500/60 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                                <HiAcademicCap className="w-6 h-6 text-purple-300" />
                                            </div>
                                            {index !== education.length - 1 && (
                                                <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/30 to-transparent mt-4" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-8">
                                            <div className="neumorphic rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/60 transition-all duration-300 group relative overflow-hidden">
                                                {/* Shiny overlay effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent shiny-sweep" />
                                                </div>
                                                
                                                <div className="relative z-10">
                                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-white mb-1">
                                                                {edu.degree}
                                                            </h3>
                                                            <p className="text-purple-300/80 font-medium">
                                                                {edu.institution}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-purple-200/70">
                                                            <HiCalendar className="w-4 h-4" />
                                                            <span>{edu.period}</span>
                                                        </div>
                                                    </div>

                                                    {edu.location && (
                                                        <div className="flex items-center gap-2 text-sm text-purple-200/60 mb-4">
                                                            <HiLocationMarker className="w-4 h-4" />
                                                            <span>{edu.location}</span>
                                                        </div>
                                                    )}

                                                    {edu.description && (
                                                        <p className="text-sm text-purple-200/70 leading-relaxed mb-4">
                                                            {edu.description}
                                                        </p>
                                                    )}

                                                    {edu.grade && (
                                                        <div className="flex items-center gap-2 text-sm text-purple-300 mb-4">
                                                            <HiBadgeCheck className="w-4 h-4" />
                                                            <span className="font-medium">{edu.grade}</span>
                                                        </div>
                                                    )}

                                                    {edu.achievements && edu.achievements.length > 0 && (
                                                        <ul className="space-y-2 mb-4">
                                                            {edu.achievements.map((achievement, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-purple-200/70">
                                                                    <span className="text-purple-400 mt-1.5">▸</span>
                                                                    <span>{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {edu.skills && edu.skills.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-purple-500/20">
                                                            {edu.skills.map((skill, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
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

export default EducationSection;

