import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const LogCamera = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "l") {
        console.log("📸 Camera position:", camera.position.toArray());
        console.log("🎯 Camera rotation:", camera.rotation.toArray());
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [camera]);

  return null;
};

export default LogCamera;
