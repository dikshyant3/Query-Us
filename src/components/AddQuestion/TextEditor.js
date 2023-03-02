import React, { useState } from "react";
import "./TextEditor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
const TextEditor = ({ handleQuestionText }) => {
  const [value, setValue] = useState("");
  // console.log(value);
  const handleChange = (text) => {
    const plainText = text.replace(/<[^>]+>/g, "");
    setValue(plainText);
    console.log(plainText);
    handleQuestionText(plainText);
  };
  return (
    <div className="quill-container" style={{ direction: "auto" }}>
      <ReactQuill
        modules={modules}
        value={value}
        theme="snow"
        onChange={handleChange}
        placeholder="Content goes here..."
      />
    </div>
  );
};

export default TextEditor;
