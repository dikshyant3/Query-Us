import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextEditor from "../AddQuestion/TextEditor";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AnswerUpvote from "./AnswerUpvote";
import Navbar from "../Navbar/Navbar";
// import image from "../../images/question-bgremoved.png";
import QuestionUpvote from "./QuestionUpvote";
import Utils from "../Utils/Utils";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const AnswersPage = () => {
  const token = localStorage.getItem("token");
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // The below three lines of used to redirect a single question to answersPage
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("query");
  const editId= params.get("edit")
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  // console.log("DIKSHYANT")
  const url = `https://queryus-production.up.railway.app/question/${id}`;
  const answerUrl = `https://queryus-production.up.railway.app/answer/add/${id}`;
  const duplicateUrl = `https://queryus-production.up.railway.app/question/duplicate/${id}`;

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        setQuestion(res.data);
        if(editId>0){
          const ans = res.data.answers
          const answer = ans.find(obj=>obj.id==editId).answer
          setAnswerText(answer)
          // console.log("Edit Mode...",res.data.answers.filter(x=>x.id===editId))
          // setEditingAnswer(res.data.answers.find(x=>x.id===editId).answer);
        }
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestion();
  }, [token, url]);

  if (!question) {
    return <div>Loading...</div>;
  }

  const handleAnswerText = (value) => {
    setAnswerText(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(answerUrl, null, {
        params: { answer: answerText },

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      toast.success("Answer added successfully!!!");
      setAnswerText("");
      window.location=`http://localhost:3000/answersPage?query=${id}`
    } catch (error) {
      console.log(error);
      toast.error("Error While Posting the answer.");
    }
    
  };
  const handleUpdateSubmit=async()=>{
    const updateUrl = `https://queryus-production.up.railway.app/answer/update/${editId}`
    try{
      const res = await axios.put(updateUrl,null,{
        params:{answer:answerText},
        headers:{Authorization: `Bearer ${token}`}
      })
      navigate(0)
    }catch(error){
      console.log(error)
    }
    
  }
  const sortedAnswers = question.answers
    .slice()
    .sort((a, b) => b.voteCount - a.voteCount);

  // const formatViewCount = (count) => {
  //   if (count >= 500000) {
  //     return "500k+";
  //   } else if (count >= 1000) {
  //     return Math.floor(count / 1000) + "k";
  //   }
  //   return count.toString();
  // };

  const handleDuplicate = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    const question =
      inputValue.split("=").length === 2
        ? "/question/" + inputValue.split("=")[1]
        : "";
    const res = await axios.post(duplicateUrl, null, {
      params: { link: question },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  };
  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleInputSubmit();
    }
    console.log(event.key);
  };
  const handleDelete = async () => {
    const url = `https://queryus-production.up.railway.app/question/delete/${id}`;
    try {
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit?query=${id}`);
  };
  const handleAnswerEdit = (aid) => {
    console.log(id)
    window.location=`http://localhost:3000/answersPage?query=${id}&edit=${aid}`

  };
  const handleAnswerDelete = async (ansId) => {
    const url = `https://queryus-production.up.railway.app/answer/delete/${ansId}`;
    try {
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      // what to do after deleting an answer
      // window.location=`http://localhost:3000/answersPage?query=${id}`
      navigate(0)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentUser.id + "    " + question.userId);
  return (
    <>
      <Navbar />
      <div className="flex bg-searchBar">
        <Sidebar />
        <div className="flex flex-col w-1/2 z-10 mx-auto">
          {/* heading part */}
          <div className="flex flex-col" key={question.id}>
            <div className="flex flex-col border-b-2 border-gray-200 ">
              <div className="flex items-center mt-4 w-full justify-between">
                <p className="text-2xl w-3/4 font-medium text-black opacity-80">
                  {question.questionTitle}
                </p>
              </div>
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-10 ">
                  <p className="text-sm font-thin opacity-60 pr-2">Asked </p>
                  <p className="text-sm font-thin ">
                    {question.timestamp[0] +
                      "/" +
                      question.timestamp[1] +
                      "/" +
                      question.timestamp[2]}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-thin opacity-60 pr-2">Viewed</p>
                  <p className="text-sm font-thin">{question.views} times</p>
                </div>
              </div>
            </div>
            {/* Question Text Or Body */}
            <div className="flex flex-col w-full items-center gap-8 mb-2 border-b-2 border-gray-200">
              <div className="flex gap-8 w-full justify-start items-start">
                <div className="flex flex-col mt-3">
                  <QuestionUpvote
                    count={question.voteCount}
                    upVoted={question.upVoted}
                    id={id}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-gray-800 mt-2 pb-4">{question.questionText}</p>
                  <div className="flex items-end justify-between mb-4">
                    <div className="flex items-center">
                      {question.tags.map((tag) => (
                        <div className="mr-3 text-indigo-600">{tag}</div>
                      ))}
                    </div>
                    <div className="flex mb-1">
                      <Utils id={question.userId} />
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4 items-center">
                    {question.userId === currentUser.id && (
                      <div className="flex gap-4 items-center">
                        <button
                          type="button"
                          className="text-sm font-light text-indigo-600 hover:text-indigo-400"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="pl-4 text-sm font-light text-red-600 hover:text-red-400"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                    {question.originalQuestionId === 0 ? (
                      <div className="flex">
                        {showInput && (
                          <form onSubmit={handleInputSubmit}>
                            <input
                              type="text"
                              value={inputValue}
                              onChange={handleInputChange}
                              onKeyDown={handleKeyPressed}
                              className="outline-none rounded border-black opacity-40 ring-0 h-[20px] focus:border-indigo-500"
                            />
                            {/* <button type="submit"></button> */}
                          </form>
                        )}
                        <button
                          onClick={handleDuplicate}
                          className="pl-4 text-sm font-light text-indigo-600 hover:text-indigo-400"
                        >
                          Mark Duplicate
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={`/answersPage?query=${question.originalQuestionId}`}
                      >
                        Original Question
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Answers */}
          <div className="mt-2">
            <p className="text-2xl font-medium">
              {question.answerCount} Answers
            </p>
            {sortedAnswers.map((answer) => (
              <div
                key={answer.id}
                className="flex items-start border-b-2 border-gray-200 gap-8"
              >
                <div className="flex flex-col pt-6">
                  <AnswerUpvote
                    count={answer.voteCount}
                    id={answer.id}
                    upVoted={answer.upVoted}
                  />
                </div>
                <div className="mt-4 flex flex-col w-full" key={answer.id}>
                  <div className="w-full ">
                    <p className="max-w-1/2">{answer.answer}</p>
                    <div className="flex mr-4 items-center justify-between mb-2 mt-3">
                      <div className="flex items-center mr-10 ">
                        <p className="text-sm font-thin opacity-60 pr-2">
                          Answered{" "}
                        </p>
                        <p className="text-sm font-thin ">
                          {answer.timestamp[0] +
                            "/" +
                            answer.timestamp[1] +
                            "/" +
                            answer.timestamp[2]}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        {/* user tag */}
                        <Utils id={answer.userId} />
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      {answer.userId === currentUser.id && (
                        <div className="flex gap-4 items-center">
                          <button
                            type="button"
                            className="pl-4 text-sm font-light text-indigo-600 hover:text-indigo-400"
                            onClick={()=>handleAnswerEdit(answer.id)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="pl-4 text-sm font-light text-red-600 hover:text-red-400"
                            onClick={() => handleAnswerDelete(answer.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* REACT Quill */}
          <div className="flex flex-col mt-4 w-full">
            <h2 className="mb-4 text-2xl font-medium ">Your Answer</h2>
            <TextEditor
              txt={answerText}
              handleQuestionText={handleAnswerText}
            ></TextEditor>
            <div className="mt-4">
              {editId>0?<button
                onClick={handleUpdateSubmit}
                className="px-[10px] py-[8px] float-right bg-indigo-600 text-white border-none rounded cursor-pointer hover:bg-indigo-400"
              >
                Update Answer
              </button>:<button
                onClick={handleSubmit}
                className="px-[10px] py-[8px] float-right bg-indigo-600 text-white border-none rounded cursor-pointer hover:bg-indigo-400"
              >
                Post Answer
              </button>}
              
            </div>
          </div>
        </div>
        {/* image section */}
        {/* <div className="flex w-[350px] h-[350px] top-0 bg-transparent">
          <img src={image} alt="answerIllustration" />
        </div> */}
      </div>
    </>
  );
};

export default AnswersPage;
