import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionItem from "../QuestionItem/QuestionItem";
import { useDispatch, useSelector } from "react-redux";
import { updateList ,updateCurrentPage } from "../../redux/questionsSlice";


const Questions = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  const [questions, setQuestions] = useState([]);
  const token=localStorage.getItem("token");
  const questionList = useSelector((state)=>state.questions.list);
  const currentPage = useSelector((state)=>state.questions.currentPage);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/question/all?pageNo=${currentPage}`;
      try {
        const res = await axios.get(url,{
          headers:{
            'Authorization':`Bearer ${token}`,
          }
        });
        console.log(res.data);
        // setQuestions(res.data);
        dispatch(updateList(res.data));

        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage,token]);
  

  const handlePrevPage =  () => {
    dispatch(updateCurrentPage(currentPage-1));
    fetchQuestions()
  };

  const fetchQuestions = async ()=>{
    const url = `https://queryus-production.up.railway.app/question/all?pageNo=${
      currentPage}`;
    try {
      const res = await axios.get(url,{headers:{
        'Authorization':`Bearer ${token}`
      }} );
      console.log(res.data);
      setQuestions(res.data);
      // setCurrentPage(currentPage + 1);
    } catch (error) {
      console.log(error);
    }
  }

  const handleNextPage = () => {
    console.log("into handle next");
    dispatch(updateCurrentPage(currentPage+1));
    fetchQuestions();
    
  };

  return (
    <>
    <div className="flex flex-col w-full bg-[#f5f5f5]">
      {questionList.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
      <div className="flex justify-between items-center mt-4 mr-8 ml-8 mb-4">
        <button className="bg-indigo-600 text-white rounded border-0 cursor-pointer px-6 py-2 hover:bg-indigo-400" onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <div className="m-auto flex items-center">{`Page ${currentPage+1}`}</div>
        <button className="bg-indigo-600 text-white rounded border-0 cursor-pointer px-6 py-2 hover:bg-indigo-400" onClick={handleNextPage} disabled={questionList.length<10}>
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default Questions;
