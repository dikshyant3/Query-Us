import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import axios from 'axios'



const Sidebar = () => {
  const [tags,setTags]=useState('');
  const token=localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/question/tags`;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("tags:",res.data);

      setTags(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token])
  return (
    <div className="flex flex-col fixed left-0 top-0 w-[350px] bg-[#f5f5f5] border-r-2 border-gray-300">
      <div className="mx-auto mt-6 mb-4 ">
        <Link to="/addquestion">
          <button className="px-[10px] py-[8px] bg-indigo-500 text-white text-base rounded-xl cursor-pointer">
            Ask a Question
          </button>
        </Link>
      </div>
      <div className="flex items-center my-6 ">
        <div className="flex flex-col mx-auto">
          <div className="flex items-start">
            <AiFillHome className="text-xl text-indigo-500"/>
            <Link to="/" className="pl-2">Home</Link>
          </div>
          <div className="flex pt-4 items-start">
            <FaUserCircle className="text-xl text-indigo-500"/>
            <Link to="/userProfile" className="pl-2">User Profile</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto">
        <h3 className="text-xl font-semibold text-indigo-600">Popular Tags</h3>
        <div className="">
          {tags.map(tag=>(
            <div className="flex flex-col text-indigo-700 text-center pt-4">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
