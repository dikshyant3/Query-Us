import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Utils from "../Utils/Utils";

const QuestionItem = ({ question }) => {
  
  return (
    <>
      <div className="w-[95%] flex flex-col mt-5 rounded-xl bg-white  mx-auto " key={question.id}>
        <div className="flex flex-col w-full rounded-lg p-4 shadow-myShadow">
          <div className="flex">
            <div className="question-container-left">
              <div className="flex flex-col text-black text-opacity-80">
                <div className="flex flex-col mr-8 items-center px-[5px] py-[10px]">
                  <BsPersonCircle className="text-4xl"/>
                </div>
                <div className="flex flex-col mr-8 items-center px-[5px] py-[10px]">
                  <BsTriangleFill className="opacity-80"/>
                  <p>{question.voteCount}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full">
              <div className="flex gap-[10px] items-center mb-2">
                <div className="flex text-sm font-bold mr-[5%]">
                  <div className="timestamp-date">
                    <small className="mr-1 items-center">
                      {question.timestamp[0] +
                        "/" +
                        question.timestamp[1] +
                        "/" +
                        question.timestamp[2]}
                    </small>
                    <small className="mr-1 items-center">at</small>
                  </div>
                  <div className="timestamp-time">
                    <small className="mr-1 items-center">
                      {question.timestamp[3] + ":" + question.timestamp[4]}
                    </small>
                  </div>
                </div>
                <div className="flex items-end gap-5 justify-between text-sm">
                  {question.tags.map((tag) => (
                    <div className="text-indigo-800 h-full">{tag}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex mt-1 mb-3" >
                  <Link to={`/answersPage?query=${question.id}`} className="text-black text-[1.1rem] font-semibold">
                    <p>{question.questionTitle}</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex justigy-between items-start gap-8">
                  <div className="flex h-full items-center justify-evenly bg-[#d9d9d9] rounded px-[10px]">
                    <p className="m-2">{question.answerCount}</p>
                    <span className="mr-[2px]">answers</span>
                  </div>
                  <div className="flex h-full items-center justify-evenly bg-[#d9d9d9] rounded px-[10px]">
                    <p className="m-2">{question.views}</p>
                    <span className="mr-[2px]">views</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <Utils id={question.userId}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionItem;
