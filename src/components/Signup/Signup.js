import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Tab from "../Tabs/Tab";
import image from "../../images/signup.png";
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
      await axios.post(
        "https://queryus-production.up.railway.app/user/register",
        {
          firstName: credentials.firstName,
          middleName: credentials.middleName,
          lastName: credentials.lastName,
          email: credentials.email,
          password: credentials.password,
          confirmPassword: credentials.confirmPassword,
        }
      );
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

      <div className="signupform__container">
          <Tab/>
        <form onSubmit={handleSubmit}>
          
        <h2>Register</h2>

          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Sudarshan"
            value={credentials.firstName}
            id="firstName"
            onChange={handleChange}
            required
          />

          {/* <div className="middleName"> */}
          <label className="label" htmlFor="middleName">
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            placeholder="Prasad"
            value={credentials.middleName}
            onChange={handleChange}
            required
          />
          {/* </div> */}
          {/* <div className="lastName"> */}
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Devkota"
            value={credentials.lastName}
            onChange={handleChange}
            required
          />
          {/* </div> */}
          {/* <div className="email"> */}
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="PAS076BCT044@wrc.edu.np"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          {/* </div> */}
          {/* <div className="security"> */}
          <label className="label" htmlFor="Password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            id="Password"
            required
          />
          {/* </div> */}
          {/* <div className="cpassword"> */}
          <label className="label" htmlFor="ConfirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={credentials.confirmPassword}
            onChange={handleChange}
            required
          />
          {/* </div> */}
          <button className="signup-btn" type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
};
export default Signup;
