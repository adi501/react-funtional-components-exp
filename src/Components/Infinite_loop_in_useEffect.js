import { useState,useEffect } from "react";

export default function Infinite_loop_in_useEffect(){

const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1) // infinite loop
  }, [count])
    return(
        <>
        <h1>Infinite_loop_in_useEffect</h1>
        <p> (it will not throw any error, if you want to see Infinite loop go and checck errors in google chrome debug window</p>
        </>
    );
};
