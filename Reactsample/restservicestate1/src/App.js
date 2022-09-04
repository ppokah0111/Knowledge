import "./App.css";
import React from "react";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], error: "" };
  }

  handle_fetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with error!" + res.status);
        }
        return res.json();
      })
      .then(
        (todos) => {
          this.setState({
            todos,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
          this.setState({
            error: "some error " + error.message,
          });
        }
      );
  };

  render() {
    return (
      <div>
        <button onClick={this.handle_fetch}> Fetch Data</button>
        <br />

        <p>{JSON.stringify(this.state.error)}</p>
        <Table todos={this.state.todos}> </Table>
      </div>
    );
  }
}

export default App;
