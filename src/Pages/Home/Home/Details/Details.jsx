import React from 'react';
import './Details.scss';
import { Image } from '../../../../Image/index';
function Details() {
    return (
        <div id='details' className='details__container'>
            <div className='details__text-wrapper'>
                <p>Whats Netboks?</p>
                <h2>
                Why Join to Netbook <br /> Social Network?
                </h2>
                <h3>
                Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.
                </h3>
                <div>
                    <li><span>Group</span></li>
                    <li><span>Message</span></li>
                    <li><span>Share</span></li>
                </div>
           </div>
            <div className='details__img-wrapper'>
                <div className="img_wrapper-left">
                    <div>
                        <img className='group_img' src={Image.group} alt="" />  
                        <div className="play_btn">
                    <img  src={Image.rectangle} alt=""  />    

                        </div>
                    </div>
                </div>
                <div className="img_wrapper-right">
                    <div className='img_wrapper-right-one'>
                        <img src={Image.laptop} alt="" />
                        <div className="play_btn">
                    <img  src={Image.rectangle} alt=""  />    

                        </div>
                    </div>
                    <div className='img_wrapper-right-two'>
                    <img src={Image.wire} alt="" />
                    <div className="play_btn">
                    <img  src={Image.rectangle} alt=""  />    

                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Details;