import React from "react";
import "./AddQuestion.css";
import TextEditor from "./TextEditor";
import "react-quill/dist/quill.core.css";

const AddQuestion = () => {
  //   const [title, setTitle] = useState("");
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
                <input type="text" />
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
                <input type="text" />
              </div>
            </div>
            <div className="post-buttons">
            <button className="btn-texteditor">Post Question</button>
            <button className="btn-discard">Cancel</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
