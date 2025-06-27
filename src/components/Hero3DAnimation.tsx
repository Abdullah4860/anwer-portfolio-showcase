
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating data particles component
const DataParticles = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const particleCount = 50;

  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const rotations = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      rotations[i * 3] = Math.random() * Math.PI * 2;
      rotations[i * 3 + 1] = Math.random() * Math.PI * 2;
      rotations[i * 3 + 2] = Math.random() * Math.PI * 2;
    }
    
    return { positions, rotations };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * 0.5;
      
      for (let i = 0; i < particleCount; i++) {
        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3(
          particleData.positions[i * 3] + Math.sin(time + i * 0.1) * 0.5,
          particleData.positions[i * 3 + 1] + Math.cos(time + i * 0.1) * 0.5,
          particleData.positions[i * 3 + 2]
        );
        
        const rotation = new THREE.Euler(
          particleData.rotations[i * 3] + time * 0.5,
          particleData.rotations[i * 3 + 1] + time * 0.3,
          particleData.rotations[i * 3 + 2] + time * 0.4
        );
        
        matrix.makeRotationFromEuler(rotation);
        matrix.setPosition(position);
        
        meshRef.current.setMatrixAt(i, matrix);
      }
      
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  const material = useMemo(() => new THREE.MeshBasicMaterial({ 
    color: '#ff7f50', 
    opacity: 0.6, 
    transparent: true 
  }), []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <primitive object={material} attach="material" />
    </instancedMesh>
  );
};

// Floating network connections
const NetworkConnections = () => {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      lines.push({ start, end });
    }
    return lines;
  }, []);

  return (
    <group ref={linesRef}>
      {connections.map((connection, index) => {
        const points = [connection.start, connection.end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <primitive key={index} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#ff7f50', opacity: 0.3, transparent: true }))} />
        );
      })}
    </group>
  );
};

const Hero3DAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DataParticles />
        <NetworkConnections />
      </Canvas>
    </div>
  );
};

export default Hero3DAnimation;
