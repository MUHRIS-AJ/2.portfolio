"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.x = t * 0.4;
        mesh.current.rotation.y = t * 0.2;
    });

    return (
        <Sphere ref={mesh} visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
                color="#8B0000"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                emissive="#FF4500"
                emissiveIntensity={0.5}
            />
        </Sphere>
    );
}

export default function Hero3D() {
    return (
        <div className="w-full h-[500px] flex items-center justify-center relative z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF4500" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8B0000" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
}
