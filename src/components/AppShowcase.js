import React from 'react';
import { motion } from 'framer-motion';
import './AppShowcase.css';

function AppShowcase({ title, description, image, link, direction }) {
    const initialProps = direction === 'forward' 
                         ? { opacity: 0, x: -100 } 
                         : { opacity: 0, x: 100 };

    const exitProps = direction === 'forward' 
                      ? { opacity: 0, x: 100 } 
                      : { opacity: 0, x: -100 };

    return (
        <motion.div 
            className="app-showcase"
            initial={initialProps}
            animate={{ opacity: 1, x: 0 }}
            exit={exitProps}
            transition={{ duration: 0.7 }}
        >
            <h3 className="app-showcase-title">{title}</h3>
            <img src={image} alt={title} className="app-showcase-image" />
            <p className="app-showcase-description">{description}</p>
            <a href={link} className="app-showcase-link">View Project</a>
        </motion.div>
    );
}

export default AppShowcase;
