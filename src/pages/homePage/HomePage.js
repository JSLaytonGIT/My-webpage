import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLetters from '../../components/animatedLetters';
import Loader from 'react-loaders';
import { motion } from 'framer-motion';
import ProfilePic from './assets/profilePic.jpg';
import ParticleBackground from '../../components/particleBackground/ParticleBackground';
import './HomePage.scss';


const HomePage = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [contactClick, setContactClick] = useState('flat-button');
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [torchRadius, setTorchRadius] = useState(100);
    const [bellClick, setBellClick] = useState(false);
    const [torchClicked, setTorchClicked] = useState(false);
    const [bellClass, setBellClass] = useState('bell');
    const [torchClass, setTorchClass] = useState('torch');
    const [particles, setParticles] = useState(false);

    const handleMouseMove = (mousePosition) => {
        const { clientX, clientY } = mousePosition;
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const xPixels = vw * 0.14;
        const yPixels = vh * 0.198;
        setCursorX(clientX - xPixels);
        setCursorY(clientY - yPixels);
    };

    const handleBellClick = () => {
        setBellClick(true);
        setBellClass('bell bell-vanish');
    };

    const handleTorchClick = () => {
        setTorchClicked(true);
        setTorchClass('torch torch-vanish');
    };

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            setParticles(true);
        }, 7000)
    }, [])

    const handleContactClick = () => {
        setContactClick('flat-button-animate');

         setTimeout(() => {
             navigate('/contact');
         }, 3500);
    };

    return (
        <motion.div 
            key={"homepage"}
            exit={{ opacity:0 }}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container home-page" onMouseMove={handleMouseMove} >
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

                    {particles && <div className="particles-container">
                        <ParticleBackground className="hidden-image" circle='true' />
                        <div className='profilePic-container'>
                            {torchClicked && <img src={ProfilePic} alt='me' className='hidden-image torch-image-animated' style={{clipPath: `circle(${torchRadius}px at ${cursorX}px ${cursorY}px)`}} />}
                        </div>
                    </div>}
                    
                    {bellClick && <div className='torch-container'> 
                        <img src={require('./assets/hand.png')} alt='hand' className='hand' />
                        <img src={require('./assets/torch.png')} alt='torch' className={torchClass} onClick={handleTorchClick} />
                        <div className='trapezoid-container'>
                            {torchClicked && <div className='trapezoid light-animated' />}
                        </div>
                    </div>}
                </div>
                <img src={require('./assets/bell.png')} alt='bell' className={bellClass} onClick={handleBellClick} />
            </div>
            
            <Loader type="ball-scale-ripple-multiple" />
        </motion.div>
    )
}

export default HomePage;