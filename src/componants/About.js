import React from 'react';

const About = (props) => {
  const myStyle = {
    color: props.Mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.Mode === 'dark' ? '#212538' : 'white'
  }
  const myBox = {
    backgroundColor: props.Mode === 'dark' ? 'rgb(31 39 58)' : 'white',
    color: props.Mode === 'dark' ? 'white' : 'black',
    border: '1px solid #ced4da', 
    borderRadius: '6px', 
    padding: '8px', 
    boxShadow: props.Mode === 'dark' ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
  }
  return (
    <div className="container my-5" style = {myStyle}>
      <div className="text-center">
        <h1 className="display-3">About TextUtils</h1>
        <p className="lead">
          Welcome to TextUtils - your go-to text manipulation tool!
        </p>
      </div>

      <div className="my-5">
        <h2 className="mb-4">Key Features</h2>
          <ul style = {myBox}>
            <li className="list-group-item" >
              <h5 >Text Conversion</h5>
              <p>
                Easily convert text to uppercase or lowercase with just a click. This feature is perfect for when you need your text to be in a specific case.
              </p>
            </li>
            <li className="list-group-item">
              <h5>Copy Text</h5>
              <p>
                Copy the modified text to your clipboard effortlessly. Save time and avoid the hassle of manually selecting and copying text.
              </p>
            </li>
            <li className="list-group-item">
              <h5>Speech Synthesis</h5>
              <p>
                TextUtils comes with a built-in text-to-speech feature. Listen to your text being spoken aloud, which can be useful for proofreading or simply enjoying a hands-free experience.
              </p>
            </li>
          </ul>
      </div>

      <div className="my-5">
        <h2 className="mb-4">How to Use TextUtils</h2>
        <ul style={myBox}>
          <li className="list-group-item">
            <h5>Enter Text</h5>
            <p>
              Start by entering your text in the provided input area.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Choose Action</h5>
            <p>
              Select the desired action from the options provided, such as "Uppercase" or "Lowercase."
            </p>
          </li>
          <li className="list-group-item">
            <h5>Perform Action</h5>
            <p>
              Click the corresponding button to perform the chosen action on your text.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Copy or Listen</h5>
            <p>
              Copy the modified text to your clipboard or use the speech synthesis feature to have the text read aloud.
            </p>
          </li>
        </ul>
      </div>

      <p className="my-5">
        TextUtils is designed to be user-friendly and efficient, making text manipulation tasks a breeze. Feel free to explore and make the most out of the features offered by TextUtils! Happy text editing!
      </p>
    </div>
  );
};

export default About;
