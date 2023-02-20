import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionItem from "../QuestionItem/QuestionItem";
import "./Questions.css";


const Questions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/question/all?pageNo=${currentPage}`;
      try {
        const res = await axios.get(url, { withCredentials: true });
        console.log(res.data);
        setQuestions(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePrevPage = async () => {
    const url = `https://queryus-production.up.railway.app/question/all?pageNo=${
      currentPage - 1
    }`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log(res.data);
      setQuestions(res.data);
      setCurrentPage(currentPage - 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = async () => {
    const url = `https://queryus-production.up.railway.app/question/all?pageNo=${
      currentPage + 1
    }`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log(res.data);
      setQuestions(res.data);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="questions">
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
      <div className="pagination-container">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <div>{`Page ${currentPage}`}</div>
        <button onClick={handleNextPage} disabled={questions.length<10} >
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
