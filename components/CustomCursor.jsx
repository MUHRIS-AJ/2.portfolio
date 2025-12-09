"use client";
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trailer = trailerRef.current;

        const moveCursor = (e) => {
            const x = e.clientX - cursor.offsetWidth / 2;
            const y = e.clientY - cursor.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px)`
            }

            cursor.animate(keyframes, {
                duration: 100,
                fill: "forwards"
            });

            const trailerX = e.clientX - trailer.offsetWidth / 2;
            const trailerY = e.clientY - trailer.offsetHeight / 2;

            trailer.animate({
                transform: `translate(${trailerX}px, ${trailerY}px)`
            }, {
                duration: 500,
                fill: "forwards"
            });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            <div
                ref={cursorRef}
                className="w-4 h-4 bg-warm-orange rounded-full fixed top-0 left-0 mix-blend-difference"
            />
            <div
                ref={trailerRef}
                className="w-8 h-8 border border-warm-yellow rounded-full fixed top-0 left-0 mix-blend-difference opacity-50"
            />
        </div>
    );
};

export default CustomCursor;
