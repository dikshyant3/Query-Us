import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AnswersPage.css";

const AnswersPage = () => {
  const token=localStorage.getItem('token');
    const [question, setQuestion] = useState([]);
    const {id}=useParams();
    // const [error,setError]=useState(null);
  // const [answers, setAnswers] = useState([]);

  const url=`https://queryus-production.up.railway.app/question/${id}`;
  


  useEffect(() => {
    const fetchQuestion=async()=>{
    try{
      const res =await axios.get(url,{headers:{
        'Authorization':`Bearer ${token}`
      }})
      setQuestion(res.data[0]);
    }catch(error){
      console.log(error);
    }
}
  fetchQuestion();
},[token,url]);



  return (
    <div className="answer-container">
      <div className="main-container">
        {question.map((question)=>(
            <><div className="question-header" key={question.id}>
            <p>{question.questionTitle}</p>
          </div><div className="question-main">
              <p>{question.questionText}</p>
            </div></>
        ))}
        
        {question.answers.map((answer) => (
          <div className="answer-main" key={answer.id}>
            <p>console.log({answer.answer})</p>
          </div>
        ))}
      </div>
    </div>
  );

};


export default AnswersPage;
