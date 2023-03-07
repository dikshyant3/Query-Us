import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AnswersPage.css";

const AnswersPage = ({id}) => {
  const token=localStorage.getItem('token');
    const [questions, setQuestions] = useState([]);
  // const [answers, setAnswers] = useState([]);

  const url=`https://queryus-production.up.railway.app/question/${id}`;
  


  useEffect(() => {
    const fetchQuestion=async()=>{
    try{
      const res =await axios.get(url,{headers:{
        'Authorization':`Bearer ${token}`
      }})
      setQuestions(res.data);
    }catch(error){
      console.log(error)
    }
}
  fetchQuestion();
},[token,url]);


  return (
    <>
      <div className="answer-container">
        {questions.map((question) => (
          <div className="main-container">
            <div className="question-header">
              <p> {question.questionTitle}</p>
            </div>
            <div className="question-main">
              <p>{question.questionText}</p>
            </div>
            <div className="answer-main">
              <p>{question.answers.answer}</p>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default AnswersPage;
