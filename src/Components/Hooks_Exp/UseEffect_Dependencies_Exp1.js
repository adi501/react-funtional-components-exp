import React from "react";
import { useState,useEffect } from "react";

export default function UseEffect_Dependencies_Exp1(){
    const[userId,setUserId]=useState(1);
    const[data,setData]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
              );
              const result = await response.json();
              setData(result);
        }
        fetchData();
    },[userId]);
    return(<>
    <h2>Data Fetching with Dependencies</h2>
    <label>User ID: </label>
    <input type="number" value={userId} 
    onChange={(e)=>setUserId(e.target.value)}></input>
    {data&&(<div>
        <h3>User Details:</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>)}
    </>)
};