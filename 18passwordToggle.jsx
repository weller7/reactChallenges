import React, { useState } from "react";

function PasswordInput({ minimum = 8 }) {
  //Add state to input value and inputValueVisible to be able to change it on each render
  const [inputValue, handleInputValue] = React.useState("");
  const [isInputValueVisible, handleVisibility] = React.useState(false) ;
  const thresholdMet = inputValue.length >= minimum

  //Pass the event to handle change to get the value of the input field 
  const handleChange = (e) => {
    handleInputValue(e.target.value)
  };

  //Change the value of the input visibility to the opposite
  const handleToggleVisibility = () => {
    handleVisibility(!isInputValueVisible)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //If the threshold is met alert submitted if not ask for a longer password
    if (thresholdMet) {
      alert("Password submitted");
    } else {
      alert("You need a longer password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Password: </label>
        //Show the text on red or green depending if it's 8 or longer characters
        <span className={thresholdMet ? "no-error" : "error"}>
          //Show the lenght of the input value
          {inputValue.length}
        </span>
      </div>
      <div>
        <input
          placeholder="Enter a password"
          //The input changes from text to password when the user uses the toggle visibility button
          type={isInputValueVisible ? "text" : "password"}
          id="limited-text-input"
          value={inputValue}
          onChange={handleChange}
          />
         <button type="button" onClick={handleToggleVisibility}>
           {isInputValueVisible ? "yes" : "no"} 
           </button>
        </div>

        <button type="submit" className="primary">
        Submit
        </button>
        </form>
  )
}

export default PasswordInput;
