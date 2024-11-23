import React from "react";
import UseCustomHooks from "./UseCustomHooks";

const UseCustomHookUse = () => {
  const { count, increment, decrement } = UseCustomHooks();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default UseCustomHookUse;


