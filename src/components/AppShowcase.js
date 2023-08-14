import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AppShowcase.css';

function AppShowcase({ 
    title, 
    description, 
    image, 
    link, 
    direction, 
    onNext,  // Event handler for next
    onPrev   // Event handler for previous
}) {

    const [isTransitioning, setIsTransitioning] = useState(false);

    const initialProps = direction.enter === 'forward' 
                         ? { opacity: 0, x: -100 } 
                         : { opacity: 0, x: 100 };

    const exitProps = direction.exit === 'forward' 
                      ? { opacity: 0, x: 100 } 
                      : { opacity: 0, x: -100 };

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            onPrev();
            setTimeout(() => setIsTransitioning(false), 800); 
        }
    }

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            onNext();
            setTimeout(() => setIsTransitioning(false), 800);  // Assume transition takes 200ms; adjust as needed.
        }
    }
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (isTransitioning) return; // Prevent arrow key navigation during transition
            
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };
    
        // Attach the event listener
        document.addEventListener('keydown', handleKeyPress);
    
        // Cleanup - remove the event listener when the component is unmounted
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isTransitioning]); // add isTransitioning as a dependency
    
    return (
        <div className="app-showcase-wrapper">
    
            <button 
                className="arrow-button left" 
                onClick={handlePrev}
                disabled={isTransitioning}
            >
                &lt;
            </button>
    
            <div className="content-wrapper">  {/* This div will keep everything centered */}
                <motion.div className="app-showcase-content"
                    initial={initialProps}
                    animate={{ opacity: 1, x: 0 }}
                    exit={exitProps}
                >
                    <h3 className="app-showcase-title">{title}</h3>
                    <img src={image} alt={title} className="app-showcase-image" />
                    <p className="app-showcase-description">{description}</p>
                    <a href={link}  target="_blank" rel="noopener noreferrer" className="app-showcase-link">View Project</a>
                </motion.div>
            </div>
    
            <button 
                className="arrow-button right" 
                onClick={handleNext}
                disabled={isTransitioning}
            >
                &gt;
            </button>
        </div>
    );
    
}

export default AppShowcase;
