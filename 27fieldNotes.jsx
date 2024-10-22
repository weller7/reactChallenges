import * as React from "react";
import { useRef } from 'reac';

export default function FieldNotes() {
  const [notes, setNotes] = React.useState([
    "Components encapsulate both the visual representation of a particular piece of UI as well as the state and logic that goes along with it.",
    "The same intuition you have about creating and composing together functions can directly apply to creating and composing components. However, instead of composing functions together to get some value, you can compose components together to get some UI.",
    "JSX combines the power and expressiveness of JavaScript with the readability and accessibility of HTML",
    "Just like a component enabled the composition and reusability of UI, hooks enabled the composition and reusability of non-visual logic."
  ]);

  //Create ref to have acces to the li element
  const lastNoteRef = React.useRef(null)

  React.useEffect(() => {
    if (lastNoteRef){
      lastNoteRef.current.scrollIntoView()
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newNote = formData.get("note");

    //Spread the current array and add the new note
    setNotes([...notes, newNote])
    //Reset the form
    form.reset()
  };

  return (
    <article>
      <h1>Field Notes</h1>
      <div>
        <ul >
          {notes.map((msg, index) => (
            <li 
            //Check if the index is the last in the array, if so attach the ref, otherwise stay null
            //So we only scroll to the last note added
            ref={ index === notes.length - 1 ? lastNoteRef : null} 
            key={index}>{msg}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="note"
            placeholder="Type your note..."
          />
          <button className="link" type="submit">
            Submit
          </button>
        </form>
      </div>
    </article>
  );
}
