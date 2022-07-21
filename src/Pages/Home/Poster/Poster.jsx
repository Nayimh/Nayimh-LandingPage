import React from 'react';
import './Poster.scss';
import { Image } from '../../../Image';
import { BsApple } from 'react-icons/bs';

function Poster() {
  return (
      <div className='poster__section'>

          <div className="poster__container">
              <div className="poster__text">
                  <h3>
                  Get Our Aplication
                  </h3>
                  <h1>
                  You Can Easily Find 
This App…!
                  </h1>
                  <p>
                  I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.
                  </p>
              <div className="operetor__container">
            <div className="apple">
              <div className="logo">
                <BsApple/>
              </div>
              <div className="operetor-text">
                <h6>
                  Download On The
                </h6>
                <h5>
                  Apple App
                </h5>
              </div>
            </div>
            <div className="google">
              <div className="google_logo">
                <img src={Image.play} alt="" />
              </div>
              <div className="operator-text">
                <h6>
                Download On The
                </h6>
                <h5>
                  Play Store
                </h5>
              </div>
            </div>
              </div>
              </div>
              
              <div className="poster__image">
                    <img src={Image.mockup} alt="" />
              </div>
              
        </div>
      
      </div>
  )
}

export default Poster