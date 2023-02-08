import React from 'react'
import './Favorites.css';
import Pins from '../Pins';

function AboutMe() {
    const myStyle={
        backgroundImage: 
        "url(/images/Bebop1.jpeg)",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <video src='/videos/pikachu.mp4' autoPlay loop muted />
            <h1 className='about-me-heading'>
                I am Awesome
            </h1>
            <Pins
                src='images/collage.jpeg'
                text='Collage'
                label='October 2022'
                path='/about-me'
            />
        </div>
  )
}

export default AboutMe