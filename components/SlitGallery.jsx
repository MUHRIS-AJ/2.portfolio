"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const SlitGallery = ({ items, renderItem, renderCollapsed }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row w-full h-[500px] md:h-[400px] gap-2 overflow-hidden px-4 md:px-0">
            {items.map((item, index) => {
                const isExpanded = index === expandedIndex;
                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setExpandedIndex(index)}
                        className={cn(
                            "relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out border border-[#00FF9D]/30 bg-black/60 backdrop-blur-md",
                            isExpanded ? "flex-[5] opacity-100" : "flex-[1] opacity-70 hover:opacity-100 hover:bg-[#00FF9D]/10"
                        )}
                        initial={false}
                    >
                        {/* Slit Visual: Vertical line or narrow content when collapsed */}
                        {!isExpanded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="md:rotate-[-90deg] whitespace-nowrap text-[#00FF9D] font-bold text-lg tracking-widest uppercase flex items-center gap-2 drop-shadow-md">
                                    {renderCollapsed ? renderCollapsed(item) : (item.title || item.name || item.institution)}
                                </div>
                            </div>
                        )}

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 w-full h-full p-6 overflow-y-auto custom-scrollbar"
                                >
                                    {/* Content Container */}
                                    <div className="relative z-10 w-full h-full flex flex-col">
                                        {renderItem(item)}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* HUD Scanline */}
                        <div className={cn(
                            "absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#00FF9D]/5 to-transparent bg-[length:100%_4px]",
                            isExpanded ? "opacity-10" : "opacity-0"
                        )} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default SlitGallery;
