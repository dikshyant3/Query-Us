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
      <div className="questions__container">
        <div className="card">
          {questions.map((question) => (
            <div key={question.id}>
              <p>{question.questionTitle}</p>
              <p>{question.views}</p>
              <p>{question.voteCount}</p>
              <p>{question.timeStamp}</p>
              <p>{question.userId}</p>
              <p>{question.answerCount}</p>
              <p>{question.tags}</p>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
