import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import matrixVideo from '../assets/matrix_background.mp4';
import './FullPageAnimation.css';



const sequences = [
    "Retrieving essential databases...",
    "Performing routine syntax checks...",
    "Priming asynchronous tasks...",
    "Encrypting payloads...",
    "Establishing secure connections...",
    "Synchronizing distributed systems...",
    "Optimizing binary trees...",
    "Validating schema mutations...",
    "Calibrating recursive algorithms...",
    "Generating dynamic bytecode..."
];

const FullPageAnimation = () => {
    const videoRef = useRef(null);
    const [loadingDone, setLoadingDone] = useState(false);
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const videoElem = videoRef.current;
        const handleCanPlay = () => {
            videoElem.play();
            setLoadingDone(true);
        };
        videoElem.addEventListener('canplaythrough', handleCanPlay);

        // Cleanup listener on component unmount
        return () => {
            videoElem.removeEventListener('canplaythrough', handleCanPlay);
        };
    }, []);

    useEffect(() => {
        if (loadingDone && sequenceIndex < sequences.length) {
            setTimeout(() => {
                if (sequenceIndex > 5) {
                    setTimeout(() => {
                        setSequenceIndex(prevIndex => prevIndex + 1);
                    }, 600);
                } else {
                    setSequenceIndex(prevIndex => prevIndex + 1);
                }
            }, 150);
        }
    }, [loadingDone, sequenceIndex]);

    
    useEffect(() => {
        if (sequenceIndex >= sequences.length) {
            setTimeout(() => {
                setFadeOut(true);
            }, 4000); // 3-4 seconds delay before starting the fade-out
        }
    }, [sequenceIndex]);

    return (
        <motion.div 
        initial={{ opacity: 1 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }} 
        className="full-page-animation"
    >
            <video 
                className="matrix-background-video"
                loop 
                muted
                ref={videoRef}
                src={matrixVideo}
                preload="auto"
             
            >
                Your browser does not support the video tag.
            </video>
       
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
    transition={{ duration: 0.75, delay:0.85 }}
    className="initiating-text"
>
<span id="sequence-final" style={{ fontFamily: "'DSEG', monospace" }}>
  Initializing the lab...
</span>
</motion.p>
<h1 className="title"style={{ fontFamily: "'DSEG', monospace" }}>MongoLabs</h1>
        </motion.div>
        
    );
    
};

export default FullPageAnimation;
