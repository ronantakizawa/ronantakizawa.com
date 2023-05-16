import React, { Suspense, useEffect, useState, } from "react";
import { Canvas,extend } from "@react-three/fiber";
import { OrbitControls, Preload, Wireframe, useGLTF } from "@react-three/drei";
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'
import CanvasLoader from "../Loader";
import almendra from "/Users/ronantakizawa/Documents/Personal CS projects/3dportfolio/Threejs-3D-Portfolio/src/assets/font.json"

extend({TextGeometry})
const Computers = ({ isMobile }) => {
  const font = new FontLoader().parse(almendra)

  return (
    <>
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[0, 0, 3]}
        angle={0}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024} />
      <pointLight intensity={2} />
      <mesh rotation-y={1.3} position={[0, -2, 3.5]}>
        <textGeometry args={['WELCOME',{font,size:1,height:1}]}/>
      <meshPhysicalMaterial attatch='material' color={'#60A5FA'}/>
      </mesh>
    </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? <></> : <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2 }
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>}
      <p className="text-center text-secondary text-[20px] align-text-top relative bottom-36">Press to rotate</p>
    </>
  );
};

export default ComputersCanvas;
