import React from 'react';
import Menubar from '../Menubar/Menubar';
// import Navbar from '../Navbar/Navbar';
import './Banner.scss';
import HeroSection from './HeroSection/HeroSection';

function Banner() {
    return (
        <div className='banner__container'>
            {/* <Navbar /> */}
            <Menubar/>
            <HeroSection/>
        </div>
    );
};

export default Banner;