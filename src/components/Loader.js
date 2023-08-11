import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactSVG } from 'react-svg';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const loadingAnimation = useSpring({
    opacity: isLoading ? 1 : 0,
    transform: isLoading ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 300 },
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        
        display: 'absolute',
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // Add a semi-transparent background
        zIndex: 9999,
      }}
    >
      <animated.div style={loadingAnimation}>
        <ReactSVG src="../assets/loader.svg" />
      </animated.div>
    </div>
  );
};

export default LoadingAnimation;
