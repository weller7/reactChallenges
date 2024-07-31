import * as React from "react";

export default function App() {
  //Add state to keep track of the value and re render whenever it changes
  let [count, setCount] = React.useState(0)

//Abstracted the logic for managing the state into each event handler
 let handleMinus = () => {
    setCount (count = count-1)
  }

  let handlePlus = () => {
    setCount (count = count+1)
  }

  return (
    <main>
      <span>{count}</span>
      <div>
        //Add onClick so when the user clicks react will invoque the correct fuction
        <button onClick={handleMinus}>-</button>
        <button onClick={handlePlus}>+</button>
      </div>
    </main>
  );
}
