import React from 'react';
class Class_Components_exp extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <>
      <h2>Class Components exp</h2>
      <p>I am a {this.state.color} Car!</p></>;
    }
  }
  export default Class_Components_exp;