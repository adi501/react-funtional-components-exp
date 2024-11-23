import { useState } from "react";

export default function UseState_Exp()
{
    const[count,setCount]=useState(0);
    const handleClick=()=>
    {
                setCount(count + 1);
    }
    return (<>
    <h5>useState Hook Exp</h5>
    <div>Count: {count}</div>
    <button onClick={handleClick}>Count ++</button>
    </>);
} 
