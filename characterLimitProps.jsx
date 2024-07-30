//We pass characterLimit as props to access the property we gave it below
function Input({ characterLimit }) {

  //When you have an event handler in React you want to keep it inside the component so it can acces props and state of that component
  //We get the event from the input field
  const handleChange = (event)=> {
  
    if( event.target.value.length > characterLimit){
      alert("character limit exceeded")
    }
  }

  return <input onChange = {handleChange} placeholder="Enter some text" /> 

}

export default function App() {
  return (
   <section>
      <h1>Character Limit</h1>
     //We added the property for the character limit here which can be accesed via props
      <Input characterLimit={5}/>
      </section>
  );
}
