import "./styles.css";
import {getIsLactoseTolerant} from "./utils";

function LactoseIntolerant (){

  return(
    <h1>
  <span role="img" aria-label="brocolli and strawberry">
    brocolli strawberry
    </span>
    </h1>
  )
}

function LactoseTolerant () {
return (
  <h1>
  <span role="img" aria-label="milk and cheese">
    milk and cheese
    </span>
    </h1>
)
}

export default function App() {

  const isLactoseTolerant = getIsLactoseTolerant()

//We take our solutuion form the previous challenge and 
//change the return to a ternary operator still using the result we get from isLactose tolerant

  return isLactoseTolerant 
  ? <LactoseTolerant /> 
  : <LactoseIntolerant /> 
  
}
