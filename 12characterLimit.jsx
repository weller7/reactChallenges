export default function App() {
  
  //We encapsulate all the logic for handling an event in our event handler
  //We pass the event as an argumet so we can have access to the object info we need (the value)
  function handleChange(event) {
    const text = event.target.value
    if (text.length > 10){
      alert("charater limit exceeded")
    }
  }

  return (
    <section>
      <h1>Character Limit</h1>
      <input onChange={handleChange} placeholder="Enter some text" />
    </section>
  );
}
