"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useView } from '@/components/Providers/ViewProvider';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Header = () => {
    // const { activeTab, setActiveTab } = useView(); // No longer using ViewProvider for tabs
    const [activeSection, setActiveSection] = React.useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Manual offset calculation for sticky header if needed, but centering is requested
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'courses', 'projects', 'skills', 'experience', 'education', 'contact'];
            // Find the section closest to the top of the viewport
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section top is within reasonable view range (e.g. top third)
                    if (rect.top <= 300 && rect.bottom >= 300) {
                        current = section;
                        break; // Found the top-most active
                    }
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const tabs = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <motion.header
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <div className="pointer-events-auto bg-[#020C1B]/80 backdrop-blur-xl border border-warm-orange/50 rounded-full p-2 flex items-center gap-1 shadow-[0_0_20px_rgba(0,255,157,0.4)] overflow-x-auto max-w-[90vw] custom-scrollbar">
                {tabs.map((tab) => {
                    const isActive = activeSection === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => scrollToSection(tab.id)}
                            className={cn(
                                "relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap",
                                isActive ? "text-[#020C1B]" : "text-warm-orange hover:text-white"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-warm-orange rounded-full shadow-[0_0_10px_#00FF9D]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    );
                })}
            </div>
        </motion.header>
    );
};

export default Header;