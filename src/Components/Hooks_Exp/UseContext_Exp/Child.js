import React, { useContext } from "react";
import MyContext from "./UseContext";

const Child = () => {
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
  // return (
  // this other way to consume context
  //   <MyContext.Consumer>
  //     {(contextValue) => <div>{contextValue}</div>}
  //   </MyContext.Consumer>
  // );
};
export default Child;
