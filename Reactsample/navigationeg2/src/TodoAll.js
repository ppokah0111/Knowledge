import { Button } from "react-bootstrap";
import { useState } from "react";
import Grid from "./Grid";

export default function Todo() {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        let columns = [];
        for (let key in res[0]) {
          columns.push(key);
        }
        setColumn(columns);
        setData(res);
      });
  };
  return (
    <div>
      <Button onClick={handleClick}>Fetch</Button>
      <br />
      <Grid columns={column} data={data}></Grid>
    </div>
  );
}