"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Line, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { config } from "@/config"; // Import real config

// Extract skills from config
const getAllSkills = () => {
    const all = [];
    config.skills.forEach(cat => {
        cat.skills.forEach(skill => {
            all.push({
                name: skill.name,
                color: cat.title.includes("Technical") ? "#4E8EA2" : "#7BBDE8", // Blue/Teal based on category
                position: [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ]
            });
        });
    });
    return all;
};

const TECH_NODES = getAllSkills();

function Node({ position, color, name }) {
    const mesh = useRef();

    useFrame((state) => {
        mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <group position={position}>
            <mesh ref={mesh}>
                <icosahedronGeometry args={[0.4, 1]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} wireframe />
            </mesh>
            <Html distanceFactor={12}>
                <div className="content select-none px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white font-bold whitespace-nowrap shadow-[0_0_10px_rgba(78,142,162,0.3)]">
                    {name}
                </div>
            </Html>
        </group>
    );
}

function Connections({ nodes }) {
    const points = useMemo(() => {
        const lines = [];
        // Connect nodes closer to each other
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = new THREE.Vector3(...nodes[i].position).distanceTo(new THREE.Vector3(...nodes[j].position));
                if (dist < 4) { // Connect if close
                    lines.push([nodes[i].position, nodes[j].position]);
                }
            }
        }
        return lines;
    }, [nodes]);

    return (
        <group>
            {points.map((line, index) => (
                <Line
                    key={index}
                    points={line}
                    color="#4E8EA2"
                    opacity={0.15}
                    transparent
                    lineWidth={1}
                />
            ))}
        </group>
    );
}

export default function TechNetwork() {
    return (
        <div className="w-full h-full relative">
            <Canvas camera={{ position: [0, 0, 12], fov: 60 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#BDD8E9" />
                <Connections nodes={TECH_NODES} />
                {TECH_NODES.map((node, i) => (
                    <Node key={i} {...node} />
                ))}
                <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.8} minDistance={5} maxDistance={20} />
            </Canvas>
        </div>
    );
}
