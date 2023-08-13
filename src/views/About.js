import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import './About.css';
import { motion, AnimatePresence } from 'framer-motion';
function About() {
    return  (
        <div className="about-page">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Navbar />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }} // Added delay of 0.5 seconds here
            >
                <div className="about-container">
                <h2>About Mongo</h2>
                <section className="intro-section">
    <h3>Introduction</h3>
    <p>
        A testament to continuous growth and diversification, I am not just a developer, but a visionary. My journey has been carved by relentless passion, a thirst for knowledge, and an unwavering commitment to shaping the future of web technologies. Every project I undertake is a step forward in my quest to push the boundaries of what's possible.
    </p>
</section>

<section className="education-section">
    <h3>Education</h3>
    <p>
        My academic path has been nothing short of diverse. I hold a Bachelor of Science in Kinesiology, which gave me insights into the intricacies of human movement. Following that, I pursued a Bachelor of Education, during which I worked as a supply teacher for public school boards, enriching young minds. As my interest pivoted to technology, I embarked on a Bachelor in Computer Science. To bolster my web development skills, I graduated from the esteemed web development bootcamp at UoFT. Each phase of my education has added a unique layer to my skill set, making me a multifaceted developer.
    </p>
</section>

<section className="experience-section">
    <h3>Experience</h3>
    <p>
        My professional landscape is a blend of diverse projects. From creating interactive frontend designs that captivate users to developing robust backend APIs using NodeJS and JavaScript, I've done it all. My expertise isn't limited to web design; I've dabbled in automation, data collection, and even ventured into hardware, setting up temperature-sensitive systems with Raspberry Pi. Every challenge encountered has been a learning opportunity, amplifying my proficiency in the domain.
    </p>
</section>

<section className="skills-section">
    <h3>Skills & Technologies</h3>
    <p>
        My toolkit is expansive, but JavaScript remains at its core. Whether it's crafting custom solutions with Vanilla JS or navigating the frameworks like React, Vue, Nuxt, Next, and Astro, I'm at home. My agility in the tech realm is underscored by my ability to swiftly grasp and apply new packages, ensuring that I always deliver precise and innovative solutions.
    </p>
</section>

<section className="current-role-section">
    <h3>Current Role</h3>
    <p>
        Currently, I am navigating the dynamic ecosystem of <a href="https://metafrontier.xyz" target="_blank" rel="noopener noreferrer">Metafrontier</a>, where I wear multiple hats – from community moderator to in-house software developer. My contributions extend to <a href="https://cybercitizens.io" target="_blank" rel="noopener noreferrer">CyberVerse</a>, where I play a key role as a website and backend developer, transforming visions into digital realities.
    </p>
</section>

            </div>
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

export default About;
