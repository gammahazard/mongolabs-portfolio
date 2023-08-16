// Importing necessary modules
import React, { useState, useEffect, useRef } from 'react'; // React core, hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router for routing
import { AnimatePresence } from 'framer-motion'; // framer-motion for animations

// Importing component and view files
import FullPageAnimation from './components/FullPageAnimation';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

// Importing styles
import './App.css';

function App() {
    // Checks if the user has already seen the intro animation
    const hasWatched = localStorage.getItem('hasWatchedIntro') === 'true';
    
    // State to manage the display of the animation
    const [showAnimation, setShowAnimation] = useState(!hasWatched);
    
    // Ref to access the canvas DOM element
    const canvasRef = useRef(null);

    // Effect hook to control the display duration of the animation
    useEffect(() => {
        if (showAnimation) {
            // Set timeout to hide the animation and mark it as watched after 8 seconds
            const animationTimeout = setTimeout(() => {
                setShowAnimation(false);
                localStorage.setItem('hasWatchedIntro', 'true');
            }, 8000);

            // Cleanup to clear the timeout if component is unmounted before the timeout expires
            return () => clearTimeout(animationTimeout);
        }
    }, [showAnimation]);

    // Effect hook to set up the matrix animation on the canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to full viewport size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Early exit if the canvas has no valid dimensions
        if (canvas.width <= 0 || canvas.height <= 0) return;

        // Configuration for matrix letters and columns
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
        const fontSize = 10;
        const columns = Math.max(1, Math.floor(canvas.width / fontSize));
        const drops = Array(columns).fill(1);

        // Function to draw the matrix animation
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Loop through the drops array to print characters and move them downward
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#0f0';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                // Increment the drop position
                drops[i]++;
                
                // Reset the drop to the top if it reaches the bottom or with a 5% chance
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }

        // Set an interval to continuously draw the matrix animation
        const intervalId = setInterval(draw, 33);

        // Cleanup to clear the interval if the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    // Return statement to render the component
    return (
        <div className="app-container">
            <canvas className="matrix-background" ref={canvasRef}></canvas>
            
            {/* Conditional rendering: If animation should be shown, display it. Otherwise, display the router with routes */}
            {showAnimation ? <FullPageAnimation /> : (
                <Router>
                    <div className="App">
                        {/* AnimatePresence from framer-motion to animate route transitions */}
                        <AnimatePresence>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </AnimatePresence>
                    </div>
                </Router>
            )}
        </div>
    );
}

export default App;
