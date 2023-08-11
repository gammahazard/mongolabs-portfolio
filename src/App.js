import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import FullPageAnimation from './components/FullPageAnimation';
import Home from './views/Home';
import { motion } from 'framer-motion';
import './App.css';



function App() {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
      
        const animationTimeout = setTimeout(() => {
            setShowAnimation(false);
        }, 13000);

        return () => clearTimeout(animationTimeout);
    }, []);

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
