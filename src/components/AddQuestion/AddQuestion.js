import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddQuestion.css";
import TextEditor from "./TextEditor";
import { TagsInput } from "react-tag-input-component";


const AddQuestion = () => {
  const [questionTag, setQuestionTag] = useState([]);
  const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      const bodyJSON = {
        title: title,
        questionTag: JSON.stringify(questionTag),
      };
      try {
        const res = await axios.post(
          "https://queryus-production.up.railway.app/question/add",
          bodyJSON,
          { withCredentials: true }
        );
        console.log(res.data);
        alert("Question added successfully!!!");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
  }};
  // const [value, setValue] = useState('');
  return (
    <div className="add-questions">
      <div className="add-question-container">
        <div className="header">
          <h2>Ask a question</h2>
        </div>
        <div className="questions__container">
          <div className="question-options">
            <div className="question-option">
              <div className="questionTitle">
                <h3>Title</h3>
                <input
                  className="addText"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="questionTitle">
                <h3>Body</h3>
                <small>
                  Include all the details you want someone to answer
                </small>
                <div className="textEditor">
                  <TextEditor />
                </div>
              </div>
            </div>
            <div className="question-option">
              <div className="add-tags">
                <h3>Tags</h3>
                <small>
                  Add upto three tags to describe what your question is about.
                </small>

                <TagsInput
                  value={questionTag}
                  onChange={setQuestionTag}
                  name="questionTags"
                  placeHolder="Press Enter to add new tags"
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} className="btn-texteditor">
          Post Question
        </button>
        {/* <button className="btn-discard">Cancel</button> */}
      </div>
    </div>
  );
};

export default AddQuestion;
