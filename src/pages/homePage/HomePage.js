import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLetters from '../../components/animatedLetters';
import Loader from 'react-loaders';
import { motion } from 'framer-motion';
import Particles from "react-particles";
import particlesConfig from "../../config/particlesConfig";
import ParticleBackground from '../../components/particleBackground/ParticleBackground';
import './HomePage.scss';


const HomePage = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [contactClick, setContactClick] = useState('flat-button');
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [flashlightRadius, setFlashlightRadius] = useState(100);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setCursorX(clientX - 150);
        setCursorY(clientY - 150);
    };

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 8000)
    }, [])

    const handleContactClick = () => {
        setContactClick('flat-button-animate');

         setTimeout(() => {
             navigate('/contact');
         }, 3500);
    };

    return (
        <motion.div 
            key={"my_unique_key"}
            exit={{ opacity:0 }}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container home-page" onMouseMove={handleMouseMove}>
                <div className="text-zone">
                    <h1 className={letterClass}>Hello there!</h1>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={"I'm ".split('')} idx={11} />
                        <span className='name-container'>
                            <span className='name-animate'>
                                <AnimatedLetters letterClass={letterClass} strArray={'Jonny,'.split('')} idx={0} />
                                {letterClass === 'text-animate' && (<>
                                    <img src={require('./assets/dust.png')} className='dust' alt='dust' />
                                    <img src={require('./assets/dust.png')} className='dust' alt='dust' />
                                    <img src={require('./assets/crack.png')} className='crack' alt='dust' />
                                </>)}
                            </span>
                        </span>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={'Software Developer'.split('')} idx={22} />
                    </h1>
                    <h2>Frontend Developer / fullstack Developer</h2>
                    <button to='/contact' onClick={handleContactClick} className={contactClick}>Contact</button>
                </div>
                {/* <div className="image-container">
                    <ParticleBackground className="hidden-image" style={{clipPath: `circle(${flashlightRadius}px at ${cursorX}px ${cursorY}px)`}} />
                </div> */}
                
            </div>
            
            <Loader type="ball-scale-ripple-multiple" />
        </motion.div>
    )
}

export default HomePage;