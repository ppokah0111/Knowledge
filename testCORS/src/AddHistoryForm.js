//this is the controlled component way
//import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
//import Table from "./Table";
import HistoryTable from "./HistoryTable";

function App() {
  const [form, setForm] = useState({});
  const [historydata, setHistorydata] = useState([]);
  // const [error, setError] = useState("");

  const captureIdChange = (e) => {
    setForm({
      ...form,
      id: e.target.value,
    });
  };

  const capturePatientIDChange = (e) => {
    setForm({
      ...form,
      patient_id: e.target.value,
    });
  };

  const captureIllnessChange = (e) => {
    setForm({
      ...form,
      illness: e.target.value,
    });
  };

  const captureFromDateChange = (e) => {
    setForm({
      ...form,
      from_date: e.target.value,
    });
  };

  const captureToDateChange = (e) => {
    setForm({
      ...form,
      to_date: e.target.value,
    });
  };

  const captureDoctorIDChange = (e) => {
    setForm({
      ...form,
      doctor_id: e.target.value,
    });
  };

  const captureStatusChange = (e) => {
    setForm({
      ...form,
      status: e.target.value,
    });
  };


  const handle_submit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:3000/history", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((historydata) => historydata.json())
      .then((json) => setHistorydata(json));
  };

  //change patientID and DoctorID to dropdown
  return (
    <div className="App">
      <form onSubmit={handle_submit}>
        <label>
          Enter ID:
          <input type="text" onChange={captureIdChange} />
        </label>
        <br />
        <label>
          Enter Patient ID:
          <input type="text" onChange={capturePatientIDChange} />
          
        </label>
        <br />
        <label>
          Enter Illness:
          <input type="text" onChange={captureIllnessChange} />
        </label>
        <br />
        <label>
          Enter From Date:
          <input type="text" onChange={captureFromDateChange} />
        </label>
        <br />
        <label>
          Enter To Date:
          <input type="text" onChange={captureToDateChange} />
        </label>
        <br />
        <label>
          Enter Doctor ID:
          <input type="text" onChange={captureDoctorIDChange} />
        </label>
        <br />
        <label>
          Enter Status:
          <input type="text" onChange={captureStatusChange} />
        </label>

        <br />
        <Button type="submit" variant="contained">
          Click to Submit History Table
        </Button>
      </form>

      <br />

      <HistoryTable />

      <br />
      {JSON.stringify(historydata)}
    </div>
  );
}

export default App;
