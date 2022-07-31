import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsInstagram, BsTwitter } from "react-icons/bs";

import { FaLinkedinIn } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

function Register() {
  const [data, setData] = useState({});

  const { registerUser, isLoading, googleSignin } = useAuth();
  const navigate = useNavigate();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[field] = value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    if (data.password !== data.password2) {
      alert("password did not matched!");
      return;
    }

    registerUser(data?.email, data?.password, data?.name, navigate);

    e.target.reset();
    e.preventDefault();
  };

    const signinWithGoogle = () => {
        googleSignin();
    }
    
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card--content">
          <div className="login__heading">
            <h3>{/* <FaUserShield/> */}</h3>
            <h1>Register</h1>
          </div>
          {!isLoading ? (
            <form onSubmit={handleSubmit} className="login__form">
              <div className="login__email">
                <span>
                  {" "}
                  <FaUserShield />{" "}
                </span>
                <input
                  onChange={handleOnchange}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="login__email">
                <span>
                  {" "}
                  <AiOutlineMail />{" "}
                </span>
                <input
                  onChange={handleOnchange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="login__password">
                <span>
                  {" "}
                  <BiLock />{" "}
                </span>
                <input
                  onChange={handleOnchange}
                  type="password"
                  name="password"
                  id="p"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="login__password">
                <span>
                  {" "}
                  <BiLock />{" "}
                </span>
                <input
                  onChange={handleOnchange}
                  type="password"
                  name="password2"
                  id="p2"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="login__button">
                <button type="submit">Register</button>
              </div>
            </form>
          ) : (
            <p>Loading...</p>
          )}
          )
          <div className="login__footer">
            <div className="option">
              <p>new user?</p>

              <Link to="/login">
                <button className="register">Login</button>
              </Link>
              <p>---------- or ----------</p>
              <div className="icons">
                <span>
                  {" "}
                  <FcGoogle onClick={signinWithGoogle}/>{" "}
                </span>
                <span>
                  {" "}
                  <BsTwitter />{" "}
                </span>
                <span>
                  {" "}
                  <FaLinkedinIn />{" "}
                </span>{" "}
                <span>
                  {" "}
                  <BsInstagram />
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
