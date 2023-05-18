import React, { useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import axios from "axios";

const AnswerUpvote = ({ upVoted,count,id }) => {
  const token = localStorage.getItem("token");
  const [voteCount, setVoteCount] = useState(count);
  const [isUpvoted, setIsUpvoted] = useState(upVoted);

  //  Answer Upvote URL
  const url = `https://queryus-production.up.railway.app/vote/answer/${id}`;

  const handleUpvote = async () => {
    
      try {
        await axios.post(url,null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!isUpvoted) {
        setVoteCount(voteCount + 1);
        setIsUpvoted(true);
      } 
      else{
        setVoteCount(voteCount-1);
        setIsUpvoted(false);
      }
    }
    catch (error) {
        console.log(error);
      }
    
  };
  return (
    <div className="flex flex-col items-center">
      <button type="button" className={`text-xl ${isUpvoted ? 'text-green-500' : 'text-gray-400'}`} onClick={handleUpvote}>
        <BsTriangleFill />
      </button>
      <p>{voteCount}</p>
    </div>
  );
};

export default AnswerUpvote;
