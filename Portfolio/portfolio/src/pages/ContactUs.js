import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../Animation';
import styled from 'styled-components';
import ScrollTop from '../component/ScrollTop';

function ContactUs() {
    return(
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"#fff"}}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div className="socials">
                <Hide>
                <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Send Us A Message</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Send an EMail</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Social Media</h2>
                </Social>
                </Hide>
            </div>
            <ScrollTop />
        </ContactStyle>
    );
}


const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1300px) {
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
    #socials {
        display:flex;
        color: black;
    }
    h2{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 100rem;
    left: 100rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`;

export default ContactUs;