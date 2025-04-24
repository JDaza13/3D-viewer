import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import { GLTFResult } from "./Viewer";

type GLBLoaderProps = {
  modelPath: string;
};

export const GLBLoader = ({ modelPath }: GLBLoaderProps) => {
  const { nodes } = useGLTF(modelPath) as GLTFResult;

  const group = useRef<Group>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
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
};
