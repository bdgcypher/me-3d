import React from "react";

function LightShade(props: any) {
  return (
    <>
    <mesh {...props} rotation-x={1.5}>
      <pointLight intensity={20} castShadow />
      <cylinderGeometry args={[.2, .5, 10]} />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
    <mesh {...props} rotation-x={1.5}>
      <pointLight intensity={20} castShadow />
      <coneGeometry args={[5, 5, 100]} />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
    </>
    
  );
}

export default LightShade;
