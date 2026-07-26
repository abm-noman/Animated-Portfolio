import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      {/* <div className="absolute top-28 left-0 right-o z-10 flex items-center justify-center">
        POPUP
      </div> */}

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near : 0.1, far: 1000, fov: 75, position: [0, 0, 5] }}
      >
        <Suspense fallback={ <Loader /> }>
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />
          <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={0.5} />
        </Suspense>

      </Canvas>
    </section>
  );
};

export default Home;
