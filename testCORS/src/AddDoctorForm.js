//this is the controlled component way
//import "./App.css";
import { useState } from "react";

//import Table from "./Table";
import DoctorTable from "./DoctorTable";

import { Form, Button, TextField, Divider, Paper, Stack , styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [form, setForm] = useState({});
  const [doctordata, setDoctordata] = useState([]);
  // const [error, setError] = useState("");

  const captureIdChange = (e) => {
    setForm({
      ...form,
      id: e.target.value,
    });
  };

  const captureNameChange = (e) => {
    setForm({
      ...form,
      name: e.target.value,
    });
  };

  const captureSpecialtyChange = (e) => {
    setForm({
      ...form,
      specialty: e.target.value,
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();
    //console.log(form);
    fetch("http://localhost:3000/doctor", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((doctordata) => doctordata.json())
      .then((json) => setDoctordata(json));
  };

  return (
    <div className="App">
      <form onSubmit={handle_submit}>
        <div>
          <br />

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Item>
              <label>
                Enter ID:
                <input type="text" onChange={captureIdChange} />
              </label>
            </Item>

            <Item>
              <label>
                Enter Name:
                <input type="text" onChange={captureNameChange} />
              </label>
            </Item>

            <Item>
              <label>
                Enter Specialty:
                <input type="text" onChange={captureSpecialtyChange} />
              </label>
            </Item>

            <Item>
              <Button type="submit" variant="contained">
                Add to Doctor
              </Button>
            </Item>
          </Stack>

        </div>
      </form>

      <br />

      <DoctorTable />

      <br />
      {JSON.stringify(doctordata)}
    </div>
  );
}

export default App;
