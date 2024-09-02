import * as React from "react";

const initialState = {
  past: [],
  present: 0,
  future: [],
};

function reducer(state, action) {
  const { past, present, future } = state;

  if (action.type === "increment") {
    return {
      past: [...past, present],
      present: present + 1,
      future: [],
    };
  } else if (action.type === "decrement") {
    return {
      past: [...past, present],
      present: present - 1,
      future: [],
    };
  } else if (action.type === "undo") {
    return {
      //Remove the last item of the array
      past: past.slice(0, -1),
      //Get the value at the last position
      present: past.at(-1),
      //Add the present value at the start of the array and append all the future ones
      future: [present, ...future],
    };
  } else if (action.type === "redo") {
    return {
      //Have al the past values at the beginning and add the present one
      past: [...past, present],
      //The first element of the future array
      present: future[0],
      //Remove the first value of the future array since it's now the present value
      future: future.slice(1),
    };
  } else throw new Error("Action is not supported");
}

export default function CounterWithUndoRedo() {
  //Invoque useReducer to use state and dispatch
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //Dispatch each action
  const handleIncrement = (state) => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleUndo = () => {
    dispatch({ type: "undo" });
  };

  const handleRedo = () => {
    dispatch({ type: "redo" });
  };

  return (
    <div>
      <h1>Counter: {state.present}</h1>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
