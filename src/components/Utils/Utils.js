import React, { useState, useEffect } from "react";
import axios from "axios";

const Utils = ({ id }) => {
  const [postingUserName, setPostingUserName] = useState('');
  const [postingUserReputation, setPostingReputation] = useState(0);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUserDetails = async () => {
      const url = `https://queryus-production.up.railway.app/user/info/${id}`;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('userUtils',res.data)
        setPostingUserName(res.data.firstName);
        setPostingReputation(res.data.reputation)
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetails();
  }, [id]);


  return (<>
     <div className="flex gap-2 items-center rounded px-[4px] py-[2px] bg-gray-200">
       <div className="flex text-indigo-800 text-xs">
        {postingUserName}
       </div>
       <div className="flex text-xs font-semibold text-medalBronze">
        {postingUserReputation}
       </div>
     </div>
  </>);
};

export default Utils;
