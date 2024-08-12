import * as React from "react";

export default function ExpandingTextarea() {
  const [text, setText] = React.useState("") 

  //Add ref to have access to the dom element
  const textRef = React.useRef(null)


  const handleChange = (event) => {
    setText(event.target.value)

    //Reset the text area height to it's initial value
    textRef.current.style.height = "inherit"
    //Calculate the current scrollheight and set it to a variable
    const scrollHeight = textRef.current.scrollHeight
    //Change the height of the text area to the scroll height
    textRef.current.style.height = scrollHeight + "px"
  }


  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <textarea 
        ref = {textRef}
        id="textarea"
        placeholder="Enter some text"
        value={text}
        onChange={handleChange}
        rows={1}
      />
    </section>
  );
}
