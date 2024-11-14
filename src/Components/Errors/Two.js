import React, { useState } from "react";

const Two=()=> {
    const [count, setCount] = useState(0);
const handleIncrement = () => {
    setCount(count => count + 1);
  };
  const handleerror=()=>{
    throw new Error('I crashed!');
  }
  return (
    <div>
        <h1 onClick={handleIncrement}>Count:{count}</h1>
        <h1 onClick={handleerror}>Click it here to throw Error</h1>
    </div>
  );
}
export default Two;
