import React, { useState } from "react";
import image from "../../images/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { toast } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const url = "https://queryus-production.up.railway.app/user/login";

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!credentials.username.trim()) {
      return toast.error("Username is required!");
    }
    
    if (!credentials.password.trim()) {
      return toast.error("Password is required!");
    }
  
    
    try {
      const res = await axios.post(
        url,
        {
          username: credentials.username,
          password: credentials.password,
        },
        { withCredentials: true }
      );
      const token = res.data.message;
      console.log(token);
      localStorage.setItem("token", token);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed!");
      console.log({ message: "Bad request" });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-2 bg-background min-h-screen">
        <div className="container flex flex-col items-center justify-center w-full px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
              <div className="text-left">
                <img src={image} alt="" className="w-32" />
              </div>
              <div className="py-8">
                <p className="text-3xl font-bold text-green-500">
                  Log into your Account
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <form className="mx-auto" onSubmit={handleSubmit} noValidate>
                  <div className="text-left">
                    <label htmlFor="username">Username</label>
                    <div className="flex items-center gap-2 mb-2 mt-2 ">
                      <AccountCircleIcon className="text-gray-700 w-6 h-6" />
                      <input
                        type="text"
                        className="my-auto outline-none border-0 ring-0 focus:ring-0 focus:outline-none"
                        name="username"
                        id="username"
                        placeholder="Username"
                        onChange={handleChange}
                        value={credentials.username}
                        required
                      />
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className="flex space-x-2 mt-2 mb-2 items-center text-left justify-center">
                      <LockIcon className="text-gray-700 w-6 h-6" />

                      <input
                        type={showPassword ? "text" : "password"}
                        className="my-auto outline-none border-0 ring-0 focus:ring-0"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={credentials.password}
                        required
                      />

                      <button
                        type="button"
                        className="bg-transparent border-none"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-black" />
                        ) : (
                          <FaEye className="text-black" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-green-500 p-6 py-2 rounded-full text-white hover:bg-white hover:text-green-500"
                  >
                    Login
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <a
                      href="/register"
                      className="text-danger text-green-500 pl-1 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-52 px-12">
              <h2 className="text-3xl font-bold mb-2 py-0">Welcome</h2>
              <p className="mb-10">If you don't have an account</p>
              <a
                href="/register"
                className="border-2 border-white text-white rounded-full inline-block px-12 py-2 font-semibold hover:bg-white hover:text-green-500"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
