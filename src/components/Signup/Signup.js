import React, { useState } from "react";
// import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import image from "../../images/Logo2.png";
import { toast } from "react-toastify";

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

      toast.success("Signup successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Signup failed!");
      console.log(new Error(error));
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
                  Create your Account
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="mx-auto space-y-6">
                  <div className="relative">
                    <div className="flex space-x-4">
                      <div className="w-1/3 text-left">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium leading-6 text-gray-900 "
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          name="firstName"
                          id="firstName"
                          onChange={handleChange}
                          value={credentials.firstName}
                        />
                      </div>
                      <div className="w-1/3 text-left">
                        <label
                          htmlFor="middleName"
                          className="block text-sm font-medium leading-6 text-gray-900 "
                        >
                          Middle Name
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          name="middleName"
                          id="middleName"
                          onChange={handleChange}
                          value={credentials.middleName}
                        />
                      </div>
                      <div className="w-1/3 text-left">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium leading-6 text-gray-900 "
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          name="lastName"
                          id="lastName"
                          onChange={handleChange}
                          value={credentials.lastName}
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 pt-2  text-gray-900 "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-md py-1.5 text-gray-900 outline-none ring-0  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={credentials.email}
                        required
                      />
                    </div>
                    <div className="text-left">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium pt-2 leading-6 text-gray-900 "
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={credentials.password}
                        required
                      />
                    </div>

                    <div className="text-left">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium pt-2 leading-6 text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={handleChange}
                        value={credentials.confirmPassword}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                  <p className="mb-0 mt-2 pt-1 text-base font-semibold">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-danger text-indigo-600 pl-1 transition duration-150 ease-in-out hover:text-indigo-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="w-2/5 bg-indigo-600 text-white rounded-tr-2xl rounded-br-2xl py-52 px-12">
              <h2 className="text-3xl font-bold mb-2 py-0">Welcome</h2>
              <p className="mb-10">Fill up the form and start your journey.</p>
              <Link
                to="/login"
                className="border-2 border-white text-white rounded-full inline-block px-12 py-2 font-semibold hover:bg-white hover:text-indigo-600"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
