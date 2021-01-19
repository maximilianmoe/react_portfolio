import React from 'react';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import FAQSection from '../component/FAQSection';
import GlobalStyle from '../component/GlobalStyle';
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';
import ScrollTop from '../component/ScrollTop';

function AboutUs() {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <GlobalStyle/>
            <AboutSection />
            <ServicesSection/>
            <FAQSection />
            <ScrollTop />
        </motion.div>
    );
}

export default AboutUs;