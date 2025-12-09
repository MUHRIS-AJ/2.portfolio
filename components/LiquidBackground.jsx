"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";

function LiquidSphere() {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.x = t * 0.1;
        mesh.current.rotation.y = t * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={mesh} visible args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#8B0000" // Dark Red base
                    emissive="#FFD700" // Gold glow
                    emissiveIntensity={0.2}
                    roughness={0.1}
                    metalness={0.8}
                    distort={0.6} // Heavy distortion for liquid effect
                    speed={2} // Fast movement
                />
            </Sphere>
        </Float>
    );
}

export default function LiquidBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0F0F0F]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#8B0000" />
                <LiquidSphere />
            </Canvas>
            {/* Vignette Overlay for Iron Man Helmet feel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        </div>
    );
}
