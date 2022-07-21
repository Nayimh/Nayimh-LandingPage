import React from 'react';
import "./HeroSection.scss";
import { Image } from '../../../../../Image/index';
function HeroSection() {
  return (
      <div className='Hero__section--container'>
          <div className='hero__text--wrapper'>
              <button className="hero__btn-top">
                  <p>Netbook community</p>
              </button>
              <div className="hero__text">
                  <h1>
                  Your Solutions For  Community!
                  </h1>
                  <p>
                  More than 2 billion people in over countries use socibook  to stay in touch with friends & family.
                  </p>
              </div>
              <div className="hero__btn--bottom">
                  <button className='hero_btn-filled'>About More</button>
                  <button className='hero-btn-outline'>Invite Friend</button>
              </div>
          </div>
          <div className='hero__img-wrapper'>
              <img src={Image.hero} alt="" />
          </div>
      </div>
  )
}

export default HeroSection