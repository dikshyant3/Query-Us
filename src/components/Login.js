import React from "react";
import "./Login.css";
// import { Tab, Tabs } from "@mui/material";
import image from "../images/login.png";
const Login = () => {
  
  return (
    <>
      <div className="login__container">
        <div className="login__image">
          <img src={image} classname="login-img" alt="Login_image" />
        </div>

        <div className="form__container">
          <form>
            <h2>Login</h2>
            <div className="signup-redirect">
              <p>Don't have an account yet? <a href="/">Sign Up</a></p>
             
            </div>
            <div className="username">
              <label htmlFor="Username">Username</label>
              <input type="text" />
            </div>
            <div className="password">
              <label htmlFor="Password">Password</label>
              <input type="password" />
            </div>
            {/* <div className="remember-text">
              Remember Me
            </div> */}
            <span className="forgot-password">
              <a href="/">Forgot Password?</a>
            </span>
            <button className="btn">Login</button>
          </form>
        </div>
      </div> 

    </>
  );
};
export default Login;
