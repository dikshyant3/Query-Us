import React, { useState, useEffect } from "react";
import "./QuestionItem.css";
import axios from "axios";
import { Avatar } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";

const QuestionItem = () => {
  const [questions, setQuestions] = useState([]);
  // const[currentPage,setCurrentPage]=useState(1);

  const getAllQuestions = async () => {
    const url = "https://queryus-production.up.railway.app/question/all";
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log(res.data);
      setQuestions(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <>
      <div className="card">
        {questions.map((question) => (
          <div className="question-container" key={question.id}>
            <div className="question-container-left">
              <div className="question-sidebar">
                <div className="sidebar-content">
                  <Avatar />
                </div>
                <div className="sidebar-content">
                  <ExpandLessIcon />
                  <p>{question.voteCount}</p>
                </div>
              </div>
            </div>

            <div className="question-container-right">
              <div className="question-container-top">
                <div className="timestamp">
                  <div className="timestamp-date">
                    <small>
                      {question.timestamp[0] +
                        "/" +
                        question.timestamp[1] +
                        "/" +
                        question.timestamp[2]}
                    </small>
                    <small>at</small>
                  </div>
                  <div className="timestamp-time">
                    <small>
                      {question.timestamp[3] + ":" + question.timestamp[4]}
                    </small>
                  </div>
                </div>
                <div className="question-tags">
                  {question.tags.map((tag) => (
                    <span className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="question-body">
                <div className="question-title">
                  <Link>
                    <p>{question.questionTitle}</p>
                  </Link>
                  </div>
                  <div className="question-stats">
                    <div className="question-stat">
                      <p>{question.answerCount}</p>
                      <span>answers</span>
                    </div>
                    <div className="question-stat">
                      <p>{question.views}</p>
                      <span>views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </>
  );
};

export default QuestionItem;
