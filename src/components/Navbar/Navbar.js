import React,{useState,useEffect} from "react";
import axios from "axios";
import Logo from "../../images/Logo2.png";
import { GrSearch } from "react-icons/gr";
import { RiStarSLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [userReputation,setUserReputation]=useState(0);
  const [userName,setUserName]=useState('');
  useEffect(() => {
 
    const token=localStorage.getItem('token');

      const fetchData = async () => {
        const userUrl = `https://queryus-production.up.railway.app/user/me`;
        try {
          const res = await axios.get(userUrl,{
            headers:{
              'Authorization':`Bearer ${token}`,
            }
          });
          console.log(res.data);
          
          setUserReputation(res.data.reputation);
          setUserName(res.data.firstName)
          localStorage.setItem('currentUser',JSON.stringify(res.data))
          console.log('getItem',localStorage.getItem('currentUser'))
          
        } catch (error) {
          console.log(error);
        }
      };
      
      fetchData(); 
        
  }, [userReputation,userName]);
  return (
    <>
      <div className="flex justify-between bg-white items-center sticky top-0 h-[70px] z-10 cursor-pointer ">
        <img
          src={Logo}
          alt="Header-Logo"
          className="object-contain h-12 m-[20px] mr-8"
        />

        <div className="flex items-center w-[60%] p-[10px] h-[40px] rounded border-none outline-0 ring-0 bg-[#f5f5f5]">
          <GrSearch style={{ fill: "slate" }} />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] outline-none border-0 ring-0 focus:border-0 focus:ring-0 bg-[#f5f5f5]"
          />
        </div>
        <div className="flex items-center justify-between ml-4">
          {/* Reputation */}
          {/* <StarsIcon style={{fill:"#fff",opacity:0.8}}/> */}
          <div className="pr-6 flex items-center">
            <RiStarSLine className="h-6 w-6" />
            <p className="px-2 text-indigo-700 font-bold">{userReputation}</p>
          </div>
          {/* UserProfile */}
          <div className="mr-10">
            <Link to="/userProfile" className="flex text-black cursor-pointer">
              <p className="px-2 text-indigo-700 font-bold">{userName}</p>
              <BsPersonCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
