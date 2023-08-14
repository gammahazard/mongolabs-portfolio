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

    useEffect(() => {
        setLoadingDone(true); // start the sequences immediately on mount
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
            <div className="gradient-bg"></div>  {/* This is the new gradient background */}
            
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

       
        </motion.div>
    );
};

export default FullPageAnimation;