import './Contact.scss';
import { useState, useEffect, useRef } from 'react';
import Loader from "react-loaders";
import AnimatedLetters from "../../components/animatedLetters";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_53uz04o','template_fvxafxw',refForm.current,'LJrIxDFcUWw80OlAH')
            .then(() => {
                alert('Message successful')
                window.location.reload(false)
            },
            (error) => {
                alert('Failed to send the message')
                console.log('Error: ', error)
            })
            .catch(err => console.error('Error:', err))
    }

    return (
        <motion.div 
            key={"my_unique_key"}
            exit={{ opacity:0 }}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 0.7 }}
        >
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={'Contact me'.split('')} idx={15} />
                    </h1>
                    <p>
                        I am interested in new opportunities for developement in React. If you have any questions, please do not hesitate to message me.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jonathan Layton,
                    <br />
                    London, United Kingdom,
                    <br />
                    JSLayton@protonmail.com
                </div>
                <div className='map-wrapper'>
                    <MapContainer center={[51.5080, -0.1281]} zoom={12}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[51.5080, -0.1281]}>
                            <Popup>I am a London-based developer</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </motion.div>
    )
}

export default Contact;