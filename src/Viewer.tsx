import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh, Material } from "three";
import LogCamera from "./LogCamera";
import { GLBLoader } from "./GLBLoader";

import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import "./Viewer.scss";
import ModelSelector from "./components/Selector";
import { MODELS_AS_OPTIONS } from "./models";

export type GLTFResult = ReturnType<typeof useGLTF> & {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};

export default function Viewer() {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  const [modelPaths, setModelPaths] = useState<string[]>(
    MODELS_AS_OPTIONS.length ? [MODELS_AS_OPTIONS[0].value] : []
  );

  const handleModelSelect = (modelPaths: string[]) => {
    controlsRef.current?.reset();
    setModelPaths(modelPaths);
  };

  return (
    <div className="viewer-container">
      <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={undefined}>
          <Bounds fit clip observe margin={2} maxDuration={0.25}>
            <GLBLoader modelPath={modelPaths[0]} />
          </Bounds>
          <OrbitControls makeDefault ref={controlsRef} />
          <LogCamera />
        </Suspense>
      </Canvas>
      <ModelSelector
        initialValue={modelPaths}
        onModelSelect={handleModelSelect}
        options={MODELS_AS_OPTIONS}
      />
    </div>
  );
}
