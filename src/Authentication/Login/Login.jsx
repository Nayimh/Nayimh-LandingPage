import React, { useState } from 'react';
import './Login.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserShield } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedinIn } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';



function Login() {

    const [data, setData] = useState({});
    const { loginUser, isLoading, user, authError, googleSignin} = useAuth();

    const location = useLocation();

    const navigate = useNavigate();

    const handleOnchange = (e) => {
       const field = e.target.name;
       const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);

    }

    const handleSubmit = (e) => {

        loginUser(data?.email, data?.password, location, navigate)
        const destination = location?.state?.from || " ";
        navigate?.replace(destination);
        e.target.reset();
        e.preventDefault();
        
        
    }
    
    const handleGoogleSignin = () => {
        googleSignin(location, navigate);
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
                    {!isLoading ? 
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
                        : <p>Loading...</p> }
                    {user?.email && toast.success("successfully logged in", {
                        autoClose: 2000,
                        position : "top-center"
                        }) }
                    <div className="login__footer">

                        <ToastContainer/>

                        <div className='option'>
                           
                            {
                                authError &&<p>{authError}</p> 
                                }
                            <p>new user?</p>
                            <Link to="/register">
                        <button className='register'>Register</button>
                        </Link>
                           

                                <p>-------------- or --------------</p>
                            <div className="icons">
                                <span> <FcGoogle onClick={handleGoogleSignin} /> </span>
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