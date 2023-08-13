import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (showAnimation) {
            const animationTimeout = setTimeout(() => {
                setShowAnimation(false);
                localStorage.setItem('hasWatchedIntro', 'true');
            }, 8000);

            return () => clearTimeout(animationTimeout);
        }
    }, [showAnimation]);

    return (
        <Router>
            <div className="App">
                <AnimatePresence>
                    {showAnimation && <FullPageAnimation />}
                    {!showAnimation && (
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    )}
                </AnimatePresence>
            </div>
        </Router>
    );
}

export default App;
