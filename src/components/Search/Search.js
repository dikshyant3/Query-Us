import axios from 'axios';
import React ,{useState} from 'react'
import { GrSearch } from 'react-icons/gr'
import { useDispatch } from 'react-redux';
import { updateList } from '../../redux/questionsSlice';


const Search = () => {
  const [searchString,setSearchString] = useState("");
  const dispatch = useDispatch()
  const token = localStorage.getItem('token');

  const handleChange = (event)=>{
      setSearchString(event.target.value);
      console.log(event.target.value);
  }
  const handleInputSubmit = async(e) => {
    const url = `http://queryus-production.up.railway.app/question/search`
    e.preventDefault();
    console.log("Submitted")

    const res = await axios.get(url,{
        params:{query:searchString},
      headers:{'Authorization':`Bearer ${token}`}
    })
    console.log(res.data);
    dispatch(updateList(res.data));
    
  };
  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleInputSubmit(event);
    }
  };


  return (
    <>
        <div className="flex items-center w-[60%] p-[10px] h-[40px] rounded border-none outline-0 ring-0 bg-[#f5f5f5]">
          <GrSearch style={{ fill: "slate" }} />
          <form onSubmit={handleInputSubmit}>
           <input
            type="text"
            onKeyDown={handleKeyPressed}
            placeholder="Search"
            className="w-full h-[40px] outline-none border-2 ring-0 focus:border-0 focus:ring-0 bg-[#f5f5f5]" onChange={handleChange} value={searchString}
          />
          </form>
        </div>
    </>
  )
}

export default Search