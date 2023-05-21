import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Questions from "../Questions/Questions";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex min-h-[85vh] min-w-fit">
        <div className="flex w-full justify-center">
          <Sidebar />
          <Questions />
        </div>
      </div>
    </>
  );
};

export default Home;
