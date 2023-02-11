import React from "react";
import './Home.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Questions from "../Questions/Questions";
// import AddQuestion from "../AddQuestion/AddQuestion";



const Home=()=>{
 return(
    <>
      <Navbar/>
       <Sidebar/>
      <Questions/>
      {/* <AddQuestion/> */}
    </>
 )
}

export default Home;