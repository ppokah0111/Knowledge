import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const handle_fetch = () => {
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
          setTodos(todos);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
          setError(error.message);
        }
      );
  };

  return (
    <div className="App">
      <button onClick={handle_fetch}> Fetch Data</button>
      <br />
      {JSON.stringify(error)}
      <br />
      <Table todos={todos}> </Table>
    </div>
  );
}

export default App;
