import css from "../styles/Home.module.css";

import { extend } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import Floor from "@/components/Floor";
import LightBulb from "@/components/LightBulb";
import { OrbitControls } from "@react-three/drei";
import Dodecahedron from "@/components/Dodecahedron";
import { useState } from "react";
import LightShade from "@/components/LightShade";
import Box from "@/components/Box";
import Cone from "@/components/Cone";

extend({ Canvas });

export default function Home() {
  const [hoverShape, setHoverShape] = useState(false)


  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [0, -36, 26],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        {
          !hoverShape ? (
            <OrbitControls />
          ) : null
        }
        <LightShade position={[0, 0, 23.5]} />
        <LightBulb position={[0, 0, 21]} />
        <Dodecahedron position={[0, 0, 0]} hover={setHoverShape} />
        <Box position={[10, 0, 0]} hover={setHoverShape} />
        <Cone position={[-10, 0, 0]} hover={setHoverShape} />
        <Floor position={[0, -1, -1]} />
        <Floor position={[0, 13.8, 14]} rotation-x={1.58} />
        <Floor position={[19.9, 4, 14]} rotation-x={1.572} rotation-y={-1.58} />
        <Floor position={[0, 0, 28.9]} rotation-x={3.15} />
      </Canvas>
    </div>
  );
}
