import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import './About.css';
import { motion, AnimatePresence } from 'framer-motion';
function About() {
    return (
        <div className="about-page">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Navbar />
            </motion.div>

            <div className="gradient-containera">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="about-container">
                <h2>About Mongo</h2>
                <section className="intro-section">
    <h3>Introduction</h3>
    <p>
        With an unwavering spirit and an innate ability to bounce back stronger, I stand not merely as a developer but as a forward-thinker. My resilience in the face of challenges and an insatiable hunger for knowledge shapes my approach to web technologies. Every milestone I achieve reaffirms my commitment to reinvent the contours of the digital realm.
    </p>
</section>

<section className="education-section">
    <h3>Education</h3>
    <p>
        My educational trajectory paints a picture of diversity and evolution. Beginning with a Bachelor of Science in Kinesiology, I delved into the complexities of human motion. Subsequently, my Bachelor of Education journey highlighted the essence of continuous growth, emphasizing the significance of lifelong learning. As my fascination gravitated towards technology, I embarked on a Bachelor in Computer Science, a journey I am currently navigating. Additionally, to further hone my web development prowess, I'm a proud alumnus of the renowned web development bootcamp at UoFT. Each chapter of my academic story enriches my multifarious aptitude as a developer.
    </p>
</section>

<section className="skills-section">
    <h3>Skills & Technologies</h3>
    <p>
        At the heart of my expansive technical toolkit lies JavaScript. From crafting meticulous solutions with Vanilla JS to mastering renowned frameworks like React, Vue, Nuxt, Next, Astro, and beyond, I'm adept and versatile. My adaptability shines through as I rapidly assimilate and harness new packages, ensuring that every solution I deliver is both cutting-edge and exacting.
    </p>
</section>

<section className="current-role-section">
    <h3>Current Role</h3>
    <p>
        At present, I'm immersed in the vibrant world of <a href="https://metafrontier.xyz" target="_blank" rel="noopener noreferrer">Metafrontier</a>. Here, I seamlessly transition between roles – from community moderation to spearheading software development. Additionally, my expertise extends to <a href="https://cybercitizens.io" target="_blank" rel="noopener noreferrer">CyberVerse</a>, where I serve as a linchpin in website and backend development, breathing life into conceptual visions.
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
        </div>
    );
}

export default About;
