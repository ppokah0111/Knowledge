import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "./Table";

function App() {
  const [dataname, setDataName] = useState("");
  const [tableData, setTableData] = useState([]);
  const [column, setColumn] = useState([]);

  const handleChange = (event) => {
    setDataName(event.target.value);
    fetch(`https://jsonplaceholder.typicode.com/${event.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        let columns = [];
        for (let columnName in res[0]) {
          columns.push({ field: columnName, headerName: columnName, flex: 1 });
        }
        setColumn(columns);
        setTableData(res);
      });
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select data to fetch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dataname}
            label="setDataName"
            onChange={handleChange}
          >
            <MenuItem value={"posts"}>POSTS</MenuItem>
            <MenuItem value={"todos"}>TODOS</MenuItem>
            <MenuItem value={"comments"}>COMMENTS</MenuItem>
            <MenuItem value={"photos"}>PHOTOS</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Table tableData={tableData} columns={column} />
    </div>
  );
}

export default App;
