import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf');

  useEffect(() => {
    const leftBoundary = -15; // Leftmost boundary on the X-axis
    const rightBoundary = -5; // Rightmost boundary on the X-axis, still to the left of center
    const bottomBoundary = -5; // Bottom boundary on the Y-axis
    const topBoundary = 5; // Top boundary on the Y-axis
    const depthBoundary = -10; // Depth boundary on the Z-axis (assuming Z goes into the screen)

    const moveRandomly = () => {
      const currentX = targetRef.current.position.x;
      const currentY = targetRef.current.position.y;
      const currentZ = targetRef.current.position.z;

      // Random movement within boundaries
      const newX = Math.max(leftBoundary, Math.min(rightBoundary, currentX + (Math.random() - 0.5) * 2));
      const newY = Math.max(bottomBoundary, Math.min(topBoundary, currentY + (Math.random() - 0.5) * 2));
      const newZ = Math.max(depthBoundary, Math.min(depthBoundary + 2, currentZ + (Math.random() - 0.5) * 2)); // Z movement with a smaller range

      gsap.to(targetRef.current.position, {
        x: newX,
        y: newY,
        z: newZ,
        duration: 2,
        onComplete: moveRandomly,
        ease: "power1.inOut"
      });
    };

    moveRandomly(); // Start the initial move

    // Cleanup function to stop animations when the component unmounts
    return () => {
      gsap.killTweensOf(targetRef.current.position);
    };
  }, []);

  // Keep rotation static to maintain facing direction
  useGSAP(() => {
    gsap.set(targetRef.current.rotation, {
      x: 0, // Or any constant value that suits your initial orientation
      y: 0,
      z: 0
    });
  });

  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Target;