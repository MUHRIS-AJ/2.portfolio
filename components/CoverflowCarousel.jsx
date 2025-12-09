"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CoverflowCarousel = ({ items = [], renderItem, autoPlay = true, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!autoPlay || isHovered || !items || items.length === 0) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items?.length, autoPlay, isHovered, currentIndex, interval]);

    // Render logic to show current, prev, next in a 3D cycle
    // We only render 3 items for performance and visual clarity in this style
    const getVisibleItems = () => {
        if (!items || items.length === 0) return [];
        if (items.length === 1) return [{ ...items[0], position: 'center', originalIndex: 0 }];

        const total = items.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        // Handle 2 items case specially or just double up (simplest is to let it render duplicates or just 2)
        if (total === 2) {
            return [
                { ...items[prevIndex], position: 'left', originalIndex: prevIndex },
                { ...items[currentIndex], position: 'center', originalIndex: currentIndex },
                { ...items[nextIndex], position: 'right', originalIndex: nextIndex } // Next is same as prev
            ];
        }

        return [
            { ...items[prevIndex], position: 'left', originalIndex: prevIndex },
            { ...items[currentIndex], position: 'center', originalIndex: currentIndex },
            { ...items[nextIndex], position: 'right', originalIndex: nextIndex }
        ];
    };

    const variants = {
        left: {
            x: -250,
            scale: 0.8,
            rotateY: 45,
            zIndex: 10,
            opacity: 0.6,
            filter: 'blur(2px)'
        },
        center: {
            x: 0,
            scale: 1.1,
            rotateY: 0,
            zIndex: 20,
            opacity: 1,
            filter: 'blur(0px)'
        },
        right: {
            x: 250,
            scale: 0.8,
            rotateY: -45,
            zIndex: 10,
            opacity: 0.6,
            filter: 'blur(2px)'
        }
    };

    return (
        <div
            className="w-full h-full flex items-center justify-center relative perspective-1000 py-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="popLayout">
                {getVisibleItems().map((item, idx) => (
                    <motion.div
                        key={`${item.originalIndex}-${item.position}`} // Unique key composition
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={item.position}
                        variants={variants}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute cursor-pointer"
                        style={{ transformStyle: 'preserve-3d' }}
                        onClick={() => setCurrentIndex(item.originalIndex)}
                    >
                        {renderItem(item)}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CoverflowCarousel;
