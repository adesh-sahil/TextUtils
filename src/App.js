import { useState } from 'react';
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import About from './componants/About';

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
  const toggleMode2 = () => {
    if(Mode === `dark`) {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
    }
    else {
      setMode(`dark`);
      document.body.style.backgroundColor = `#212121`;
    }
  }
  
  return (
    <>
      <Navbar title = "Textutils" Mode = {Mode} toggleMode = {toggleMode} toggleMode2 = {toggleMode2}/>
      <TextForm heading = "Enter the text to analyze" Mode = {Mode}/>
      <About/>
    </>
  );
}

export default App;
