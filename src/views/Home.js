import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import AppShowcase from '../components/AppShowcase';

function Home() {
    const [currentApp, setCurrentApp] = useState(0);
    const [direction, setDirection] = useState('forward'); // 'forward' or 'backward'


    useEffect(() => {
        console.log("Home component mounted or re-rendered");
    });
    const [exitDirection, setExitDirection] = useState(null);
    const [enterDirection, setEnterDirection] = useState('forward');
    

    const onNext = () => {
        setCurrentApp(prev => (prev + 1) % apps.length);
        setExitDirection('backward');
        setEnterDirection('forward');
    }
    
    const onPrev = () => {
        setCurrentApp(prev => (prev - 1 + apps.length) % apps.length);
        setExitDirection('forward');
        setEnterDirection('backward');
    }
    const apps = [
        {
            title: "BlissTech",
            description: "A secure, HIPAA-compliant pharmaceutical management platform offering real-time patient data encryption, activity logging, and dynamic user roles. BlissTech is engineered with Electron, allowing it to be seamlessly bundled into a responsive desktop application for both Windows and MacOS platforms. It features an intuitive dashboard for pharmacists and technicians to manage prescriptions, monitor activities, and ensure the utmost patient privacy. With its advanced encryption and logging, BlissTech sets a high standard in safeguarding sensitive medical information. Windows builds are stable, only working on Mac OS Darwin or earlier.",
            image: require('../assets/blisstech.png'),
            platforms: [
                { name: "Windows-x64", link: "https://mongolabs-blisstech.s3.us-west-2.amazonaws.com/BlissTech+1.0.0+x64.exe" },
                { name: "Windows-x32", link: "https://mongolabs-blisstech.s3.us-west-2.amazonaws.com/BlissTech+1.0.0+x32.exe" },
                { name: "Mac", link: "https://mongolabs-blisstech.s3.us-west-2.amazonaws.com/BlissTech-Mac.zip" },
            ],
     
        },
        {
            title: "CyberVerse",
            description: "A meticulously crafted website for a blockchain game on the Ergo network. Showcases in-game characters as NFTs, facilitating web3 wallet connections. The platform is enriched with custom JavaScript features, presenting an interactive UI and ensuring a secure user experience.",
            image: require('../assets/cyberverse.png'),
            link: "https://cybercitizens.io"
        },
        {
            title: "Automations Suite",
            description: "Developed a sophisticated automation system to tackle a surge in incoming data entries. Using Puppeteer for web tasks, coupled with Discord bots and servers for intercommunication, the solution efficiently sorted and categorized data. This strategic integration significantly reduced manual processing, allowing team members to prioritize other vital tasks.",
            image: require('../assets/automations.png'),
            link: "https://gist.github.com/gammahazard/3b65e3d9b6f5bf0b6289d13664abf156"
        },
        {
            title: "To do list in Java",
            description: "A to-do list application leveraging Vaadin for a modern web-based front end while utilizing vanilla Java for the backend logic. This project showcases the fusion of Java's robust backend capabilities with Vaadin's user-centric frontend components to create an interactive to-do list management system.",
            image: require('../assets/java-todo.png'),
            link: "https://github.com/gammahazard/todolist-java"
        }
    ];


    return (
        <div className="home-container" data-testid="app-showcase">
            <motion.div 
                className="overlay"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
       
            />

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
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
    platforms={apps[currentApp].platforms}  // Add this line
    direction={{ exit: exitDirection, enter: enterDirection }}
    onNext={onNext}
    onPrev={onPrev}
/>
    )}
</AnimatePresence>
               
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Footer />
            </motion.div>
        </div>
    );
}

export default React.memo(Home);
