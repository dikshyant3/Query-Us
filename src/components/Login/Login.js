import React, { useState } from "react";
import image from "../../images/Logo2.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
                <p className="text-3xl font-bold text-indigo-600">
                  Log into your Account
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <form className="mx-auto" onSubmit={handleSubmit} noValidate>
                  <div className="text-left">
                    <label htmlFor="username">Username</label>
                    <div className="flex items-center gap-2 mb-4 mt-2 ">
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
                    <div className="flex items-center justify-between">
                      <label htmlFor="password">Password</label>
                      <div class="text-sm">
                        <Link
                          to="/forget-password"
                          class="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-2 mb-2 items-center text-left justify-center">
                      <LockIcon className="text-gray-700 w-6 h-6" />

                      <input
                        type={showPassword ? "text" : "password"}
                        className="my-auto pb-4 outline-none border-0 ring-0 focus:ring-0"
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
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                  Don't have an account?
                  <Link
                    href="/register"
                    className="pl-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Sign up
                  </Link>
                </p>
                <p className="mt-10 text-center font-semibold text-sm text-indigo-500">
                          <Link to='/resendToken'>Resend Token</Link>
                </p>
              </div>
            </div>
            <div className="w-2/5 bg-indigo-600 text-white rounded-tr-2xl rounded-br-2xl py-52 px-12">
              <h2 className="text-3xl font-bold mb-2 py-0">Welcome</h2>
              <p className="mb-10">If you don't have an account</p>
              <a
                href="/register"
                className="border-2 border-white bg-white text-indigo-600 rounded-full inline-block px-12 py-2 font-semibold hover:bg-white hover:text-indigo-500"
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
