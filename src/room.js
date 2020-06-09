import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Room() {

    const [isLit, setLit] = useState(false);
    const brightness = isLit ? "lit" : "dark";
    const [tempr, setTempr] = useState(22);
    

    const myScreen = (
      <div className={`room ${brightness}`}>
        <br />
        <p>The Room is {isLit ? "lit" : "dark"} </p>
        <p className={`ptemp ${brightness}`}>temperature is: {tempr}</p>
        <br />
        <img
          src={"https://thumbs.dreamstime.com/b/water-drip-8331601.jpg"}
          class="center"
        />

        <br />
        <button
          class="center"
          onClick={() => {
            console.log("Button clicked");
            setLit(!isLit);
          }}
        >
          FLIP light switch
        </button>
        <br />
        <button
          class="center"
          onClick={() => {
            console.log("Button clicked" + isLit);
            setLit(true);
          }}
        >
          switch ON
        </button>
        <button
          class="center"
          onClick={() => {
            console.log("Button clicked" + isLit);
            setLit(false);
          }}
        >
          switch OFF
        </button>
        <br />
        <button
          class="center"
          onClick={() => {
            console.log("Button clicked" + isLit);
            setTempr(tempr + 1);
          }}
        >
          +
        </button>
        <button
          class="center"
          onClick={() => {
            console.log("Button clicked" + isLit);
            setTempr(tempr - 1);
          }}
        >
          -
        </button>
      </div>
    );
    return (
        myScreen
           );

}
ReactDOM.render(<Room />, document.getElementById('root'));

export default Room;

/*
<div className={`room ${brightness}`}
 The backticks signify a template string in ES6. Template strings
allow you to insert variables within them, which is what the
 ${brightness} is doing.

 <div className={`room ${isLit ? "lit" : "dark"}`}> would work too

  // Wrapping with an arrow function
  // delays execution until the click
  // ✅
  <button onClick={() => setLit(!isLit)}>
    flip
  </button>

  // Unwrapped call to setLit will happen
  // before the button is even rendered!
  // 💥
  <button onClick={setLit(!isLit)}>
    flip
  </button>
  */
