import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./AnswersPage.css";

const AnswersPage = () => {
  const token=localStorage.getItem('token');
  const [question, setQuestion] = useState(null);
  let search =window.location.search
  const params=new URLSearchParams(search)
  const id = params.get("query")
  
  // console.log("DIKSHYANT")
  const url = `https://queryus-production.up.railway.app/question/${id}`;

  useEffect(() => {

    const fetchQuestion = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setQuestion(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchQuestion();
  }, [token, url]);

  if (!question) {
    return <div>Loading...</div>
  }

  return (
    <div className="answer-container">
      <div className="main-container">
        <div className="question-header" key={question.id}>
          <p>{question.questionTitle}</p>
        </div>
        <div className="question-main">
          <p>{question.questionText}</p>
        </div>
        {question.answers.map((answer) => (
          <div className="answer-main" key={answer.id}>
            <p>{answer.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswersPage;
