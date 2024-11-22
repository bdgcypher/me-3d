import React from "react";

function LightBulb(props: any) {
  return (
    <mesh {...props}>
      <pointLight intensity={50} castShadow />
      <sphereGeometry args={[3, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
}

export default LightBulb;
