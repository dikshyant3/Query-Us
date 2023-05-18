import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserQuestions = ({ question }) => {
  return (
    <>
      <div
        className="w-[95%] flex flex-col mt-5 mx-auto border-b-2 border-gray-200"
        key={question.id}
      >
        <div className="flex items-center">
          <div className="flex flex-col mr-8 items-center px-[5px] py-[10px]">
            <BsTriangleFill />
            <p>{question.voteCount}</p>
          </div>

          <div className="w-full flex mr-[5] justify-between">
            <div className="flex">
              <Link
                to={`/answersPage?query=${question.id}`}
                className="text-black text-[1.1rem] font-semibold"
              >
                <p>{question.questionTitle}</p>
              </Link>
            </div>
            <div className="flex justify-end ml-6">
              <small className="flex mr-1 items-center ">
                {question.timestamp[0] +
                  "/" +
                  question.timestamp[1] +
                  "/" +
                  question.timestamp[2]}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserQuestions;
