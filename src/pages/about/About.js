import { useState, useEffect } from "react";
import AnimatedLetters from "../../components/animatedLetters";
import Loader from "react-loaders";
import { motion } from 'framer-motion';
import Portfolio from "../portfolio/Portfolio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown,  faHandPointRight} from '@fortawesome/free-solid-svg-icons';
import { RemoveScroll } from 'react-remove-scroll';
import Deck from "../../components/deck";
import cardbox from './assets/cardboxNoBackground.png';
import './About.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [cardboxClicked, setCardboxClicked] = useState(false);
    const [showDeck, setShowDeck] = useState(false);
    const [flashIcon, setFlashIcon] = useState(false);

    const handleSixthCardClick = () => {
        setTimeout(() => {
            setFlashIcon(true);
        }, 2500);
    };

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const handleCardboxClick = () => {
        setCardboxClicked(true);
        setTimeout(() => {
            setShowDeck(true);
        }, 2000);
    }

    const handleDownClick = () => {
        const portfolioAnchor = document.querySelector('#portfolio')
        portfolioAnchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleUpClick = () => {
        const portfolioAnchor = document.querySelector('#about')
        portfolioAnchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return(
        <motion.div 
            key={"aboutt"}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container about-page">
                <div className="about-half" id='about'>
                    <div className="down-arrow">
                        <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" onClick={handleDownClick} className={flashIcon ? 'flash-icon' : ''}/>
                    </div>
                    <RemoveScroll>
                        <div className="text-zone">
                            <h1>
                                <AnimatedLetters letterClass={letterClass} strArray={'About me'.split('')} idx={15} />
                            </h1>
                            <p>I am an ambitious software developer with over three years of experience in the tech industry. I have worked with a variety of tools and languages in both front-end and back-end development. You'll find a selection of these over here: &nbsp;<FontAwesomeIcon icon={faHandPointRight} size="sm" className="rightTextArrow" /></p>
                            <p>In addition to experience working on-site, I have also taken time to obtain external certifications in Java, business analysis, and project management. I am highly motivated and always keen to learn new languages and skills, while finding new and interesting ways to solve the problems I come across.</p>
                        </div>
                    </RemoveScroll>
                    {!showDeck && <div className="cardbox">
                        <img src={cardbox} alt='cardbox' className={cardboxClicked ? 'slide-out' : 'still'} onClick={handleCardboxClick} />
                    </div>}
                    {showDeck && <div className="swipecards">
                        <Deck onSixthCardClick={handleSixthCardClick} />
                    </div>}
                </div>
                <div className="portfolio-container" id='portfolio'>
                    <Portfolio handleClick={handleUpClick} />
                </div>
            </div>
            <div className="loader-container">
                <Loader type="ball-scale-ripple-multiple" />
            </div>
        </motion.div>
    )
}

export default About;