import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Banner.scss';
import HeroSection from './HeroSection/HeroSection';

function Banner() {
    return (
        <div className='banner__container'>
            <Navbar />
            <HeroSection/>
        </div>
    );
};

export default Banner;