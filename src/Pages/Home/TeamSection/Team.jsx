import React from 'react';
import './Team.scss';

import { IoIosCheckmark } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';

function Team() {

    const [membes, setMember] = useState([]);

  

    useEffect(() => {
        fetch("./team.json")
            .then(resp => resp.json())
            .then(dt => setMember(dt))
    })

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
                  <div  className="single__button">
                      <button>Newest</button>
                  </div>
                  <div  className="single__button">
                      <button>Popular</button>
                  </div>
                  <div  className="single__button">
                      <button>Active</button>
                  </div>
              </div>
              <div  className="team__card__wrapper">
                  {
                      
                      membes.map(member => 
                       
                        <div key={member?.id}  className="single__team-card">
                      <div className="team__image">
                          <img src={member.img} alt="" />
                            <IoIosCheckmark/>
                            
                         
                      </div>
                      
                      <div className="team__text">
                          <h2>
                        {member?.name}
                          </h2>
                          <p>
                         {member?.email}
                          </p>
                      </div>
                  </div>
                        )
                  }
                 
              </div>
              </div>
    </div>
  )
}

export default Team