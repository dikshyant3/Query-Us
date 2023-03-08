import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./AnswersPage.css";
import TextEditor from "../AddQuestion/TextEditor";

const AnswersPage = () => {
  const token = localStorage.getItem("token");
  const [question, setQuestion] = useState(null);
  

  // The below three lines of used to redirect a single question to answersPage
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("query");

  // console.log("DIKSHYANT")
  const url = `https://queryus-production.up.railway.app/question/${id}`;

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuestion(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestion();
  }, [token, url]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="answer-container">
      <div className="main-container">
        <div className="mainQuestion">
          <div className="answersQuestionContainer">
            <div className="question-header" key={question.id}>
              <p>{question.questionTitle}</p>
            </div>
            <div className="question-main">
              <p>{question.questionText}</p>
            </div>
            <div className="stats">
              <p>{question.views}</p>
              <p>asked {new Date(question.timestamp).toLocaleString}</p>
            </div>
          </div>
          <div className="questionButton">
            <button className="questionBtn">Ask Question</button>
          </div>
        </div>
        <div className="mainAnswer">
          {question.answers.map((answer) => (
            <div className="answer-main" key={answer.id}>
              <p>{answer.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="answerTextArea">
            <TextEditor></TextEditor>
            <div className="answerButton">
              <button className="postBtn">Post Answer</button>
            </div>
      </div>
    </div>
  );
};

export default AnswersPage;
