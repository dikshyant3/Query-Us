import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import QuestionAnswerSharpIcon from "@mui/icons-material/QuestionAnswerSharp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/addquestion">
        <button className="sidebar-btn">Ask a Question</button>
        </Link>
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <HomeIcon />
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar-option">
            <AccountCircleSharpIcon />
            <Link to="/user">User Profile</Link>
          </div>
          <div className="sidebar-option">
            <QuestionAnswerSharpIcon />
            <Link to="/questions">Questions</Link>
            {/* <div className="link">
              <p>New Questions</p>

              <div className="link-popular">
                <p>Popular Questions</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="sidebar-tags">
        <h3>Tags</h3>
        <div className="tags">
          <p>Programming</p>
          <p>Physics</p>
          <p>Mathematics</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
