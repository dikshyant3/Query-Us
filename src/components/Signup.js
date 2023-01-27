import React from "react";
import "./Signup.css";
import { Tab, Tabs } from "@mui/material";
import image from "../images/signup.png";
const Signup = () => {
  const handleChange = () => {
    console.log("HI");
  };
  return (
    <>
      <div className="signup_img">
        <img src={image} alt="Signup_image" className="register-img"></img>
      </div>

      <div className="form__container">
        <form>
          <Tabs
            // value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="Signup" label="Signup" />
            <Tab value="Login" label="Login" />
          </Tabs>
          <h2>Register</h2>
          <label htmlFor="username">Name</label>
          <input type="text" name="name" placeholder="Name" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Email" />

          <label htmlFor="number">Phone Number</label>
          <input type="number" name="phone_number" />

          <select name="user_type" required>
            <option value="" disabled selected hidden>
              User
            </option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>

          <label htmlFor="Password">Password</label>
          <input type="password" name="password" />

          <label htmlFor="Confirm Password">Confirm Password</label>
          <input type="password" name="Confirm_Password" />

          <button>Create Account</button>
        </form>
      </div>
    </>
  );
};
export default Signup;
