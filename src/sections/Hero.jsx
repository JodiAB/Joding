import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import Target from '../components/Target';
import { calculateSizes } from '../constants';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Jodi Abrahams
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Dream, Code, Achieve</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={
                  isMobile
                    ? [-0.5, 0.2, 0.1]
                    : isTablet
                    ? [-0.4, 0.2, 0.1] // Adjust for tablet devices
                    : [-0.5, -0.7, 3]
                }
                rotation={
                  isMobile
                    ? [0.12, 1.6, 0]
                    : [0.12, 1.6, 0] // Same for tablet and desktop here
                }
                scale={
                  isMobile
                    ? 0.7
                    : isTablet
                    ? 0.6 // Adjusted scale for tablets
                    : 0.5
                }
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.ReactLogoPosition} />
              <Cube position={sizes.CubePosition} />
              <Rings position={sizes.RingsPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Lets work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;