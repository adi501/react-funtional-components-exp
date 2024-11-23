
import React, { useState, useLayoutEffect } from "react";

function UseLayoutEffectEXP() {
  const [data, setData] = useState({});
  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Title: {data.title}</p>
    </div>
  );
}
export default UseLayoutEffectEXP;
