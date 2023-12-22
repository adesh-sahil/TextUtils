import { useState } from 'react';
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import About from './componants/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom"

function App() {
  const [Mode,setMode] = useState(`lght`);
  const toggleMode = () => {
    if(Mode === `dark`) {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
    }
    else {
      setMode(`dark`);
      document.body.style.backgroundColor = `#212538`;
    }
  }

  
  return (
    <>
      <Router>
        <Navbar title = "Textutils" aboutText = "About TextUtils" Mode = {Mode} toggleMode = {toggleMode}/>
        <Routes>
            <Route path="/About" element={<About Mode = {Mode}/>} />
            <Route path="/" element= {<TextForm heading = "Enter the text to analyze" Mode = {Mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
