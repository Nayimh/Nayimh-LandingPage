import React from 'react';
import './Team.scss';
import { Image } from '../../../Image';
import { IoIosCheckmark } from "react-icons/io";

function Team() {
  return (
      <div className='team__section'>
          <div className="team__section--container">
              
          
          <div className="team__heading_container">
              <h3>
              Valuable Team
              </h3>

                  <h1>
                  Our Active Members
                  </h1>

                  <p>
                  when an unknown printer took a galley of type and meeting fari scrambled it.
                  </p>
                  
              </div>

              <div className="button_container">
                  <div className="single__button">
                      <button>Newest</button>
                  </div>
                  <div className="single__button">
                      <button>Popular</button>
                  </div>
                  <div className="single__button">
                      <button>Active</button>
                  </div>
              </div>
              <div className="team__card__wrapper">
                  <div className="single__team-card">
                      <div className="team__image">
                          <img src={Image.person} alt="" />
                            <IoIosCheckmark/>
                            
                         
                      </div>
                      
                      <div className="team__text">
                          <h2>
                          Fahim Rahman
                          </h2>
                          <p>
                          @rahman
                          </p>
                      </div>
                  </div>
                  <div className="single__team-card">
                      <div className="team__image">
                          <img src={Image.person2} alt="" />
                            <IoIosCheckmark/>
                            
                         
                      </div>
                      
                      <div className="team__text">
                          <h2>
                          Kazi Rahman
                          </h2>
                          <p>
                          @Rahman
                          </p>
                      </div>
                  </div>
                  <div className="single__team-card">
                      <div className="team__image">
                          <img src={Image.person3} alt="" />
                            <IoIosCheckmark/>
                            
                         
                      </div>
                      
                      <div className="team__text">
                          <h2>
                          Masterero Ali
                          </h2>
                          <p>
                          @Master
                          </p>
                      </div>
                  </div>
                  <div className="single__team-card">
                      <div className="team__image">
                          <img src={Image.person4} alt="" />
                            <IoIosCheckmark/>
                            
                         
                      </div>
                      
                      <div className="team__text">
                          <h2>
                          Alia Karon
                          </h2>
                          <p>
                          @Alia
                          </p>
                      </div>
                  </div>
              </div>
              </div>
    </div>
  )
}

export default Team