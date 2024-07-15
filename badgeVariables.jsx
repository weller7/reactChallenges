import React from 'react';

function Badge() {
  const name = "Jamie O'Hare";
  const handle = "jamieOhare";
  const img = "https://w0.peakpx.com/wallpaper/601/199/HD-wallpaper-manchester-city-fc-blue-background-english-football-team-manchester-city-fc-emblem-premier-league-england-football-manchester-city-fc-logo.jpg";


return (
 <div className="badge">
  <img alt={`image for ${name}`} src={img} />
  <div>
    <h4>{name} </h4>
    <p>@{handle}</p>
    </div>
    </div>
);
}
  export default function App (){
    return <Badge/>
 }
