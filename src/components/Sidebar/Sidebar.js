import React,{useState,useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { updateList } from "../../redux/questionsSlice";


const Sidebar = () => {
  const [tags,setTags]=useState([]);
  const token=localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/question/tags`;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

      setTags(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token])

  const handleTagClick=async(tag)=>{
    navigate(`/?search=${tag}`);
    const url = `https://queryus-production.up.railway.app/question/search`
    try{
      const res = await axios.get(url,{
        params:{query:tag},
      headers:{'Authorization':`Bearer ${token}`}
    })
    console.log(res.data);
    dispatch(updateList(res.data));
    }catch(error){
      console.log(error);
    }

  }
  return (
    <div className="flex flex-col items-center sticky top-0 w-[350px] bg-[#f5f5f5] border-r-2 border-gray-300">
      <div className=" mt-6 mb-4 ">
        <Link to="/addquestion">
          <button className="px-[12px] py-[8px] bg-indigo-500 text-white text-lg rounded-xl cursor-pointer">
            Ask a Question
          </button>
        </Link>
      </div>
      <div className="flex items-center my-6 ">
        <div className="flex flex-col">
          <div className="flex items-start">
            <AiFillHome className="text-xl text-indigo-500"/>
            <Link to="/" className="pl-2 opacity-60 hover:opacity-100">Home</Link>
          </div>
          <div className="flex pt-4 items-start">
            <FaUserCircle className="text-xl text-indigo-500"/>
            <Link to="/userProfile" className="pl-2 opacity-60 hover:opacity-100">User Profile</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold text-indigo-600">Popular Tags</h3>
        <div className="">
          {tags.map(tag=>(
            <button className="flex flex-col text-indigo-700 text-center pt-4 cursor-pointer" onClick={()=>handleTagClick(tag)}>{tag}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
