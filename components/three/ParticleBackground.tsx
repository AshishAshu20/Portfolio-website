'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ================= GET CSS VARIABLES ================= */
function getCSSColor(variable: string) {
  if (typeof window === 'undefined') return '#ffffff';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}

/* ================= PARTICLES ================= */
function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 2000;

  const [colorsTheme, setColorsTheme] = useState<string[]>([]);

  useEffect(() => {
    const updateColors = () => {
      setColorsTheme([
        getCSSColor('--neon-purple'),
        getCSSColor('--neon-blue'),
        getCSSColor('--neon-cyan'),
      ]);
    };

    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = colorsTheme.length
      ? colorsTheme.map((c) => new THREE.Color(c))
      : [new THREE.Color('#9333ea')];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = palette[Math.floor(Math.random() * palette.length)];

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { positions: pos, colors: col };
  }, [colorsTheme]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>

      {/* 🔥 ALL SAME SMALL SIZE */}
      <pointsMaterial
        size={0.05}   // ✅ fixed small size
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

/* ================= FLOATING SPHERE ================= */
function FloatingSphere({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.4;

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  const themeColor = isLight ? '#7c3aed' : '#9333ea';

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />

      <meshBasicMaterial
        color={themeColor}
        wireframe
        transparent
        opacity={isLight ? 0.25 : 0.12}
      />
    </mesh>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function ParticleBackground() {
  const [light1, setLight1] = useState('#9333ea');
  const [light2, setLight2] = useState('#3b82f6');

  useEffect(() => {
    const updateLights = () => {
      setLight1(getCSSColor('--neon-purple'));
      setLight2(getCSSColor('--neon-blue'));
    };

    updateLights();

    const observer = new MutationObserver(updateLights);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* LIGHTS */}
        <ambientLight intensity={0.25} />
        <pointLight position={[5, 5, 5]} color={light1} intensity={0.6} />
        <pointLight position={[-5, -5, 5]} color={light2} intensity={0.6} />

        {/* BACKGROUND ELEMENTS */}
        <Particles />
        {/* FLOATING SPHERES */}
        <FloatingSphere position={[-4, 2, -2]} scale={2} />
        <FloatingSphere position={[4, -1, -3]} scale={1.5} />
        <FloatingSphere position={[2, 3, -4]} scale={1.2} />
      </Canvas>
    </div>
  );
}