import React from "react";
// import "./Sidebar.css";
import { Link } from "react-router-dom";

import {FaUserCircle} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'



const Sidebar = () => {
  return (
    <div className="flex flex-col sticky w-[350px] bg-[#f5f5f5] border-r-2 border-gray-600 border-2">
      <div className="mx-auto border-2 border-blue-500">
        <Link to="/addquestion">
          <button className="px-[10px] py-[8px] bg-indigo-500 text-white text-base rounded-xl cursor-pointer">
            Ask a Question
          </button>
        </Link>
      </div>
      <div className="flex items-center border-2 border-red-400 ">
        <div className="flex flex-col mx-auto">
          <div className="flex pl-4 items-center">
            <AiFillHome />
            <Link to="/" className="pl-4">Home</Link>
          </div>
          <div className="flex pl-4 items-center">
            <FaUserCircle />
            <Link to="/user" className="pl-4">User Profile</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-2 border-black">
        <h3 className="border-2 border-blue-500">Popular Tags</h3>
        <div className="border-2 border-red-500">
          <p>Programming</p>
          <p>Physics</p>
          <p>Mathematics</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
