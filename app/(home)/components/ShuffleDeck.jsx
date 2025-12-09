import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@/config';
import { HiAcademicCap } from 'react-icons/hi';
import SlitGallery from '@/components/SlitGallery';



const ShuffleDeck = () => {
    const { education, certifications } = config;
    // Show both School and Certs or just Education? User prompt implies both.
    // Let's combine them for a rich "Knowledge Database" gallery.
    const items = [...education, ...certifications];

    const renderEducationContent = (item) => (
        <div className="flex flex-col justify-center h-full gap-4 text-left">
            <div className="mb-2 p-3 bg-[#00FF9D]/10 rounded-full w-fit">
                <HiAcademicCap className="w-8 h-8 text-[#00FF9D]" />
            </div>
            <h3 className="text-2xl font-bold text-white">{item.institution}</h3>
            <p className="text-[#00C2FF] font-medium text-lg">{item.degree}</p>
            <p className="text-gray-400 font-mono">{item.period}</p>

            {item.description && (
                <p className="text-gray-300 text-sm mt-2 border-l-2 border-[#00FF9D]/30 pl-3">
                    {item.description}
                </p>
            )}

            {item.grade && (
                <div className="mt-4 px-4 py-1.5 border border-[#00FF9D] rounded-full text-[#00FF9D] text-sm font-bold w-fit bg-[#00FF9D]/5">
                    {item.grade}
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full max-w-4xl mx-auto">
            <SlitGallery
                items={items}
                renderItem={renderEducationContent}
            />
        </div>
    );
};

export default ShuffleDeck;
