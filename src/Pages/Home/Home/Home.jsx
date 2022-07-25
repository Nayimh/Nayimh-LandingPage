import React from 'react';
import Achivement from '../Achivement/Achivement';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import News from '../News/News';
import Poster from '../Poster/Poster';
import Team from '../TeamSection/Team';
import Banner from './BannerSection/Banner';
import Details from './Details/Details';
import './Home.scss';
import Menubar from './Menubar/Menubar';

function Home() {
  return (
    <div className='home__container'>
      <Menubar/>
      <Banner />
      <Details />
      <Achivement />
      <Features />
      <Team />
     <Poster />
       <News />
       <Footer/> 
      </div>
  )
}

export default Home;