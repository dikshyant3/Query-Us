import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo2.png";
// import { GrSearch } from "react-icons/gr";
import { RiStarSLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Search from "../Search/Search";


const Navbar = () => {
  const [userReputation, setUserReputation] = useState(0);
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate=useNavigate();
  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    toast.success('Logged Out Successfully!!!');
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      const userUrl = `https://queryus-production.up.railway.app/user/me`;
      try {
        const res = await axios.get(userUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

        setUserReputation(res.data.reputation);
        setUserName(res.data.firstName);
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        console.log("getItem", localStorage.getItem("currentUser"));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userReputation, userName]);
  return (
    <>
      <div className="flex justify-between bg-white items-center sticky top-0 h-[70px] z-10 cursor-pointer ">
        <Link to="/">
          <img
            src={Logo}
            alt="Header-Logo"
            className="object-contain h-12 m-[20px] mr-8"
          />
        </Link>

        {/* <div className="flex items-center w-[60%] p-[10px] h-[40px] rounded border-none outline-0 ring-0 bg-[#f5f5f5]">
          <GrSearch style={{ fill: "slate" }} />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] outline-none border-0 ring-0 focus:border-0 focus:ring-0 bg-[#f5f5f5]"
          />
        </div> */}
        <Search/>

        <div className="flex items-center justify-between ml-4">
          {/* Reputation */}
          <div className="pr-6 flex items-center">
            <RiStarSLine className="h-6 w-6" />
            <p className="px-2 text-indigo-700 font-bold">{userReputation}</p>
          </div>
          {/* UserProfile */}
          <div className="mr-10">
            <div
              className="flex text-black cursor-pointer"
              onClick={toggleDropDown}
            >
              <p className="px-2 text-indigo-700 font-bold">{userName}</p>
              <BsPersonCircle className="h-6 w-6" />
              {isDropdownOpen && (
                <div className="absolute top-[60px] right-4 w-36 mt-2 bg-white opacity-75 shadow-lg rounded">
                  <Link
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    to="/userProfile"
                  >
                    Profile
                  </Link>
                  <div className="flex items-center">
                    <button
                      className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                      <MdOutlineLogout className="ml-2 text-red-600 text-xl"/>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
