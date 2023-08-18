import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AppShowcase.css';

// AppShowcase component represents an individual showcase of an app.
// It includes functionality to navigate to the next and previous app showcases using arrow buttons.
function AppShowcase({
    title,
    description,
    image,
    link,
    direction,
    platforms = [], // Default to an empty array if not provided.
    onNext, // Event handler for next navigation
    onPrev  // Event handler for previous navigation
}) {

    // State to track if the component is currently transitioning
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Determine the initial animation properties based on the direction provided
    const initialProps = direction.enter === 'forward'
        ? { opacity: 0, x: -100 }
        : { opacity: 0, x: 100 };

    // Determine the exit animation properties based on the direction provided
    const exitProps = direction.exit === 'forward'
        ? { opacity: 0, x: 100 }
        : { opacity: 0, x: -100 };

    // Event handler for the previous button click
    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            onPrev();
            // Reset the transitioning state after the duration (assumed 800ms here)
            setTimeout(() => setIsTransitioning(false), 800);
        }
    }

    // Event handler for the next button click
    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            onNext();
            // Reset the transitioning state after the duration (assumed 800ms here)
            setTimeout(() => setIsTransitioning(false), 800);
        }
    }

    // Add keyboard support for navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (isTransitioning) return; // Prevent arrow key navigation during transition

            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        // Attach the event listener for keypress
        document.addEventListener('keydown', handleKeyPress);

        // Cleanup - remove the event listener when the component is unmounted
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isTransitioning]); // Dependency ensures effect only re-runs if isTransitioning changes

    return (
        <div className="app-showcase-wrapper">
            {/* Arrow button for navigating to the previous app showcase */}
            <button
                className="arrow-button left"
                onClick={handlePrev}
                disabled={isTransitioning}
            >
                &lt;
            </button>

            <div className="content-wrapper">
                {/* App showcase content with enter and exit animations */}
                <motion.div className="app-showcase-content"
                    initial={initialProps}
                    animate={{ opacity: 1, x: 0 }}
                    exit={exitProps}
                >
                    <h3 className="app-showcase-title">{title}</h3>
                    <img src={image} alt={title} className="app-showcase-image" />
                    <p className="app-showcase-description">{description}</p>

                    {/* Conditional rendering for the project link or a blank button */}
                    {
                        title !== "BlissTech" ? (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="app-showcase-link">View Project</a>
                        ) : (
                            <button className="app-showcase-blank-link"></button>
                        )
                    }

                    {/* Render platform buttons for BlissTech */}
                    {
    title === "BlissTech" && platforms.map(platform => (
        <button
            key={platform.name}
            className="platform-button"
            onClick={() => {
                if (platform.name === "Demo") {
                    window.open(platform.link, '_blank');
                } else if (window.confirm("This will start a download for BlissTech on your computer, do you wish to continue?")) {
                    window.location.href = platform.link;
                }
            }}
        >
            {platform.name}
        </button>
    ))
}

                </motion.div>
            </div>

            {/* Arrow button for navigating to the next app showcase */}
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
