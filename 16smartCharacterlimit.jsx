//First solution
import * as React from "react";

function LimitedTextInput({ characterLimit = 20 }) {
  //Add input value into state to keep track of it
  const [inputValue, setInputValue] = React.useState("");
  //Use length to find the number of character in the input
  const remainingChars = characterLimit - inputValue.length
  //Create boolean variable to know if the limit is exceeded
  const limitExceeded = characterLimit < 0

  const handleChange = (e) => {
    //Set the input value to the value inside the form
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Check if the limit is exeeded using our variable
    if(limitExceeded){
      alert("The input exceeds the character limit. Please shorten your text.")
      }else{"Thanks for your submission"}
      //Reset the input once it has been sent
      setInputValue("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        //Change the class depending if the limit is exceeded
        <span className = {limitExceeded ? "error": "no-error" }>
          //Show the count of the remaining characters using our variable
          Characters remaining: {remainingChars}</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}






//Second solution
import * as React from "react";

function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue,setInputValue] = React.useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.lenght > characterLimit){
      alert("The input exceeds the character limit. Please shorten your text.")
    }else {alert("Thanks for your submission")}
    setInputValue("")

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className = {characterLimit <= 20 ? "no-error": "error"}>
          Characters remaining: {characterLimit - inputValue.length}</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}


