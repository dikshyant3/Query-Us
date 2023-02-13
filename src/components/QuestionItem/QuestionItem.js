import React, { useState, useEffect } from "react";
import "./QuestionItem.css";
import axios from "axios";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const QuestionItem = () => {
  const [questions, setQuestions] = useState([]);
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
            <div className="question-tags">
              {question.tags.map((tag) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
            <div className="question-container-up">
              <div className="question-body">
                <div className="question-title">
                  <Link>
                    <p>{question.questionTitle}</p>
                  </Link>
                </div>

                <div className="question-container-down">
                  <div className="question-stats">
                    <div className="question-stat">
                      <p>{question.answerCount}</p>

                      <span>answers</span>
                    </div>
                    <div className="question-stat">
                      <p>{question.voteCount}</p>
                      <span>upvotes</span>
                    </div>
                    <div className="question-stat">
                      <p>{question.views}</p>
                      <span>views</span>
                    </div>
                    <div className="author">
                      <small className="timestamp">
                        {question.timestamp}
                        {/* {`${(question.timestamp).toLocaleDateString()}`} */}

                        {/* timestamp need to be converted in locale string */}
                      </small>
                      <div className="author-details">
                        {/* Avatar of user */}
                        <Avatar />
                        <p>{question.userId}</p>
                      </div>
                    </div>
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
