import "./styles.css";

//If we only have an array with no keys 
function List (){
  const friends = ["Jamie","Ominis","Max"]

//We can use the index as a key (this will work if we don't mutate the array)
  return (
    <ul>
  {friends.map((name,index) => {
    return <li key={index}> {name} </li>
  })}
  </ul>
  )
}

export default function App() {

  return (
    <List />
  );
}
