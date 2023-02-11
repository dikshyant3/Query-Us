import React,{useEffect} from 'react'
import axios from 'axios';

const Questions = () => {
  const getAllQuestions=async()=>{
    const url="https://queryus-production.up.railway.app/";
    await axios.get(url,{withCredentials:true}).then((res)=>{
      console.log(JSON.stringify(res));
    })
  //   const response=await fetch(url,{
  //     method:"GET",
  //     credentials:'same-origin',
  //     headers:{
  //       "content-type":"application/json"
  //     }
  // })
  // const json=await response.json();
  // console.log(json);
  }
  useEffect(() => {
    getAllQuestions();
  }, [])
  
  return (
    <div className='questions'>
      <div className="questions__container">
        <div className="card">

        </div>
      </div>
    </div>
  )
}

export default Questions