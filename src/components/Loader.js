import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactSVG } from 'react-svg';

const LoadingAnimation = () => {
    // Local state to manage the loading state
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a delay for loading
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // Clearing the timeout when the component unmounts
        return () => clearTimeout(loadingTimeout);
    }, []);

    // React spring animation configuration for loading effect
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
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                zIndex: 9999,
            }}
        >
            {/* Animated SVG component */}
            <animated.div style={loadingAnimation}>
                <ReactSVG src="../assets/loader.svg" />
            </animated.div>
        </div>
    );
};

export default LoadingAnimation;
