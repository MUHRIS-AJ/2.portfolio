"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const AccretionDisk = () => {
    const meshRef = useRef();

    // Shader for the black hole accretion disk
    const uniforms = {
        time: { value: 0 },
        color: { value: new THREE.Color('#4c1d95') }, // Deep purple core
        secondaryColor: { value: new THREE.Color('#000000') }
    };

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.z -= 0.002;
            meshRef.current.material.uniforms.time.value = state.clock.getElapsedTime();
        }
    });

    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        
        void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            
            // Create a ring
            float ring = smoothstep(0.2, 0.3, dist) * smoothstep(0.5, 0.3, dist);
            
            // Add some noise/swirl texture
            float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
            float spiral = sin(angle * 10.0 + time * 2.0 + dist * 20.0);
            
            vec3 finalColor = color * ring * (0.8 + 0.2 * spiral);
            
            // Fade out edges
            float opacity = ring * (0.5 + 0.5 * sin(time + dist * 10.0));
            
            gl_FragColor = vec4(finalColor, opacity);
        }
    `;

    return (
        <mesh ref={meshRef} rotation={[Math.PI / 3, 0, 0]}>
            <planeGeometry args={[12, 12]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
};

const EventHorizon = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshBasicMaterial color="#000000" />
        </mesh>
    );
};

const BlackHoleBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, -2, 8], fov: 60 }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <group position={[0, 1, 0]}>
                    <AccretionDisk />
                    <EventHorizon />
                    {/* Add a subtle purple glow point light */}
                    <pointLight position={[0, 0, 0]} color="#8b5cf6" intensity={2} distance={10} />
                </group>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
        </div>
    );
};

export default BlackHoleBackground;
