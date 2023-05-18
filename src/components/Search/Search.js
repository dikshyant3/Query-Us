import React from 'react'
import { GrSearch } from 'react-icons/gr'

const Search = () => {
  return (
    <>
        <div className="flex items-center w-[60%] p-[10px] h-[40px] rounded border-none outline-0 ring-0 bg-[#f5f5f5]">
          <GrSearch style={{ fill: "slate" }} />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] outline-none border-0 ring-0 focus:border-0 focus:ring-0 bg-[#f5f5f5]"
          />
        </div>
    </>
  )
}

export default Search