import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
 Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.2}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 3, 5]} intensity={1.3} />

      {/* Slightly larger but not zoomed */}
      <mesh castShadow receiveShadow scale={[3.6, 3.6, 0.35]}>
        <boxGeometry args={[1, 1, 0.15]} />
        <meshStandardMaterial
          color="#f4f4f4"
          roughness={0.4}
          metalness={0.3}
          flatShading={false}
        />

        <Decal
          position={[0, 0, 0.11]}
          rotation={[0, 0, 0]}
          scale={0.75} // slightly larger icon
          map={decal}
          transparent
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
