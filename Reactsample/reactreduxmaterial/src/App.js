import "./App.css";

import { Link, Routes, Route } from "react-router-dom";
import TodoAll from "./TodoAll";
import TodoById from "./TodoById";
import Stack from "@mui/material/Stack";


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <br />
        
        <Stack direction="row" spacing={2}>
          <Link class="style" to="/todoAll">TodoAll</Link> <br />
          <Link class="style" to="/todoById">TodoById</Link>
        </Stack>

        <Routes >
          <Route path="/" element={<TodoAll />} />
          <Route path="/todoAll" element={<TodoAll />} />
          <Route path="/todoById" element={<TodoById />} />
        </Routes>
        
      </header>
      
    </div>
  );
}

export default App;
