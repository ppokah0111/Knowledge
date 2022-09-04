import Todo from "./Todo";
import TodoAll from "./TodoAll";
import "./App.css";

import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo" element={<Todo />} />

        <Route path="/todoall" element={<TodoAll />} />
      </Routes>
      <Link to="/todo">Get Single Todo</Link> <br />
      <Link to="/todoall">Get All Todo</Link>
    </div>
  );
}

export default App;
