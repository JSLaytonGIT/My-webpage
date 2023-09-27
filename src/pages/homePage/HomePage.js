import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../components/animatedLetters';
import './HomePage.scss';
import Loader from 'react-loaders';

const HomePage = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1 className={letterClass}>Hello there!</h1>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={"I'm ".split('')} idx={11} />
                        <span className='name-animate'>
                            <AnimatedLetters letterClass={letterClass} strArray={'Jonny'.split('')} idx={0} />
                        </span>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={'Software Developer'.split('')} idx={22} />
                    </h1>
                    <h2>Frontend Developer / fullstack Developer</h2>
                    <Link to='/contact' className='flat-button'>Contact</Link>
                </div>
            </div>
            <div className='dust-container'>
                <img src={require('./dust.png')} className='dust' alt='dust' />
                <img src={require('./dust.png')} className='dust' alt='dust' />
                <img src={require('./crack.png')} className='crack' alt='dust' />
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default HomePage;