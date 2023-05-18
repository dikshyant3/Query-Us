import React from 'react';
// import './Navbar.css';
import Logo from '../../images/Logo2.png';
import {GrSearch} from 'react-icons/gr';
import {RiStarSLine} from 'react-icons/ri';
import {BsPersonCircle} from 'react-icons/bs'
// import StarsIcon from '@mui/icons-material/Stars';
// import { Avatar } from '@mui/material';



const Navbar = () => {
  return (
    <>
        
            <div className="flex justify-between items-center sticky top-0 h-[70px] z-10 cursor-pointer">
                <img src={Logo} alt="Header-Logo" className='object-contain h-12 m-[20px]'/>
                
                <div className="flex items-center flex-1 min-w-fit p-[10px] h-[40px] rounded border-none outline-0 ring-0 bg-[#f5f5f5]">
                    <GrSearch style={{fill:'slate'}}/>
                    <input type="text" placeholder='Search' className='w-full h-[40px] outline-none border-0 ring-0 focus:border-0 focus:ring-0 bg-[#f5f5f5]'/>
                </div>
                <div className="flex items-center justify-between">
                    {/* Reputation */}
                    {/* <StarsIcon style={{fill:"#fff",opacity:0.8}}/> */}
                    <RiStarSLine/>

                    {/* UserProfile */}
                    <BsPersonCircle/>
                    {/* <Avatar sx={{width:24,height:24}}/> */}
                </div>
            </div>
        
    </>
  )
}

export default Navbar