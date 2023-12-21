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
    }
    const handleOnChange = (event) => {
        console.log("On Changed");
        setText(event.target.value)
    }
  return (
    <>
        <div className="container my-3" style = {{color: props.Mode === `dark`? `white`: `black`}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.Mode === `dark`? `#212121`: `white`, color: props.Mode === `dark`? `white`: `black`}} id="text-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleSpeechClick}>Speech</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style = {{color: props.Mode === `dark`? `white`: `black`}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
        
            
  )
}
