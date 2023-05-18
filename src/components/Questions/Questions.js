import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionItem from "../QuestionItem/QuestionItem";
// import "./Questions.css";



const Questions = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [questions, setQuestions] = useState([]);
  const token=localStorage.getItem("token");
  

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/question/all?pageNo=${currentPage}`;
      try {
        const res = await axios.get(url,{
          headers:{
            'Authorization':`Bearer ${token}`,
          }
        }, { withCredentials: true });
        console.log(res.data);
        setQuestions(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage,token]);
  

  const handlePrevPage = async () => {
    const url = `https://queryus-production.up.railway.app/question/all?pageNo=${
      currentPage - 1
    }`;

    try {
      const res = await axios.get(url,{
        headers:{
          'Authorization':`Bearer ${token}`,
        }
      });
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
      const res = await axios.get(url,{headers:{
        'Authorization':`Bearer ${token}`
      }} );
      console.log(res.data);
      setQuestions(res.data);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full bg-gray-200">
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
      <div className="flex justify-between items-center mt-4 mr-8 ml-8 mb-4">
        <button className="bg-skyBlue text-white rounded border-0 cursor-pointer px-6 py-2" onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <div className="m-auto flex items-center">{`Page ${currentPage+1}`}</div>
        <button className="bg-skyBlue text-white rounded border-0 cursor-pointer px-6 py-2" onClick={handleNextPage} disabled={questions.length<10} >
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
