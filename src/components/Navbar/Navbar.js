import React from 'react';
import './Navbar.css';
import Logo from '../../images/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarsIcon from '@mui/icons-material/Stars';
import { Avatar } from '@mui/material';


const Navbar = () => {
  return (
    <>
        
            <div className="navbar__container">
                <img src={Logo} alt="Header-Logo" className='navbar__logo'/>
                
                <div className="navbar__center">
                    <input type="text" placeholder='Search'/>
                    <SearchIcon style={{fill:'#fff'}}/>
                </div>
                <div className="navbar__right">
                    {/* Dark/Light Theme */}
                    <DarkModeIcon style={{fill:'#fff',opacity:0.8}}/>
                    {/* Notification */}
                    <NotificationsIcon style={{fill:'#fff',opacity:0.8}}/>
                    {/* Reputation */}
                    <StarsIcon style={{fill:"#fff",opacity:0.8}}/>
                    {/* UserProfile */}
                    <Avatar sx={{width:24,height:24}}/>
                </div>
            </div>
        
    </>
  )
}

export default Navbar