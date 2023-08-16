import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './FullPageAnimation.css';



const sequences = [
    "Retrieving core databases...",
    "Executing syntax checks...",
    "Priming async tasks...",
    "Encrypting data payloads...",
    "Securing connections...",
    "Syncing central systems...",
    "Optimizing bin trees...",
    "Validating corrupt schema...",
    "Calibrating algorithms...",
    "Generating bytecode..."
];

const FullPageAnimation = () => {
    const [loadingDone, setLoadingDone] = useState(false);
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const canvasRef = useRef(null);
    useEffect(() => {
        setLoadingDone(true); // start the sequences immediately on mount
    }, []);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        // Check if canvas dimensions are valid
        if (canvas.width <= 0 || canvas.height <= 0) return;
    
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
        const fontSize = 10;
    
        // Ensure columns is at least 1
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
        
        // Cleanup function
        return () => clearInterval(intervalId);
    }, []);
    
    useEffect(() => {
        if (loadingDone && sequenceIndex < sequences.length) {
            setTimeout(() => {
                if (sequenceIndex > 5) {
                    setTimeout(() => {
                        setSequenceIndex(prevIndex => prevIndex + 1);
                    }, 350);
                } else {
                    setSequenceIndex(prevIndex => prevIndex + 1);
                }
            }, 300);
        }
    }, [loadingDone, sequenceIndex]);



    return (
        <motion.div 
            initial={{ opacity: 1 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} 
            className="full-page-animation"
        >

            
            <h1 className="title" style={{ fontFamily: "'DSEG', monospace" }}>MongoLabs</h1>
      
            <div className={`overlay ${loadingDone ? 'fade-to-black' : ''}`}></div>
            
            <div className="hacking-sequence">
                {sequences.map((seq, index) => (
    <motion.div key={index} className="sequence-item">
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: (index < sequenceIndex) ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="initiating-text"
      >
        {seq}
      </motion.p>
      {index < sequenceIndex && (
        <motion.span 
          initial={{ opacity: 0, x: "-50%" }} 
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.25 }}
          className="checkmark"
        >
          ✓
        </motion.span>
      )}
    </motion.div>
  ))}
 </div>

            <div className="loader"></div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: (sequenceIndex >= sequences.length) ? 1 : 0 }}
                transition={{ duration: 0.45, delay:0.25 }}
                className="initiating-text"
            >
                <span id="sequence-final" style={{ fontFamily: "'DSEG', monospace" }}>
                    Initializing the lab...
                </span>
       
            </motion.p>
            <canvas ref={canvasRef}></canvas>
       
        </motion.div>
    );
};

export default FullPageAnimation;