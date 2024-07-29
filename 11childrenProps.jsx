import "./styles.css";


function Badge({ name, img, handle, children }) {
  return (
    <div className="badge">
      <img alt={`Avatar for ${name}`} src={img} />
      <header>
        <h4>{name}</h4>
        <h6>@{handle}</h6>
      </header>
      {children}
    </div>
  );
}

export default function App() {
  const handleAddFriend = () => alert("Added");

  //Children is basically what is inside the opening and closing of <Badge /> so we just have to pass children as props
  //to be able to get the <p> element.

  return (
    <Badge
    name="Jamie O'Hare"
    handle="Jamie"
    img="mancity.jpg"
  >
    <p>
      Jamie enjoys sports, lifting weights, fixing cars, as well as watching and playing football with his daughter.
    </p>
    <button onClick={handleAddFriend}>Add Friend</button>
  </Badge>
);
}
