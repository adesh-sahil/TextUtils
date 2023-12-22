import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleSpeechClick = () => {
        if (window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
          } else {
            console.error('SpeechSynthesis is not supported in this browser');
        }
    }
    const handleCopyClick = () => {
        var text = document.getElementById('text-box');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const textareaStyle = {
        backgroundColor: props.Mode === 'dark' ? 'rgb(31 39 58)' : 'white',
        color: props.Mode === 'dark' ? 'white' : 'black',
        border: '1px solid #ced4da', 
        borderRadius: '4px', 
        padding: '8px', 
        width: '100%', 
      };
  return (
    <>
        <div className="container my-3" style = {{color: props.Mode === `dark`? `white`: `black`}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={textareaStyle} id="text-box" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpeechClick}>Speech</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-5" style = {{color: props.Mode === `dark`? `white`: `black`}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
        
            
  )
}
