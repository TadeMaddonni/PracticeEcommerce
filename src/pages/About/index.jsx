import React from 'react'
import AboutusHero from '../../components/Aboutus/hero'
import AboutusNewsletter from '../../components/Aboutus/Newsletter'
import AboutusFirstSection from '../../components/Aboutus/Section1'
import AboutusSecondSection from '../../components/Aboutus/Section2'
import './styles.css'

const Aboutus = () => {
    return (
        <div className='aboutUs'>
            {/* title */}
            <AboutusHero />
            {/* Section1 */}
            <AboutusFirstSection />
            {/* Section2 */}
            <AboutusSecondSection />
            {/* NewsletterSubscription */}
            <AboutusNewsletter />
        </div>
    )
}

export default Aboutus