import { Button, Stack } from "react-bootstrap";
import { useState } from "react";
import Grid from "./Grid";
import { createRef } from "react";

export default function TodoAll() {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const todoidref = createRef();

  const handleClick = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoidref.current.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        let columns = [];
        for (let key in res) {
          columns.push(key);
        }
        setColumn(columns);
        setData([res]);                                                                                                                                                                                                                     
      });
  };
  return (
    <div>
      <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">
        <label>
          Enter TodoID:
          <input ref={todoidref} />
        </label>
        <div className="vr" />
        <Button onClick={handleClick}>Fetch</Button>
      </Stack>

      <br />
      <Grid columns={column} data={data}></Grid>
    </div>
  );
}
