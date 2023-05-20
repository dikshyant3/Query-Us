import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../images/Logo2.png";
import { MdVpnKey } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import forgotPasswordImage from "../../images/forgot_password.png";

const ResetPassword = () => {
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const tokenValue = params.get("token");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const url = "https://queryus-production.up.railway.app/reset-password/change";
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      return toast.error("Password is required!");
    }

    try {
      const res = await axios.post(url,
       {
          password: password,
          token: tokenValue,
        },{
        headers:{
          "Content-Type":"application/json"
        }}
      );
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error("Invalid Password!!");
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
                  Reset Password
                </p>
                <p className="py-4 text-sm text-gray-400 whitespace-normal">
                  Kindly set your new password.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <form className="mx-auto" onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col items-center my-2 ">
                    <div className="text-left">
                      <label htmlFor="password">Password</label>
                      <div className="flex items-center gap-2 mb-4 mt-2 ">
                        <MdVpnKey className="text-gray-700 w-6 h-6" />
                        <input
                          type={showPassword ? "text" : "password"}
                          className="my-auto outline-none border-0 ring-0 focus:ring-0"
                          name="password"
                          id="password"
                          placeholder="Password"
                          onChange={handlePasswordChange}
                          value={password}
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
                    <div className="flex items-center gap-2 mb-4 mt-2 ">
                      <input
                        type="text"
                        className="my-auto outline-none border-0 ring-0 focus:ring-0 focus:outline-none"
                        name="token"
                        id="token"
                        placeholder="Token"
                        value={tokenValue}
                        hidden
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset Password
                  </button>
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

export default ResetPassword;
