import * as React from "react";
import { useRef } from 'react';


//Solution with ref
function TextInput() {

  //Declare a ref that will give us acces to whatever element we put it on
  const inputRef = useRef(null)

  //After react renders we can call inputRef and focus on it
  React.useEffect(() =>{
    if (inputRef.current) {
        inputRef.current.focus()
    } 

  },[])
  

  return (
    <div>
      <h1>Autofocus Input</h1>
      <label htmlFor="focus">Email Address</label>
      {/* Add ref to jsx */}
      <input ref={inputRef} id="focus" type="email" placeholder="Enter your email" />
    </div>
  );
}

export default TextInput;



//Solution with <autoFocus>

import * as React from "react";

function TextInput() {


  return (
    <div>
      <h1>Autofocus Input</h1>
      <label htmlFor="focus">Email Address</label>
      {/* Add the attribute to the input field */}
      <input autoFocus id="focus" type="email" placeholder="Enter your email" />
    </div>
  );
}

export default TextInput;
