import React, { useState, useEffect } from "react";
import "./Questions.css";
import axios from "axios";

const Questions = () => {
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
    <div className="questions">
      <div className="card">
        {questions.map((question) => (
          <div className="questions-container">
            <div className="question-container-left">
              <div className="questions-stats">
                <div className="question-stat">
                  <p>
                    {question.answerCount}
                    <span>answers</span>
                  </p>
                </div>
                <div className="question-stat">
                  <p>
                    {question.voteCount}
                    <span>upvotes</span>
                  </p>
                </div>
                <div className="question-stat">
                  <p>
                    {question.views}
                    <span>views</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="questions-container-right">
              <div className="questions-body">
                <div className="question-title">
                  <p>{question.questionTitle}</p>
                </div>
                <div className="questions-tags">
                  <span className="tag">{question.tags[0]}</span>
                  <span className="tag">{question.tags[1]}</span>
                </div>
                <div className="author">
                  <span className="timestamp">{question.timestamp}</span>
                  <div className="author-details">
                    <p>{question.userId}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
