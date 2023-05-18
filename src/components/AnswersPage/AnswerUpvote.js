import React, { useState } from "react";
import { GoTriangleUp } from "react-icons/go";
import axios from "axios";

const AnswerUpvote = ({ count,id }) => {
  const token = localStorage.getItem("token");
  const [voteCount, setVoteCount] = useState(count);
  const [isUpvoted, setIsUpvoted] = useState(false);

  //  Answer Upvote URL
  const url = `https://queryus-production.up.railway.app/vote/answer/${id}`;

  const handleUpvote = async () => {
    if (!isUpvoted) {
      try {
        await axios.post(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVoteCount(voteCount + 1);
        setIsUpvoted(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex flex-col items-center">
      <button type="button" onClick={handleUpvote}>
        <GoTriangleUp className={`${isUpvoted}?text-gray-400:text-green-500`}/>
      </button>
      <p>{voteCount}</p>
    </div>
  );
};

export default AnswerUpvote;
