import React,{useState} from "react";

const QuestionItem = (props) => {
    const [title,setTitle]=useState('');
    const [views,setViews]=useState();
    const [count,setCount]=useState();
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-count">
            <p>{views}</p>
            <p>{count}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
