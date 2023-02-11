import React from "react";
import './Home.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Questions from "../Questions/Questions";



const Home=()=>{
 return(
    <>
      <Navbar/>
       <Sidebar/>
      <Questions/>
    </>
 )
}

export default Home;