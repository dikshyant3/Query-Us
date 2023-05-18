import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import './TextEditor.css'

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const stripHtml = (html) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
};

const TextEditor = ({ handleQuestionText}) => {
  const [value, setValue] = useState("");

  const handleChange = (text) => {
    setValue(text);
    const plainText = stripHtml(text); // Strip HTML tags
    console.log(plainText);
    handleQuestionText(plainText);
     // Pass the plain text to the parent component
  };
  return (
    <div className="flex">
      <div className="w-full">
        <ReactQuill
          modules={modules}
          className="bg-white border border-gray-300 rounded p-2 h-[auto] overflow-y-scroll resize-y w-full flex flex-col "
          value={value}
          onChange={handleChange}
          placeholder="Content goes here..."
        />
      </div>
    </div>
  );
};

export default TextEditor;
