import React from "react";

function MAP_EXP1(){
    const arr=[1,2,3,4,5];
    return(<>
    <ul>
        {
            arr.map(num=><li>{num}</li>)
        }
    </ul>
    </>)
};
export default MAP_EXP1;