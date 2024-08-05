import * as React from "react";

export default function Clock() {
  //Set the time to null to aviod side effects of directly adding (new Date)
  const [time, setTime] = React.useState (null);

  //When react finished rendering we update our time with useEffect
  React.useEffect(() => {
    //The time is updated every second
    const timerId = window.setInterval(() => {
      setTime(new Date())
    }, 1000)

    //We have to clear the interval to avoid memoryleaks. When the clock is removed form the dom we clear the interval
    return() => {
      window.clearInterval(timerId)
    }
  }, [])

  if (time === null) return null;

  return (
    <section>
      <h1>Current Time</h1>
      //Time is an object and we use .toLocaleTimeString to return a string
      <p>{time.toLocaleTimeString()}</p>
    </section>
  );
}
