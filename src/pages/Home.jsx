import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = [0, -6.5, -43];
    let screenRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
      screenRotation = [0.1, 4.7, 0];
    } else {
      screenScale = [1, 1, 1];
    }

    return [ screenScale, screenPosition, screenRotation ];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

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

          <Sky />

          <Island 
          position={islandPosition}
          scale={islandScale}
          screenRotation={islandRotation}/>
        </Suspense>

      </Canvas>
    </section>
  );
};

export default Home;
