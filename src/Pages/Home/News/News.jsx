import React from 'react';
import './News.scss';
import { Image } from '../../../Image';
import { BsArrowRightShort } from 'react-icons/bs';

function News() {
  return (
      <div id='events' className='news__container'>
          <div className="news__header">
              <p>
              Get Our Aplication
              </p>
              <h2>
              Latest News
              </h2>
      </div>
      <div className="news__card_container">
        <div className="single__news_card">
          
          <div className="card_img">
              <img src={Image.chart} alt="" />
          </div>
          <div className="card_content">
          <div className="card_heading">
            <div className="line">
                <img src={Image.line} alt="" />
            </div>
            <div className="text">
              <h2>
              It Does Not Matter Hows Slowly go as Long
                </h2>
                <div className="continue">
                <p>Continue Reading</p> <span> <BsArrowRightShort/> </span>
              </div>
              </div>
              
            </div>
             
          </div>
        </div>
        <div className="single__news_card">
          
          <div className="card_img">
              <img src={Image.kid} alt="" />
          </div>
          <div className="card_content">
          <div className="card_heading">
            <div className="line">
                <img src={Image.line} alt="" />
            </div>
            <div className="text">
              <h2>
              Netbook Network Added New Photo Filter
                </h2>
                <div className="continue">
                <p>Continue Reading</p> <span> <BsArrowRightShort/> </span>
              </div>
              </div>
              
            </div>
             
          </div>
        </div>
        <div className="single__news_card">
          
          <div className="card_img">
              <img src={Image.check} alt="" />
          </div>
          <div className="card_content">
          <div className="card_heading">
            <div className="line">
                <img src={Image.line} alt="" />
            </div>
            <div className="text">
              <h2>
              We Optimised Netbooks Better Navigation
                </h2>
                <div className="continue">
                <p>Continue Reading</p> <span> <BsArrowRightShort/> </span>
              </div>
              </div>
              
            </div>
             
          </div>
        </div>
      </div>
      </div>
  )
}

export default News