import React from "react";
import TextEditor from "./TextEditor";

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
                 <TextEditor/>
              </div>
              <div className="add-tags">
                <h3>Tags</h3>
                <small>Add upto three tags to describe what your question is about.</small>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
