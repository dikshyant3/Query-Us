import React from "react";
import './Home.css';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Questions from "./Questions";



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