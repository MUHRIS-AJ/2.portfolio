"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiArrowRight, HiBadgeCheck, HiClock, HiCollection } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@/config';
import { titleAnimation } from './Animations';

const slides = [
    {
        title: "Data Analyst Intern",
        description: "Fresher currently enrolled in a 1-month data analyst internship, focusing on cleaning data, basic dashboards, and reporting.",
        icon: <HiBadgeCheck className="w-4 h-4" />
    },
    {
        title: "Learning in Public",
        description: "Building small projects as I learn — SQL queries, Python notebooks, and quick visualizations to grow core skills.",
        icon: <HiCollection className="w-4 h-4" />
    },
    {
        title: "Projects in Progress",
        description: "Collecting hands-on exercises and mini-projects to showcase growth instead of long professional history.",
        icon: <HiClock className="w-4 h-4" />
    }
];

const sliderVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const SectionTitle = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slide = useMemo(() => slides[slideIndex], [slideIndex]);

    useEffect(() => {
        const id = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % slides.length);
        }, 4500);
        return () => clearInterval(id);
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={titleAnimation}
            className="mb-16 space-y-6"
        >

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        Featured Work & Projects
                    </h2>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slideIndex}
                            variants={sliderVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="rounded-2xl border border-primary/15 bg-secondary/5 p-4 sm:p-5 shadow-sm"
                        >
                            <div className="flex items-center gap-2 text-primary font-semibold">
                                {slide.icon}
                                <span>{slide.title}</span>
                            </div>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
                                {slide.description}
                            </p>
                            <div className="flex gap-2 mt-3">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSlideIndex(idx)}
                                        className={`h-2 w-6 rounded-full transition-all duration-300 ${idx === slideIndex ? "bg-primary" : "bg-primary/20"}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex items-center">
                    <Button
                        variant="expandIcon"
                        Icon={HiArrowRight}
                        iconPlacement="right"
                        className="w-full md:w-auto rounded-2xl px-4 sm:px-5 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 shadow-lg shadow-primary/5 hover:shadow-primary/10"
                        asChild
                    >
                        <a
                            href={`https://github.com/${config.social.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium"
                        >
                            View Github
                        </a>
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-6 pt-2 overflow-x-auto pb-2 scrollbar-hide">
                <div className="space-y-1 flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-primary">Fresher</span>
                    <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                        Data Analyst Intern (1 month)
                    </p>
                </div>
                <div className="w-px h-8 sm:h-10 bg-primary/10 flex-shrink-0" />
                <div className="space-y-1 flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-primary">Hands-on</span>
                    <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                        Mini projects & learning logs
                    </p>
                </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5" />
        </motion.div>
    );
};

export default SectionTitle;
