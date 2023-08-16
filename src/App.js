import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import FullPageAnimation from './components/FullPageAnimation';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

import './App.css';

function App() {
    const hasWatched = localStorage.getItem('hasWatchedIntro') === 'true';
    const [showAnimation, setShowAnimation] = useState(!hasWatched);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (showAnimation) {
            const animationTimeout = setTimeout(() => {
                setShowAnimation(false);
                localStorage.setItem('hasWatchedIntro', 'true');
            }, 8000);

            return () => clearTimeout(animationTimeout);
        }
    }, [showAnimation]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (canvas.width <= 0 || canvas.height <= 0) return;

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
        const fontSize = 10;

        const columns = Math.max(1, Math.floor(canvas.width / fontSize));
        const drops = Array(columns).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#0f0';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }

        const intervalId = setInterval(draw, 33);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="app-container">
            <canvas className="matrix-background" ref={canvasRef}></canvas>
            {showAnimation ? <FullPageAnimation /> : (
                <Router>
                    <div className="App">
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