import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function DistrotableSphere() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={1.5}>
          <MeshDistortMaterial
            color="#B4B4B4"
            attach="material"
            distort={0.8}
            speed={3}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
}

export default DistrotableSphere;

{
  /*    */
}
