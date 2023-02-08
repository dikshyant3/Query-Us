import './App.css';
import './fonts/Helvetica-Font/Helvetica.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/>}/> 
             
            
            <Route path='/register' element={ <Signup/>}/> 
              
            <Route path='/login' element={ <Login/>}/> 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
