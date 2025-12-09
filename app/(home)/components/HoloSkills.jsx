"use client";
import React, { useMemo } from 'react';
import { config } from '@/config';
import GlassCard from '@/components/GlassCard';
import SlitGallery from '@/components/SlitGallery';
import {
    SiPython, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMysql, SiGit, SiGithub, SiDocker,
    SiPandas, SiNumpy, SiJupyter, SiAmazon, SiMongodb,
    SiGreensock, SiFramer, SiThreedotjs, SiFigma, SiMui
} from 'react-icons/si';
import { HiChip, HiDatabase, HiCode, HiServer, HiCloud } from 'react-icons/hi';

const getIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('python')) return <SiPython />;
    if (n.includes('java') && !n.includes('script')) return <HiCode />;
    if (n.includes('javascript')) return <SiJavascript />;
    if (n.includes('react')) return <SiReact />;
    if (n.includes('next')) return <SiNextdotjs />;
    if (n.includes('tailwind')) return <SiTailwindcss />;
    if (n.includes('node')) return <SiNodedotjs />;
    if (n.includes('express')) return <SiExpress />;
    if (n.includes('sql') || n.includes('mysql')) return <SiMysql />;
    if (n.includes('data') || n.includes('pandas')) return <SiPandas />;
    if (n.includes('numpy')) return <SiNumpy />;
    if (n.includes('jupyter')) return <SiJupyter />;
    if (n.includes('git')) return <SiGit />;
    if (n.includes('docker')) return <SiDocker />;
    if (n.includes('aws')) return <SiAmazon />;
    if (n.includes('mongo')) return <SiMongodb />;
    if (n.includes('gsap')) return <SiGreensock />;
    if (n.includes('framer')) return <SiFramer />;
    if (n.includes('three')) return <SiThreedotjs />;
    if (n.includes('figma')) return <SiFigma />;
    if (n.includes('material')) return <SiMui />;

    // Fallbacks
    if (n.includes('db') || n.includes('data')) return <HiDatabase />;
    if (n.includes('cloud')) return <HiCloud />;
    if (n.includes('api')) return <HiServer />;
    return <HiChip />;
};

const HoloSkills = () => {
    const { skills } = config;

    // Flatten skills for the carousel
    const allSkills = useMemo(() => skills.reduce((acc, category) => {
        return [...acc, ...category.skills];
    }, []), [skills]);

    // Render expanded skill content
    const renderSkillContent = (skill) => (
        <div className="flex flex-col items-center justify-center h-full text-center gap-6">
            <div className="text-[#00C2FF] text-8xl drop-shadow-[0_0_15px_rgba(0,194,255,0.5)]">
                {getIcon(skill.name)}
            </div>

            <div>
                <h3 className="text-3xl font-bold text-white mb-2">{skill.name}</h3>
                <span className="text-[#00FF9D] font-mono tracking-widest uppercase border border-[#00FF9D]/30 px-4 py-1 rounded-full bg-[#00FF9D]/10">
                    {skill.level}
                </span>

                {skill.hot && (
                    <div className="mt-4 inline-block text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded animate-pulse">
                        HOT SKILL
                    </div>
                )}
            </div>
        </div>
    );

    const renderCollapsed = (skill) => (
        <div className="flex items-center gap-2">
            <span className="text-[#00FF9D]">{getIcon(skill.name)}</span>
            <span>{skill.name}</span>
        </div>
    );

    return (
        <div className="w-full max-w-6xl mx-auto h-[400px]">
            <SlitGallery
                items={allSkills}
                renderItem={renderSkillContent}
                renderCollapsed={renderCollapsed}
            />
        </div>
    );
};

export default HoloSkills;
