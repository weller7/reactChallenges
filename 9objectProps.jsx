import "./styles.css";


const USER_DATA = {
  name: "Jamie O'Hare",
  img: "mancity.jpg",
  occupation: "clerk"
}
//We can use props to add the information
function Badge (props) {
  return (
    <div stle={props.style}>
     <img alt={props.user.img} src={props.user.img} />
      <div>
        <h4>{props.user.name}</h4>
        <p>{props.user.occupation}</p>
      </div>
    </div> 
  )
}

//We can also destructure the props to access them
function Badge ({user, style}) {
  return (
    <div stle={style}>
     <img alt={user.img} src={user.img} />
      <div>
        <h4>{user.name}</h4>
        <p>{user.occupation}</p>
      </div>
    </div> 
  )
}

export default function App() {
  return (
   <Badge 
      user={USER_DATA}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--beige-10)",
        borderRadius: 8,
        backgroundColor: "var(--charcoal)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center"
      }}
   />
  );
}
