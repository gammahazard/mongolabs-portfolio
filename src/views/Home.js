import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import AppShowcase from '../components/AppShowcase';

function Home() {
    const [currentApp, setCurrentApp] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [previousApp, setPreviousApp] = useState(null);

    useEffect(() => {
        const slider = document.querySelector(".slider");
        if (isTransitioning) {
            slider.blur(); // This will force the slider to lose focus and thus drop the click
        }
    }, [isTransitioning]);
    const apps = [
        {
            title: "BlissTech",
            description: "A secure, HIPAA-compliant pharmaceutical management platform offering real-time patient data encryption, activity logging, and dynamic user roles. Features an intuitive dashboard for pharmacists and technicians to manage prescriptions, monitor activities, and ensure the utmost patient privacy",
            image: require('../assets/test0pic.png'),
            link: "http://link_to_app1.com"
        },
        {
            title: "CyberVerse",
            description: "A meticulously crafted website for a blockchain game on the Ergo network. Showcases in-game characters as NFTs, facilitating web3 wallet connections. The platform is enriched with custom JavaScript features, presenting an interactive UI and ensuring a secure user experience.",
            image: require('../assets/test1pic.png'),
            link: "https://cybercitizens.io"
        },
        {
            title: "Automations Suite",
            description: "Developed a sophisticated automation system to tackle a surge in incoming data entries. Using Puppeteer for web tasks, coupled with Discord bots and servers for intercommunication, the solution efficiently sorted and categorized data. This strategic integration significantly reduced manual processing, allowing team members to prioritize other vital tasks.",
            image: require('../assets/test2pic.png'),
            link: "http://link_to_app3.com"
        },
        {
            title: "App 4",
            description: "Description for App 4.",
            image: require('../assets/test3pic.png'),
            link: "http://link_to_app4.com"
        }
    ];

    const handleSliderChange = (event) => {
        if (isTransitioning) return;  // Ignore slider changes during transitions
    
        const newAppIndex = parseInt(event.target.value, 10);
        console.log(`Changing from App ${currentApp} to App ${newAppIndex}`);
        
        setIsTransitioning(true);
        setCurrentApp(newAppIndex);
    
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1200);  // Duration of transition + a little buffer, just to be safe.
    };
    return (
        <div className="home-container">
            <motion.div 
                className="overlay"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            />

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <Navbar />
            </motion.div>

            <motion.div 
                className="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
             <AnimatePresence mode="wait">
    {currentApp >= 0 && currentApp < apps.length && (
        <AppShowcase 
            key={currentApp}  
            title={apps[currentApp].title}
            description={apps[currentApp].description}
            image={apps[currentApp].image}
            link={apps[currentApp].link}
            direction={previousApp === null ? 'forward' : (currentApp > previousApp ? 'forward' : 'backward')}
        />
    )}
</AnimatePresence>
                <input 
                type="range" 
                min="0" 
                max={apps.length - 1} 
                value={currentApp} 
                className="slider" 
                onChange={handleSliderChange} 
                disabled={isTransitioning}
            />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <Footer />
            </motion.div>
        </div>
    );
}

export default Home;
