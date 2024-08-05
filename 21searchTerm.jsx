import * as React from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Raspberry",
  "Strawberry",
  "Watermelon"
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");

  //We don't need to have state for this because we can use it
  //from the state we already have
  const filteredItems = items.filter((item) =>
  item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  
  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        //When there's a change we set the value of the term
        //to the one that is on the input
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredItems.map((item) => (
            <li key={item}> {item} </li>
          ))}
          </ul>
          </div>
          )
}
