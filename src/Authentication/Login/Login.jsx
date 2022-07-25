import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserShield } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

import { FaLinkedinIn } from 'react-icons/fa';



function Login() {

    const [data, setData] = useState({});

    const handleOnchange = (e) => {
       const field = e.target.name;
       const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);

    }

    const handleSubmit = (e) => {

        console.log(data);
        e.target.reset();
        e.preventDefault();
        
        
    }

    return (
        <div className='login'>
            <div className="login__card">
                <div className="login__card--content">
                    <div className="login__heading">
                        <h3>

                        <FaUserShield/>
                        </h3>
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}  className="login__form">
                        <div className="login__email">
                            <span> <AiOutlineMail /> </span> 
                            <input onChange={handleOnchange} type="email" name='email' id='email' placeholder='Enter Your Email' required/>
                        </div>
                        <div className="login__password">
                            <span> <BiLock /> </span>
                            <input onChange={handleOnchange} type="password" name='password' id='password' placeholder='Enter Your Password' required/>
                        </div>
                        <div className="login__button">
                            <button  type='submit'>
                                Login
                            </button>

                        </div>
                    </form>
                   
                    <div className="login__footer">

                        

                        <div className='option'>

                            <p>new user?</p>
                            <Link to="/register">
                        <button className='register'>Register</button>
                        </Link>
                           

                                <p>-------------- or --------------</p>
                            <div className="icons">
                                <span> <FcGoogle/> </span>
                                <span> <BsTwitter /> </span>
                                <span> <FaLinkedinIn/> </span>  <span> <BsInstagram/>
                                </span>  </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;