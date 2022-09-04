//this is the controlled component way
//import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
//import Table from "./Table";
import PatientTable from "./PatientTable";

function App() {
  const [form, setForm] = useState({});
  const [patientdata, setPatientdata] = useState([]);
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

  const captureAgeChange = (e) => {
    setForm({
      ...form,
      age: e.target.value,
    });
  };

  const capturePhoneChange = (e) => {
    setForm({
      ...form,
      phone: e.target.value,
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:3000/patient", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((patientdata) => patientdata.json())
      .then((json) => setPatientdata(json));
  };

  return (
    <div className="App">
      <form onSubmit={handle_submit}>
        <label>
          Enter ID:
          <input type="text" onChange={captureIdChange} />
        </label>

        <label>
          Enter Name:
          <input type="text" onChange={captureNameChange} />
        </label>

        <label>
          Enter Age:
          <input type="text" onChange={captureAgeChange} />
        </label>

        <label>
          Enter Phone:
          <input type="text" onChange={capturePhoneChange} />
        </label>

        <Button type="submit" variant="contained">
          Click to Submit Patient Table
        </Button>
      </form>

      <br />

      <PatientTable />

      <br />
      {JSON.stringify(patientdata)}
    </div>
  );
}

export default App;
