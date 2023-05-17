import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../../images/Logo.png";
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
      toast.success("Signup successfull!");
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
                <p className="text-3xl font-bold text-green-500">
                  Create your Account
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="mx-auto">
                  <div className="relative mb-6">
                    <div className="flex space-x-4">
                      <div className="w-1/3 text-left">
                        <label
                          htmlFor="firstName"
                          className="text-sm text-gray-800 "
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-gray-100 rounded focus:outline-none mt-1 focus:border-none text-gray-600"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          onChange={handleChange}
                          value={credentials.firstName}
                        />
                      </div>
                      <div className="w-1/3 text-left">
                        <label
                          htmlFor="middleName"
                          className="text-sm text-gray-800"
                        >
                          Middle Name
                        </label>
                        <input
                          type="text"
                          className="bg-gray-100 rounded mt-1 focus:outline-none focus:border-none  text-gray-600"
                          name="middleName"
                          id="middleName"
                          placeholder="Middle Name"
                          onChange={handleChange}
                          value={credentials.middleName}
                        />
                      </div>
                      <div className="w-1/3 text-left">
                        <label
                          htmlFor="lastName"
                          className="text-sm text-gray-800"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-gray-100 rounded  mt-1 focus:outline-none focus:border-none text-gray-600"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          onChange={handleChange}
                          value={credentials.lastName}
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <label htmlFor="email" className="text-sm text-gray-800">
                        Email
                      </label>
                      <input
                        type="text"
                        className=" bg-gray-100  mt-1 text-gray-600"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={credentials.email}
                        required
                      />
                    </div>
                    <div className="text-left">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-800"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className=" bg-gray-100 mt-1 text-gray-600"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={credentials.password}
                        required
                      />
                    </div>

                    <div className="text-left">
                      <label
                        htmlFor="confirmPassword"
                        className="text-sm mt-1 text-gray-800"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className=" bg-gray-100 text-gray-600"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={credentials.confirmPassword}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-green-500 p-6 py-2 rounded-full text-white hover:bg-white hover:text-green-500"
                  >
                    Sign Up
                  </button>
                  <p className="mb-0 mt-2 pt-1 text-base font-semibold">
                    Already have an account?
                    <a
                      href="/login"
                      className="text-danger text-green-500 pl-1 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-52 px-12">
              <h2 className="text-3xl font-bold mb-2 py-0">Welcome</h2>
              {/* <div className="border-2 w-10 border-white rounded inline-block mb-2"></div> */}
              <p className="mb-10">Fill up the form and start your journey.</p>
              <a
                href="/login"
                className="border-2 border-white text-white rounded-full inline-block px-12 py-2 font-semibold hover:bg-white hover:text-green-500"
              >
                Sign in
              </a>
            </div>
          </div>

          {/* <div className="border-2 border-blue-800 w-full flex rounded h-screen justify-center lg:justify-between">
            left column

            <div className="bg-white border-2 relative mb-12 md:mb-0 md:w-1/2 ">
             <h3 className="text-3xl text-center font-bold ">Welcome to</h3>
              <img
                src={image}
                alt="signupImage"
                className="max-w-4/5 h-auto p-8"
              />
            </div>
            Right Column
            <div className=" bg-blue-500 justify-center items-center rounded md:w-1/2 ">
              <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto my-32 px-3 "
              >
                <div>
                  <h1 className="text-4xl mb-2 font-bold">Register</h1>
                </div>
                <div className="relative mb-6">
                  <div className="flex space-x-4">
                    <div className="w-1/3">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="w-full rounded focus:outline-none focus:border-none"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={credentials.firstName}
                      />
                    </div>
                    <div className="w-1/3">
                      <label htmlFor="middleName">Middle Name</label>
                      <input
                        type="text"
                        className="w-full rounded focus:outline-none focus:border-none "
                        name="middleName"
                        id="middleName"
                        placeholder="Middle Name"
                        onChange={handleChange}
                        value={credentials.middleName}
                      />
                    </div>
                    <div className="w-1/3">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="w-full rounded focus:outline-none focus:border-none"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={credentials.lastName}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className=" "
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={credentials.email}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className=" "
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={credentials.password}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className=" "
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      value={credentials.confirmPassword}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 p-6 py-2 rounded text-white hover:bg-white hover:text-blue-500"
                >
                  Sign Up
                </button>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account?
                  <a
                    href="/login"
                    className="text-danger pl-1 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Signup;
