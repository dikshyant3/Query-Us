import React, { useState, useEffect } from "react";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";
import Navbar from "../components/Navbar/Navbar";
import TextEditor from "../components/AddQuestion/TextEditor";

const EditQuestions = () => {
  const token = localStorage.getItem("token");
  const [tags, setTags] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [question, setQuestion] = useState(null);

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("query");

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

  const handleSubmit=()=>{

  }

  const handleQuestionText=()=>{}

  return (
    <>
      <Navbar />
      <div className="flex w-full p-4 bg-gray-100">
        <div className="flex flex-col max-w-screen-md w-3/4 relative left-[20%] z-10">
          <h2 className="mt-8 text-2xl font-extrabold mb-4">Update a question</h2>
          <div className="flex flex-col items-center mb-4">
            <div className="items-start bg-white p-4 rounded w-full">
              <h3 className="mb-2 text-lg font-bold">Title</h3>
              <input
                className=" w-full rounded border-[0.5px] border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-500 transition duration-200"
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className=" mb-4">
            <div className="bg-white p-4 rounded w-full ">
              <h3 className="text-lg font-bold">Body</h3>
              <small className="mb-1">
                Include all the details you want someone to answer
              </small>

              <TextEditor
                questionText={questionText}
                handleQuestionText={handleQuestionText}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 w-full p-4 bg-white rounded-sm">
            <h3 className="mb-2 text-lg font-bold">Tags</h3>
            <small className="mb-1">
              Add upto three tags to describe what your question is about.
            </small>

            <TagsInput
              value={tags}
              onChange={setTags}
              name="tag"
              placeHolder="Press Enter to add new tags"
            />
          </div>

          <div className="px-4">
            <button
              onClick={handleSubmit}
              className="px-[10px] py-[8px] float-right bg-indigo-600 text-white border-none rounded cursor-pointer hover:bg-indigo-400"
            >
              Update Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditQuestions;
