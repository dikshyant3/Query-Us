import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import TextEditor from "../AddQuestion/TextEditor";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AnswersPage = () => {
  const token = localStorage.getItem("token");
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState("");

  // The below three lines of used to redirect a single question to answersPage
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("query");

  // console.log("DIKSHYANT")
  const url = `https://queryus-production.up.railway.app/question/${id}`;
  const answerUrl = `https://queryus-production.up.railway.app/answer/add/${id}`;

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

  const handleAnswerText = (value) => {
    setAnswerText(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        answerUrl,null,
        { params: { answer: answerText } ,
        
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      toast.success("Answer added successfully!!!");
      setAnswerText("");
    } catch (error) {
      console.log(error);
      toast.error("Error While Posting the answer.")
    }
    
  };

  return (
    <div className="flex border-2 border-blue-500 mt-4">
      <div className="flex flex-col w-1/2  mx-auto">
        {/* heading part */}
        <div className="flex flex-col border-b-2" key={question.id}>
          <div className="flex flex-col border-b-2 border-gray-200 ">
            <div className="flex items-center justify-between border-2 border-black">
              <p className="text-2xl font-medium text-black opacity-80">
                {question.questionTitle}
              </p>
              <Link to="/addquestion">
                <button
                  type="button"
                  className="px-[10px] py-[8px] rounded text-white text-sm font-light bg-indigo-600 hover:bg-indigo-400"
                >
                  Ask Question
                </button>
              </Link>
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
          <div className="flex flex-col border-gray-200">
            <p className="text-gray-800 mt-2">{question.questionText}</p>
            <div className="flex items-center mb-3">
              {question.tags.map((tag) => (
                <div className="mr-4 text-indigo-600">{tag}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Answers */}
        <div className="mt-2">
          <p className="text-2xl font-medium">{question.answerCount} Answers</p>
          {question.answers.map((answer) => (
            <div className="mt-4 flex flex-col" key={answer.id}>
              <div className="border-b-2 border-gray-200">
                <p className="max-w-1/2">{answer.answer}</p>
                <div className="flex mr-4 mt-3">
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
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* REACT Quill */}
        <div className="flex flex-col mt-4 w-full">
          <h2 className="mb-4 text-2xl font-medium ">Your Answer</h2>
          <TextEditor
            answerText={answerText}
            handleQuestionText={handleAnswerText}
          ></TextEditor>
          <div className="mt-4 border-2 border-red-600 ">
            <button
              onClick={handleSubmit}
              className="px-[10px] py-[8px] float-right mr-32 bg-indigo-600 text-white border-none rounded cursor-pointer hover:bg-indigo-400"
            >
              Post Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswersPage;
