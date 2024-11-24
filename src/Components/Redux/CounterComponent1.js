//in this component we can reuse only state from desux
// 1. Import Statements
import React from "react";
import { connect } from "react-redux";

// 2. Functional Component
const CounterComponent1 = ({ count }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.counter.count, 
  };
};

// 5. Connect the component to Redux store
export default connect(mapStateToProps)(CounterComponent1);
