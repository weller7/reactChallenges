import * as React from "react";

export default function App() {

  //We add state so we can know the current mode and change it with the function
  const [mode, toggleMode] = React.useState("dark")

  //We create an event handler for a click to be able to toggle the mode using toggleMode
  const handleClick = () => {
  toggleMode (mode === "dark" ? "light": "dark")

}

  return (
    <main className={mode}>
      
      /We add the event handler to the button
        <button onClick={handleClick}>

          //We change the text to the opposite of the current state
          {mode === "dark" ? "Activate light mode" : "Activate dark mode"}
          </button>
    </main>
  );
}
