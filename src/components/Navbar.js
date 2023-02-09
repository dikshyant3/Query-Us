import React from 'react';
import './Navbar.css';
import Logo from '../images/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarsIcon from '@mui/icons-material/Stars';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
                    <DarkModeIcon style={{fill:'#fff'}}/>
                    {/* Notification */}
                    <NotificationsIcon style={{fill:'#fff'}}/>
                    {/* Reputation */}
                    <StarsIcon style={{fill:"#fff"}}/>
                    {/* UserProfile */}
                    <AccountCircleIcon style={{fill:"#fff"}}/>
                </div>
            </div>
        
    </>
  )
}

export default Navbar