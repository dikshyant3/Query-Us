import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionItem from "../QuestionItem/QuestionItem";
import "./Questions.css";

const PAGE_SIZE = 10;

const Questions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/question/all?pageNo=${currentPage}`;
      try {
        const res = await axios.get(url, { withCredentials: true });
        console.log(res.data);
        setQuestions(res.data);
        setTotalPages(Math.ceil(res.data.length / PAGE_SIZE));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentContent = questions.slice(startIndex, endIndex);

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
      {currentContent.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
      <div className="pagination-container">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <div>{`Page ${currentPage} of ${totalPages}`}</div>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
