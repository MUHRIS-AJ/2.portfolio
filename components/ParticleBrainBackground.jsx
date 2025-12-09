"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function BrainParticles({ count = 2000 }) {
    const mesh = useRef();
    const { viewport, mouse } = useThree();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Generate points in a brain-like shape (simplified as a sphere/ellipsoid mix for now, can be refined to a brain model later if needed)
            // Using a noisy sphere/ellipsoid approximation
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);

            // Squeeze for brain lobes shape roughly
            const r = 1.5 + Math.random() * 0.2;

            let x = r * Math.sin(phi) * Math.cos(theta);
            let y = r * Math.sin(phi) * Math.sin(theta) * 0.8; // Flatten slightly
            let z = r * Math.cos(phi);

            // Separate hemispheres slightly
            if (x > 0) x += 0.2;
            if (x < 0) x -= 0.2;

            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Auto rotation
        mesh.current.rotation.y = t * 0.1;

        // Mouse interaction - slightly tilt/rotate based on mouse position
        // Lerping for smooth movement
        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, mouse.y * 0.2, 0.1);
        mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, mouse.x * 0.2, 0.1);
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
                size={0.02}
                color="#6d28d9" // Updated to Purple
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

const ParticleBrainBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <BrainParticles />
            </Canvas>
        </div>
    )
}

export default ParticleBrainBackground;
