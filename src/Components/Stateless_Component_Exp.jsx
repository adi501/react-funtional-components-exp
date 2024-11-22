import React from "react";

function Stateless_Component_Exp(){
    let count=0; // Initial data
    const increment=()=>{
        count+=1;
        console.log("Count:"+count);
    };
    return(
<>
<p>Stateless Component</p>
<p>Count:{count}</p>
<button onClick={increment}>Click</button>
</>
    );
}
export default Stateless_Component_Exp