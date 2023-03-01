import React, { useState } from "react";
import "./Login.css";
// import { Tab, Tabs } from "@mui/material";
import image from "../../images/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toast } from "react-toastify";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  
  const url="https://queryus-production.up.railway.app/user/login";

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post(url, 
      {
        
        username: credentials.username,
        password: credentials.password,
        
      },
      {withCredentials:true});
      const token=res.data.message;
      console.log(token);
      localStorage.setItem('token',token);
      toast.success("Login successfull!")
      navigate("/");
    } catch (error) {
      toast.error("Login failed!")
      console.log({ message: "Bad request" });
    }

  };
  

  return (
    <>
      <div className="login__container">
        <div className="login__image">
          <img src={image} className="login-img" alt="Login_image" />
        </div>

        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="signup-redirect">
              <p>
                Don't have an account yet? <a href="/register">Sign Up</a>
              </p>
            </div>
            {/* Show error message here */}

            
              {/* <label htmlFor="Username">Username</label> */}
              <div className="username">
                <AccountCircleIcon />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* {errors.name && <p style={{color:"red",fontSize:"1rem"}}>{errors.name}</p>} */}

              {/* <label htmlFor="Password">Password</label> */}
              <div className="password">
                <LockIcon />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
            
            {/* <div className="remember-text">
              Remember Me
            </div> */}
            <span className="forgot-password">
              <a href="/">Forgot Password?</a>
            </span>
            <button className="btn" type="submit" >Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
