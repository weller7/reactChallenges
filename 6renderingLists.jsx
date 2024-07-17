function List (){
  const friends = [
    {id:1, name: "Jamie"},
    {id:2, name: "Ominis"},
    {id:3, name: "Max"},
  ]

  //We use map to render lists in react
  return (
    <ul>
  {friends.map((friend) => {
    return <li key={friend.id}> {friend.name} </li>
  })}
  </ul>
  )
}

//The return can also be done with destructuring
<ul>
  friends.map(({ id, name }) => {
    return <li key={id}> {name} </li>
  })}
</ul>
)
}

export default function App() {

  return (
    <List />
  );
}
