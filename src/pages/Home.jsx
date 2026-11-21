import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Bird from "../models/Bird";
import Island from "../models/Island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  // currentStage will drive the HomeInfo popups once that component exists
  const [, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    const isMobile = window.innerWidth < 768;

    const screenScale = isMobile ? [0.9, 0.9, 0.9] : [1, 1, 1];
    const screenPosition = [0, -6.5, -43];
    const screenRotation = [0.1, 4.7, 0];

    return [screenScale, screenPosition, screenRotation];
  };

  const adjustPlaneForScreenSize = () => {
    const isMobile = window.innerWidth < 768;

    const planeScale = isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3];
    const planePosition = isMobile ? [0, -1.5, 0] : [0, -4, -4];

    return [planeScale, planePosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */}

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, fov: 75, position: [0, 0, 5] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <hemisphereLight
            skyColor={0xffffff}
            groundColor={0x444444}
            intensity={0.5}
          />

          <Bird />
          <Sky />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
