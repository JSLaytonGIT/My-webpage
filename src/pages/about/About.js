import { useState, useEffect } from "react";
import AnimatedLetters from "../../components/animatedLetters";
import Loader from "react-loaders";
import { motion } from 'framer-motion';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <motion.div 
            key={"my_unique_key"}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={'About me'.split('')} idx={15} />
                    </h1>
                    <p>I am an ambitious software developer with over three years of experience in the tech and corporate banking industries. Has worked with a variety of tools and languages in both front-end and back-end development, including: JavaScript, Java, Spring-Boot and React.</p>
                    <p>In addition to experience working on-site and the professional training at the beginning of his career, he has also taken time to obtain external certifications in Java, business analysis, and project management. He is highly motivated and always keen to learn new languages and skills, whilst finding new ways to solve problems. He hopes to become a part of a team that values exploration and growth.</p>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </motion.div>
    )
}

export default About;