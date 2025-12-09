"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import useSWR from 'swr';
import GlassCard from '@/components/GlassCard';
import SlitGallery from '@/components/SlitGallery';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProjectGrid = () => {
    const { data: projects } = useSWR('/api/github/repos?sort=updated&per_page=100', fetcher);

    if (!projects) return <div className="text-[#00FF9D] animate-pulse text-center">Loading Projects...</div>

    // Helper to get random tech image
    const getProjectImage = (id) => {
        const images = [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Tech Abstract
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Circuit Board
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", // Abstract 3D
            "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1862&auto=format&fit=crop", // Digital Waves
            "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop", // Neon City
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"  // Code Screen
        ];
        return images[id % images.length];
    };

    const projectsWithImages = projects.map((p, i) => ({
        ...p,
        image: getProjectImage(p.id || i)
    }));

    // Render expanded project card content
    const renderProjectCard = (project) => (
        <div className="flex flex-col h-full relative z-10">
            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FF9D] opacity-80" />
            <div className="absolute active top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FF9D] opacity-80" />

            <div className="flex justify-between items-start mb-6">
                <h3 className="text-white font-bold text-2xl truncate flex items-center gap-3 text-[#00FF9D]">
                    <HiChip className="w-8 h-8" />
                    {project.name}
                </h3>
            </div>

            <p className="text-gray-300 text-base mb-6 flex-grow leading-relaxed font-light">
                {project.description || "No description available."}
            </p>

            <div className="flex justify-between items-center mt-auto pt-6 border-t border-[#00FF9D]/20">
                <span className="text-sm text-[#00C2FF] font-medium flex items-center gap-2 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse" />
                    {project.language || "Unknown"}
                </span>

                <a
                    href={project.html_url}
                    target="_blank"
                    className="px-6 py-2 rounded-full bg-[#00FF9D]/10 hover:bg-[#00FF9D]/20 text-[#00FF9D] transition-all border border-[#00FF9D]/30 font-bold flex items-center gap-2"
                >
                    <FaGithub className="w-5 h-5" /> View Code
                </a>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-7xl mx-auto">
            <SlitGallery
                items={projectsWithImages}
                renderItem={renderProjectCard}
            />
        </div>
    );
};

export default ProjectGrid;
