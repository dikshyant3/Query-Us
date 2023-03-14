import React from 'react'
import './Tab.css'
import {Link} from "react-router-dom"


const Tab = () => {

  return (
    <>
      <div className="tab__container">
        <div className="tab__links">
            <div className="tab__link">
                <Link to="/register" >Signup</Link>
            </div>
            <div className="tab__link">
                <Link to="/login">Login</Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Tab