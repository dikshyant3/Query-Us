import React, { useState } from "react";
import image from "../../images/Logo2.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";
import forgotPasswordImage from "../../images/forgot_password.png";

const ForgotPassword = () => {
  const [credentials, setCredentials] = useState({
    email: "",
  });

  const url = "https://queryus-production.up.railway.app/user/login";


  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email.trim()) {
      return toast.error("Username is required!");
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
            <div className="w-3/5 p-5 ">
              <div className="text-left">
                <img src={image} alt="" className="w-32" />
              </div>
              <div className="py-16 w-full">
                <p className="text-3xl font-bold text-indigo-600">
                  Forgot Password?
                </p>
                <p className="py-4 text-sm text-gray-400 whitespace-normal">
                  Enter your email and we'll send you a link to reset your
                  password.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <form className="mx-auto" onSubmit={handleSubmit} noValidate>
                  <div className="text-left">
                    <label htmlFor="email">Email</label>
                    <div className="flex items-center gap-2 mb-4 mt-2 ">
                      <HiOutlineMail className="text-gray-700 w-6 h-6" />
                      <input
                        type="text"
                        className="my-auto outline-none border-0 ring-0 focus:ring-0 focus:outline-none"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={credentials.email}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send Email
                  </button>
                  <Link to="/login">
                    <div className="flex mx-12 mt-8 items-center">
                      <BiArrowBack />
                      <p className="pl-2 text-sm text-gray-400">Back to login</p>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
            <div className="w-2/5 bg-indigo-600 text-white rounded-tr-2xl rounded-br-2xl py-52 px-12">
              <img
                src={forgotPasswordImage}
                alt="forgotPassword"
                className="w-[200px] h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
