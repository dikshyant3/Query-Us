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
          <div className="question-container" key={question.id}>
            <div className="question-container-left">
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
              </div>
            </div>
            <div className="question-container-right">
              <div className="question-body">
                <div className="question-title">
                  <p>{question.questionTitle}</p>
                </div>
                <div className="question-tags">
                  {question.tags.map((tag) => (
                    <span className="tag">{tag}</span>
                  ))}
                </div>
                <div className="author">
                  <span className="timestamp">
                    {question.timestamp}
                    {/* {`${(question.timestamp).toLocaleDateString()}`} */}

                    {/* timestamp need to be converted in locale string */}
                  </span>
                  <div className="author-details">
                    {/* Avatar of user */}
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
