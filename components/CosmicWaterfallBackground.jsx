"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WaterfallParticles({ count = 2000 }) {
    const mesh = useRef();

    // Initialize particles with Waterfall properties (flowing down Y)
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const speeds = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50; // x spread
            positions[i * 3 + 1] = Math.random() * 50 - 25; // y height
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z depth
            speeds[i] = Math.random() * 0.2 + 0.1; // Fall speed
        }
        return { positions, speeds };
    }, [count]);

    useFrame(() => {
        const positions = mesh.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            // Move down
            positions[i * 3 + 1] -= particles.speeds[i];

            // Reset if goes below boundary
            if (positions[i * 3 + 1] < -25) {
                positions[i * 3 + 1] = 25;
            }
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#00C2FF" // Cosmic Cyan
                transparent
                opacity={0.6}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function NebulaFog() {
    return (
        <>
            <fog attach="fog" args={['#020C1B', 5, 45]} />
            <ambientLight intensity={0.5} />
        </>
    )
}

const CosmicWaterfallBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[#020C1B]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF9D]/5 to-transparent" />
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }} gl={{ alpha: false }}>
                <color attach="background" args={['#020C1B']} />
                <NebulaFog />
                <WaterfallParticles count={3000} />
            </Canvas>
        </div>
    )
}

export default CosmicWaterfallBackground;
