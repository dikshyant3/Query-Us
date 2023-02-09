import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
// import { Tab, Tabs } from "@mui/material";
import image from "../images/signup.png";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      await axios.post("https://queryus-production.up.railway.app/user/register", {
        firstName: credentials.firstName,
        middleName: credentials.middleName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password,
        confirmPassword: credentials.confirmPassword,
      });
      navigate("/login");
    } catch (error) {
      console.log(new Error(error));
    }
  };

  return (
    <>
      <div className="signup_img">
        <img src={image} alt="Signup_image" className="register-img"></img>
      </div>

      <div className="form__container">
        <form onSubmit={handleSubmit}>
          {/* <Tabs
            // value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="Signup" label="Signup" />
            <Tab value="Login" label="Login" />
          </Tabs> */}
          <h2>Register</h2>
          <label htmlFor="username">First Name</label>
          <input type="text" name="firstName" placeholder="Sudarshan" value={credentials.firstName} onChange={handleChange}/>

          <label htmlFor="username">Middle Name</label>
          <input type="text" name="middleName" placeholder="Prasad " value={credentials.middleName} onChange={handleChange}/>

          <label htmlFor="username">Last Name</label>
          <input type="text" name="lastName" placeholder="Devkota" value={credentials.lastName} onChange={handleChange}/>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="PAS076BCT044@wrc.edu.np" value={credentials.email} onChange={handleChange}
          />

          <label htmlFor="Password">Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange}/>

          <label htmlFor="Confirm Password">Confirm Password</label>
          <input type="password" name="confirmPassword" value={credentials.confirmPassword} onChange={handleChange}/>

          <button>Create Account</button>
        </form>
      </div>
    </>
  );
};
export default Signup;
