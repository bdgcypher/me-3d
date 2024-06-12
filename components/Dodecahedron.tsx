import React, { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useGesture } from "react-use-gesture";
import { useSpring, a } from "@react-spring/three";

function Dodecahedron(props: any) {
  const setHoverShape = props.hover;

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, setSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 1, 0],
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) =>
      setSpring({
        position: [x / aspect, -y / aspect, 0],
        rotation: [y / aspect, x / aspect, 0],
      }),
    onHover: ({ hovering }) =>
      setSpring({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] }),
    onPointerDown: () => {
      setHoverShape(true);
    },
    onPointerUp: () => {
      setHoverShape(false);
    },
  });

  const meshRef = useRef();

  return (
    <a.mesh
      {...props}
      {...spring}
      {...bind()}
      ref={meshRef}
      receiveShadow={true}
      castShadow
    >
      <dodecahedronGeometry />
      <meshNormalMaterial />
    </a.mesh>
  );
}

export default Dodecahedron;
