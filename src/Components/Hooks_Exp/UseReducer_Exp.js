// useReducer for managing complex state
import React, { useReducer } from "react";

const UseReducer_Exp = () => {
  const i = { count: 0 }; // "i" is object
  const [state, dispatch] = useReducer(fnReducer, i);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
// Reducer function
const fnReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
export default UseReducer_Exp;
