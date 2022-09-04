import { useState } from "react";
import Button from "@mui/material/Button";
import Table from "./Table";

export default function Todos() {
  
  const [tableData, setTableData] = useState([]);

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setTableData(res));
  };

  return (
    <div className="App">
      <Button variant="contained" onClick={fetchTodos}> Fetch </Button>
      <br />
      <Table tableData={tableData} />
    </div>
  );
}
