import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Questions from "../Questions/Questions";
import Navbar from "../Navbar/Navbar";
// import AddQuestion from "../AddQuestion/AddQuestion";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-body">
          <Sidebar />
          <Questions />
          {/* <AddQuestion/> */}
        </div>
      </div>
    </>
  );
};

export default Home;
