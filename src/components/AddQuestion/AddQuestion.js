import React,{useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddQuestion = () => {
  //   const [title, setTitle] = useState("");
  const [value, setValue] = useState(''); 
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
                <ReactQuill theme="snow" value={value} onChange={setValue}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
