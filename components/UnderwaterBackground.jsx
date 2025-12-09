"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TechParticles({ count = 400 }) {
    const mesh = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 25; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.y = t * 0.02; // Slow rotation
        mesh.current.rotation.z = t * 0.01;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#00FF9D" // Neon Green Particles
                transparent
                opacity={0.4}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

const TechGridBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[#020C1B]">
            {/* Simple CSS Grid Overlay for HUD feel */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#00FF9D 1px, transparent 1px), linear-gradient(90deg, #00FF9D 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-[#020C1B]" />

            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <TechParticles />
            </Canvas>
        </div>
    )
}

export default TechGridBackground;
