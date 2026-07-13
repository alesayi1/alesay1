'use client';
import { Canvas } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedLogo() {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <meshStandardMaterial color="#4f46e5" roughness={0.1} metalness={0.9} />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <AnimatedLogo />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
}