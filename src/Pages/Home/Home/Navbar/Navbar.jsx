import React from 'react';
import './Navbar.scss';
import { Image } from "../../../../Image/index";

import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function Navbar() {
    return (
        <div className='navbar__container'>
            <div className="nav_wrapper">
                <div className='menu__wrapper'>
                <div className="logo">
                <img src={Image.logo} alt="" />

                        </div>
                  
                    
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
                    
                </div>
                <div className='button__wrapper'>
                    <div className="input_wrapper">
                        <span className='searchIcon'> <FiSearch /> </span>
                        <input type="text" placeholder='Search Here...'/>
                    </div>
                    <button className="btn">
                        Log in
                    </button>
                </div>
                    
                

                <div className="burger_menu">
            <FiMenu/>
                {/* <GrClose/> */}
                </div>

            </div>
        </div>
    );
};

export default Navbar;