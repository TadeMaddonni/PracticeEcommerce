import React from 'react'
import ContactForm from '../../components/Contact/Form';
import ContactHero from '../../components/Contact/Hero';
import './styles.css'

const Contact = () => {
    return (
        <div className="contactContainer">
            {/* Hero */}
            <ContactHero />
            {/* Form */}
            <ContactForm /> 
        </div>
    );
}

export default Contact