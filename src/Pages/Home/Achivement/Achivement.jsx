import React from 'react';
import './Achivement.scss';
import { BsArrowRightShort } from 'react-icons/bs';
import { Image } from '../../../Image/index';
function Achivement() {
    return (
        <div className='Achivement__container'>
            <div className='achivement__card'>
                <div className="single__card">
                    <div className="rating__container">
                        <div className='icon'>
                               <img src={Image.star} alt="" />
                        </div>
                        <div className='rating'>
                           <h1>4.8 Rating</h1> 
                        </div>
                    </div>
                    <div className="member__wrapper">
                            <div className="member__img">
                                    <img src={Image.people} alt="" />
                            </div>
                            <div className="member__count">
                                   <p> <span className='blue'>+836k</span> Members</p>
                            </div>
                    </div>
                    
                    <p> More than 2 billion we people over countries use socibooks we to stay in touch with friends. </p>
                    <div className="join">
                    <h3>
                    Join Our Community 
                        </h3>
                        <span> <BsArrowRightShort/> </span>
                    </div>
                </div>
                <div className="single__card">
                    <div className="rating__container">
                        <div className='icon'>
                               <img src={Image.trophy} alt="" />
                        </div>
                        <div className='rating'>
                           <h1>Awwwards</h1> 
                        </div>
                    </div>
                    <div className="member__wrapper">
                            <div className="member__img">
                                    <img src={Image.gitHub} alt="" />
                            </div>
                            <div className="member__count">
                                   <p>Best of   <span className='blue'>2021</span> on Github</p>
                            </div>
                    </div>
                    
                    <p> More than 2 billion we people over countries use socibooks we to stay in touch with friends. </p>
                    <div className="join">
                    <h3>
                    Join Our Community 
                        </h3>
                        <span> <BsArrowRightShort/> </span>
                    </div>
                </div>
            </div>
            <div className='achivement__content'>
                <p>Our Achievement</p>
                <h1>We are Connecting You The Digital Life.</h1>
                <h3>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</h3>
                <button className='btn_bottom'>Discover me <span className='arrow'><BsArrowRightShort/> </span> </button>
            </div>
        </div>
    );
};

export default Achivement;