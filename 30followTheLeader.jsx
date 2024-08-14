

import * as React from "react";

export default function FollowTheLeader() {
  //Add ref to know the widh and height of the box
  const ref = React.useRef (null)
  const [position, setPostion] = React.useState ([0, 0]);
  
  //Took the event and destrucured clientX and clientY
  const handleClick = ({ clientX, clientY }) => {

    //whenever handleClick is invoked, first get the width and height of the box 
    //by calling getBoundingClientRect
    const { width , height} = ref.current.getBoundingClientRect()
    //Calculate the new postitions diving the width and height by 2. That way, 
    //so the yellow box will animate to the center of where the user clicked.
    setPostion([clientX - width /2, clientY - height /2])
  };

  return (
    //The handle click will be active on all the area where the user can click
    <div className="wrapper" onClick={handleClick}>
      <div
        className="box"
        ref = {ref}
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s"
        }}
      />
    </div>
  );
}
