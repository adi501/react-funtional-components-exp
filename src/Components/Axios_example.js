import axios from "axios";
import { useState,useEffect } from "react";

export default function Axios_example(){
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setData(res.data);
      })
  }
  useEffect(() => {
    fetchInfo();
    console.log(data);
  }, []);
    return (
        <>
        <h1>Axios Example</h1>
        <div className="App">
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
      </div>
        </>
    );
};