import "./App.css";
import "./fonts/Helvetica-Font/Helvetica.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddQuestion from "./components/AddQuestion/AddQuestion";
// import Questions from "./components/Questions/Questions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
        {/* <Route path='/' element={ <Navbar/>}/>  */}

          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/addquestion" element={<AddQuestion />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
