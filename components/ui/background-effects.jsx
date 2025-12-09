import React, { useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2,
            ease: 'easeOut',
        },
    },
};

const blobVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

const BackgroundEffects = ({
    className,
    variant = 'default',
    colors = {
        first: 'secondary',
        second: 'secondary',
    },
    intensity = '10',
    blurAmount = '3xl',
}) => {
    const positions = {
        default: {
            first: 'top-1/4 -translate-y-1/2 left-1/4',
            second: 'bottom-1/4 translate-y-1/2 right-1/4',
        },
        centered: {
            first: 'top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2',
            second: 'top-1/2 -translate-y-1/2 right-1/3 translate-x-1/2',
        },
        diagonal: {
            first: 'top-0 left-0',
            second: 'bottom-0 right-0',
        },
        corners: {
            first: 'top-0 right-0',
            second: 'bottom-0 left-0',
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className={cn(
                'absolute inset-0 overflow-hidden pointer-events-none',
                className
            )}
        >
            <motion.div
                variants={blobVariants}
                className={cn(
                    'absolute w-96 h-96 rounded-full',
                    `bg-${colors.first}/${intensity}`,
                    `blur-${blurAmount}`,
                    positions[variant].first
                )}
                key={`blob-1-${colors.first}-${variant}`}
            />
            <motion.div
                variants={blobVariants}
                className={cn(
                    'absolute w-96 h-96 rounded-full',
                    `bg-${colors.second}/${intensity}`,
                    `blur-${blurAmount}`,
                    positions[variant].second
                )}
                key={`blob-2-${colors.second}-${variant}`}
            />
        </motion.div>
    );
};

// Butterfly Component
const Butterfly = ({ delay = 0, x = 0, y = 0, size = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: 1,
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 5, -5, 0]
            }}
            transition={{
                opacity: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                scale: {
                    duration: 0.5,
                    ease: "easeOut"
                },
                y: {
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                },
                x: {
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                },
                rotate: {
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                }
            }}
            className="absolute pointer-events-none"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.4))'
            }}
        >
            <svg
                width={20 * size}
                height={20 * size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 2C8 2 5 5 5 9C5 11 6 13 7 14C8 15 9 16 10 17C11 18 12 19 12 20C12 21 11 22 10 22C9 22 8 21 8 20C8 19 7 18 6 17C5 16 4 15 3 14C2 13 1 11 1 9C1 5 4 2 8 2C9 2 10 2 11 3C11.5 3 12 3 12 2Z"
                    fill="rgba(236, 72, 153, 0.8)"
                />
                <path
                    d="M12 2C16 2 19 5 19 9C19 11 18 13 17 14C16 15 15 16 14 17C13 18 12 19 12 20C12 21 13 22 14 22C15 22 16 21 16 20C16 19 17 18 18 17C19 16 20 15 21 14C22 13 23 11 23 9C23 5 20 2 16 2C15 2 14 2 13 3C12.5 3 12 3 12 2Z"
                    fill="rgba(236, 72, 153, 0.8)"
                />
                <ellipse cx="12" cy="12" rx="2" ry="4" fill="rgba(168, 85, 247, 0.9)" />
            </svg>
        </motion.div>
    );
};

// Magical Wisp Component
const MagicalWisp = ({ delay = 0, x = 0, y = 0 }) => {
    const wispVariants = {
        float: {
            y: [0, -50, -100],
            x: [0, 20, -20],
            opacity: [0.2, 0.6, 0],
            scale: [0.8, 1.2, 1.5],
            transition: {
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeOut",
                delay: delay
            }
        }
    };

    return (
        <motion.div
            variants={wispVariants}
            animate="float"
            className="absolute pointer-events-none rounded-full blur-xl"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)',
            }}
        />
    );
};

// Blue Orb Component
const BlueOrb = ({ delay = 0, x = 0, y = 0, size = 1 }) => {
    const orbVariants = {
        float: {
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
            transition: {
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }
        }
    };

    return (
        <motion.div
            variants={orbVariants}
            animate="float"
            className="absolute rounded-full pointer-events-none"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${40 * size}px`,
                height: `${40 * size}px`,
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.4) 50%, transparent 100%)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(37, 99, 235, 0.4)',
                filter: 'blur(2px)'
            }}
        />
    );
};

// Mystical Background Component
const MysticalBackground = () => {
    const butterflies = useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 2,
            size: 0.8 + Math.random() * 0.4
        }));
    }, []);

    const wisps = useMemo(() => {
        return Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: 80 + Math.random() * 20,
            delay: Math.random() * 4
        }));
    }, []);

    const orbs = useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
            size: 0.8 + Math.random() * 0.6
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Multiple gradient blobs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
                className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
                className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
                className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-3xl"
            />

            {/* Magical Wisps */}
            {wisps.map((wisp) => (
                <MagicalWisp
                    key={wisp.id}
                    delay={wisp.delay}
                    x={wisp.x}
                    y={wisp.y}
                />
            ))}

            {/* Butterflies */}
            {butterflies.map((butterfly) => (
                <Butterfly
                    key={butterfly.id}
                    delay={butterfly.delay}
                    x={butterfly.x}
                    y={butterfly.y}
                    size={butterfly.size}
                />
            ))}

            {/* Blue Orbs */}
            {orbs.map((orb) => (
                <BlueOrb
                    key={orb.id}
                    delay={orb.delay}
                    x={orb.x}
                    y={orb.y}
                    size={orb.size}
                />
            ))}
        </div>
    );
};

export const BackgroundPresets = {
    Subtle: () => (
        <BackgroundEffects
            variant="centered"
            colors={{ first: 'primary', second: 'secondary' }}
            intensity="5"
            blurAmount="3xl"
        />
    ),

    Vibrant: () => (
        <BackgroundEffects
            variant="diagonal"
            colors={{ first: 'primary', second: 'primary' }}
            intensity="20"
            blurAmount="3xl"
        />
    ),

    Corner: () => (
        <BackgroundEffects
            variant="corners"
            colors={{ first: 'secondary', second: 'secondary' }}
            intensity="10"
            blurAmount="3xl"
        />
    ),

    Minimal: () => (
        <BackgroundEffects
            variant="default"
            colors={{ first: 'secondary', second: 'secondary' }}
            intensity="5"
            blurAmount="3xl"
        />
    ),

    Mystical: () => <MysticalBackground />,
};

export default BackgroundEffects;
