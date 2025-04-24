import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh, Group, Material } from "three";
import LogCamera from "./LogCamera";

type GLTFResult = ReturnType<typeof useGLTF> & {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};

function CarModel() {
  const { nodes } = useGLTF("/car_battery.glb") as GLTFResult;

  const group = useRef<Group>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={group}>
      {Object.entries(nodes).map(([name, node]) => (
        <mesh
          key={name}
          geometry={node.geometry}
          material={node.material}
          onPointerOver={() => setHoveredPart(name)}
          onPointerOut={() => setHoveredPart(null)}
          material-color={hoveredPart === name ? "hotpink" : "white"}
        />
      ))}
    </group>
  );
}

export default function Viewer() {
  return (
    <Canvas camera={{ position: [0, 0.075, 0.1], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <CarModel />
        <OrbitControls />
        <LogCamera />
      </Suspense>
    </Canvas>
  );
}
