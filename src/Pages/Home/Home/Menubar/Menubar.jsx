import React, { useState } from 'react';
import './Menubar.scss';
import { Link } from 'react-router-dom';
import { Image } from '../../../../Image';
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import useAuth from '../../../../Authentication/hooks/useAuth';

function Menubar() {

  const {user, logout} = useAuth();

  const [ toggle, setToggle ] = useState(true);

  const showMenu = () => {
    setToggle(!toggle)
  };

  return (
    <div  className='navbar'>
      <div className="navbar__container">

        <div className="logo">
          <img src={Image.logoImg} alt="" />
          <h1>Netbook</h1>
        </div>
        <div className={`${!toggle ? "navmenu " : "navmenu hide"}`}>
         
          <div className="menu">
          <li id='home_menu'>  <p> <a href="#banner">Home</a> </p> </li>
                        <li id='li_icon'>
                        <p> <a href="#details">Community</a> </p>  <span> <img src={Image.vactor} alt="" /> </span> 
                        </li>
                        <li>
                         <p> <a href="#blogs">Blogs</a> </p>   
                        </li>
                        <li>
                           <p> <a href="#events">Events</a> </p> 
                        </li>
          </div>
          <div className="menu__cta">
          <div className="input_wrapper">
                        <span className='searchIcon'> <FiSearch /> </span>
                        <input type="text" placeholder='Search Here...'/>
                    </div>
                    { user?.email ? <button onClick={logout} className="btn">
                      Logout
            </button> :
              <Link to="/login"> <button className="btn">
              Log in
              </button> </Link>
             
            }
          
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