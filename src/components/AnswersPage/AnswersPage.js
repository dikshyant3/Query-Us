import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AnswersPage.css";

const AnswersPage = (props) => {
    const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      const questionId = props.match.params.id;
      const questionUrl = `https://queryus-production.up.railway.app/question/${questionId}`;
      const answersUrl = `https://queryus-production.up.railway.app/answer/all?questionId=${questionId}`;

      try {
        const [questionRes, answersRes] = await Promise.all([
          axios.get(questionUrl),
          axios.get(answersUrl),
        ]);

        setQuestion(questionRes.data);
        setAnswers(answersRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestionAndAnswers();
  }, [props.match.params.id]);

  return (
    <>
      <div className="answer-container">
        {questions.map((question) => (
          <div className="answer-question-container">
            <div className="question-header">
              <p> {question.questionTitle}</p>
            </div>
            <div className="question-main">
              <p>{question.questionText}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnswersPage;
