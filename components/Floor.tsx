import React from "react";

function Floor(props: any) {
  return (
    <mesh {...props} receiveShadow={true}>
      <planeGeometry args={[40, 30]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;
