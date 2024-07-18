import "./styles.css";

function Avatar ({name, img}){
  return <img src={img} alt={img} />
}

function Name ({name}){
  return <h4>{name}</h4> 
}

function Occupation({occupation}){
  return <p>{occupation}</p>
}

function handleClcik (){
  alert("add friend")
}

function Badge({user, style, addFriend}){
  return (
    <div style={style}>
     <Avatar img={user.img} name={user.name}/>
     <div>
     <Name name={user.name}/>
     <Occupation occupation={user.occupation}/>  
     <button onClick={handleClcik} />
     </div>
     </div>
  )
}

//We declare the props so we can use them above
export default function App() {
  return (
   <Badge 
      user={{
        name: "Jamie O'Hare",
        img: "mancity.jpg",
        occupation: "clerk"
      }}
      style={{
        width: 300,
        margin: "0 auto",
      }}
   />
  );
}
