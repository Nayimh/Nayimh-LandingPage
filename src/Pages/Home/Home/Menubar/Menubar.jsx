import React, { useState } from 'react';
import './Menubar.scss';
import { Image } from '../../../../Image';
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function Menubar() {


  const [ toggle, setToggle ] = useState(true);

  const showMenu = () => {
    setToggle(!toggle)
  };

  return (
    <div className='navbar'>
      <div className="navbar__container">

        <div className="logo">
          <img src={Image.logoImg} alt="" />
          <h1>Netbook</h1>
        </div>
        <div className={`${!toggle ? "navmenu " : "navmenu hide"}`}>
         
          <div className="menu">
          <li id='home_menu'> <p>Home</p> </li>
                        <li id='li_icon'>
                           <p>Community </p>  <span> <img src={Image.vactor} alt="" /> </span> 
                        </li>
                        <li>
                         <p>Blogs</p>   
                        </li>
                        <li>
                           <p>Events</p> 
                        </li>
          </div>
          <div className="menu__cta">
          <div className="input_wrapper">
                        <span className='searchIcon'> <FiSearch /> </span>
                        <input type="text" placeholder='Search Here...'/>
                    </div>
                    <button className="btn">
                        Log in
                    </button>
          </div>
         
        </div>
        <div onClick={showMenu} className="burger_menu">
            {/* <FiMenu /> */}
          {/* <GrClose/> */}
          {
            toggle ? <FiMenu /> : <GrClose/>
          }
                </div>
      </div>
      
      </div>
  )
}

export default Menubar