import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Bird from "../models/Bird";
import Island from "../models/Island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";

const Home = () => {
  const [isRotating, setisRotating] = useState(false);

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

    return [screenScale, screenPosition, screenRotation];
  };

  const adjustPlaneForScreenSize = () => {
    let planeScale, planePosition;

    if (window.innerWidth < 768) {
      planeScale = [1.5, 1.5, 1.5];
      planePosition = [0, -1.5, 0];
    } else {
      planeScale = [3, 3, 3];
      planePosition = [0, -4, -4];
    }

    return [planeScale, planePosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen flex items-center justify-center">
      {/* <div className="absolute top-28 left-0 right-o z-10 flex items-center justify-center">
        POPUP
      </div> */}

      <Canvas
        className={
          "w-full h-screen bg-transparent " +
          (isRotating ? "cursor-grabbing" : "cursor-grab")
        }
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
            screenRotation={islandRotation}
            isRotating={isRotating}
            setisRotating={setisRotating}
          />

          <Plane
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
