import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  //state needs to be initialised in constructor.
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  //whenever state needs to be changed it can only be done by using such setState only
  //setState is watched by virtual DOM to decide whether to refresh or not.

  //when using class-based components try to create event handlers as arrow functions
  Increment = () =>
    this.setState({
      counter: this.state.counter + 1,
    });

  Decrement = () =>
    this.setState({
      counter: this.state.counter - 1,
    });

  render() {
    return (
      <div>
        <p>Counter:{this.state.counter}</p>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
