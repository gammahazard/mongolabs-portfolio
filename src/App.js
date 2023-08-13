import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import FullPageAnimation from './components/FullPageAnimation';
import Home from './views/Home';
import { motion } from 'framer-motion';
import './App.css';

function App() {
    // Get the hasWatched value from localStorage
    const hasWatched = localStorage.getItem('hasWatchedIntro') === 'true';

    // Using a state to decide whether to show the animation or not
    const [showAnimation, setShowAnimation] = useState(!hasWatched);

    useEffect(() => {
        if (showAnimation) {
            // If showing animation, set a timeout for its duration
            const animationTimeout = setTimeout(() => {
                setShowAnimation(false);  // Hide the animation after it's done
                localStorage.setItem('hasWatchedIntro', 'true'); // Set localStorage value indicating user has watched the animation
            }, 8000); // Assuming 8000ms is the full animation duration

            return () => clearTimeout(animationTimeout);
        }
    }, [showAnimation]);

    return (
        <div className="App">
            <AnimatePresence>
                {showAnimation && <FullPageAnimation />}
                {!showAnimation && <Home />}
            </AnimatePresence>
        </div>
    );
}

export default App;
