import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh, Material } from "three";
import LogCamera from "./LogCamera";
import { GLBLoader } from "./GLBLoader";

import "./Viewer.scss";

export type GLTFResult = ReturnType<typeof useGLTF> & {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};

export default function Viewer() {
  return (
    <div className="viewer-container">
      <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={2}>
            <GLBLoader />
          </Bounds>
          <OrbitControls />
          <LogCamera />
        </Suspense>
      </Canvas>
    </div>
  );
}
