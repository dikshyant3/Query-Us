import React from "react";
import './Home.css';
import Sidebar from "../Sidebar/Sidebar";
import Questions from "../Questions/Questions";
// import Navbar from "../Navbar/Navbar";
// import AddQuestion from "../AddQuestion/AddQuestion";



const Home=()=>{
 return(
    
    <div className="home">
      <div className="home-container">
        {/* <Navbar /> */}
      <Sidebar/>
      <Questions/>
      {/* <AddQuestion/> */}
      </div>
    </div>
    
 )
}

export default Home;