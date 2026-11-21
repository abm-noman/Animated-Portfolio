import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame(() => {
        if (skyRef.current) {
            skyRef.current.rotation.y += 0.0003; // Adjust the rotation speed as needed
        }
    });
  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
