"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const CircuitParticles = (props) => {
    const ref = useRef();
    // Generate points in a sphere or cube distribution
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00FF9D" // Neon Green for CPU/Matrix feel
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const ConnectingLines = () => {
    // Add lines to simulate circuits/connections? 
    // For performance, simple particles with a "tech" color palette might be safer and look like a "CPU cloud".
    return null;
}

const CPULiveBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <CircuitParticles />
            </Canvas>
            {/* Overlay for HUD effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        </div>
    );
};

export default CPULiveBackground;
