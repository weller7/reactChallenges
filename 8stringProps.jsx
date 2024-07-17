import "./styles.css";

//we can also use destructuring functiton Badge({name, occupation, img}) and we can access them without using props.
function Badge (props){
  return (
    <div className="badge">
    <img alt={props.name} src={props.img} />
      <div> 
        <h4>{props.name}</h4>
        <p>{props.occupation}</p>
        </div> 
    </div>
  )
}

export default function App() {

  return (
    <Badge 
     name="Jamie O'Hare"
     occupation="clerk"
     img="mancity.jpg"
     />
  );
}
