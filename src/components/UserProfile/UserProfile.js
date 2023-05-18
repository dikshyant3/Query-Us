import React,{useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebar";
import { FaUserTie } from "react-icons/fa";
import { GiStarMedal } from "react-icons/gi";
import axios from 'axios'
import UserQuestions from "./UserQuestions";

const UserProfile = () => {
  const token=localStorage.getItem('token');
  const user=JSON.parse(localStorage.getItem('currentUser'));
  const [questions,setQuestions]=useState([]);
  const [answerCount,setAnswerCount]=useState(0);

// Questions Count
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/question/user/me`;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

      setQuestions(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token])

// Answers Count
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://queryus-production.up.railway.app/answer/count/me`;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

      setAnswerCount(res.data.message);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token])
  


  return (
    <>
      <Navbar />

      <div className="flex mt-14">
        <div className="flex flex-col gap-12 w-1/5">
          <div className="ml-8 flex flex-col bg-indigo-700 rounded-xl w-[250px] h-[237px] pt-4">
            <FaUserTie className="text-white text-8xl mx-auto" />
            <div className="flex flex-col items-center pt-4">
              {/* Role */}
              <p className="font-medium text-lg text-white">{user.role}</p>
              <p className="text-2xl text-profileColor font-semibold">
                {user.firstName} {user.middleName} {user.lastName}
              </p>
              <p className="text-lg font-medium text-white">
                {user.email}
              </p>
            </div>
          </div>
          <div className="ml-8 flex flex-col bg-indigo-700 rounded-xl w-[250px] h-[237px] pt-4">
            <div className="flex gap-2 pt-4 mx-auto items-start">
              <GiStarMedal className="text-5xl text-medalGold" />
              <p className="text-3xl mr-6 text-profileColor font-semibold">Bronze</p>
            </div>
            
              {/* Reputation */}
              <p className="font-bold mx-auto text-8xl text-white">{user.reputation}</p>
              <p className="text-2xl text-profileColor font-medium mx-auto">
                Reputation
              </p>
            
            
          </div>
        </div>
        <div className="flex flex-col w-3/5 gap-4">
          <div className="flex gap-4 border-b-2 border-gray-600">
            <div className="flex flex-col bg-searchBar rounded-xl w-1/2 mb-4">
              <p className="mx-auto pt-4 text-3xl text-indigo-700 font-medium ">Questions Asked</p>
              <p className="mx-auto pt-4 text-8xl text-indigo-700 font-bold">{questions.length}</p>
            </div>
            <div className="flex flex-col bg-searchBar rounded-xl w-1/2 mb-4">
              <p className="mx-auto pt-4 text-3xl text-indigo-700 font-medium ">Answers Given</p>
              <p className="mx-auto pt-4 text-8xl text-indigo-700 font-bold">{answerCount}</p>
            </div>
          </div>
          <div className="flex flex-col">
              {questions.map((question)=>(
                <UserQuestions question={question} id={question.id}/>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
