import React from 'react';
import Navbar from '../components/Navbar';  // Assuming Navbar is in a components directory
import Footer from '../components/Footer';  // Assuming Footer is in a components directory
import './Contact.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xoqoekrq");
    const [isSending, setIsSending] = useState(false);
    const [submitted, setSubmitted] = useState(false); // New state variable

    useEffect(() => {
        if (state.submitting) {
            setIsSending(true);
        }

        if (state.succeeded) {
            setIsSending(false);
            setSubmitted(true); // Mark the form as submitted
        }

        if (!state.succeeded && !state.submitting) {
            setIsSending(false); // Reset the sending state if there's an error
        }

    }, [state.submitting, state.succeeded]);

    if (submitted) {
        return <p>Message Sent! Please wait 1-3 business days for a reply.</p>;
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            {isSending ? (
                <p>Sending Message...</p>
            ) : (
                <button type="submit" disabled={state.submitting}>
                    Send
                </button>
            )}
        </form>
    );
}


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

            <div className="gradient-container"> {/* Adding the gradient container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }} 
                >
                    <div className="contact-container">
                        <h2>Contact</h2>
                        <p>If you would like to see my resume or if you have any other questions, please contact me below:</p>
                        <ContactForm />
                    </div>
                </motion.div>
            </div> {/* End of gradient container */}

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
