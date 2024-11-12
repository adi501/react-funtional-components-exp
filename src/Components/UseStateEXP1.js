import { useState } from "react";

export default function UseStatexp1()
{
    const[count,setCount]=useState(0);
    const handleClick=()=>
    {
                setCount(count + 1);
    }
    return (<>
    <h5>State Exp</h5>
    <div>Count: {count}</div>
    <button onClick={handleClick}>Count ++</button>
    </>);
} 


//  const UseStatexp1=()=>{
//     const[count,setCount]=useState(1);
//     const handleClick=()=>
//     {
//         setCount(count + 1);
//     }
//     return<>
//     <h5>State Exp</h5>
//     <div>Count: {count}</div>
//     <button onClick={handleClick}>Count ++</button>
//     </>;
// }
// export default UseStatexp1;