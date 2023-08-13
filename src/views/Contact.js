import React from 'react';
import Navbar from '../components/Navbar';  // Assuming Navbar is in a components directory
import Footer from '../components/Footer';  // Assuming Footer is in a components directory
import './Contact.css';
import { motion, AnimatePresence } from 'framer-motion';
function Contact() {
    return (
        <div className="contact-page">
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
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to work with us, please drop us a message:</p>
                
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
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

export default Contact;
