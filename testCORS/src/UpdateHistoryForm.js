//this is the controlled component way
//import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
//import Table from "./Table";
import HistoryTable from "./HistoryTable";

function App() {
  const [form, setForm] = useState({});
  const [historydata, setHistorydata] = useState([]);
  const [history, setHistory] = useState([]);
  // const [error, setError] = useState("");

  const captureIdChange = (e) => {
    for (let i = 0; i < history.length; i++) {
      if (history[i].id == e.target.value) {
        //console.log(history)
        setForm({
          ...form,
          id: e.target.value,
          patient_id: history[i].patient_id,
          illness: history[i].illness,
          from_date: history[i].from_date,
          to_date: history[i].to_date,
          doctor_id: history[i].doctor_id,
          status: history[i].status,
        });
        break;
      }
    }
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
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((historydata) => historydata.json())
      .then((json) => setHistorydata(json));
  };

  //USEEFFECT
  useEffect(() => {
    fetch("http://localhost:3000/history")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with history error!" + res.status);
        }
        return res.json();
      })
      .then(
        (history) => {
          setHistory(history);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );

    return () => {};
  }, []);

  //change patientID and DoctorID to dropdown
  return (
    <div className="App">
      <form onSubmit={handle_submit}>
        <label>
          Enter ID:
          <select onChange={captureIdChange}>
            <option>Select some option</option>
            {history.map((data) => (
              <option value={data.id}>{data.id}</option>
            ))}
          </select>
        </label>

        <br />
        <label>
          Enter Patient ID:
          <input
            type="text"
            onChange={capturePatientIDChange}
            value={form.patient_id}
          />
        </label>
        <br />
        <label>
          Enter Illness:
          <input
            type="text"
            onChange={captureIllnessChange}
            value={form.illness}
          />
        </label>
        <br />
        <label>
          Enter From Date:
          <input
            type="text"
            onChange={captureFromDateChange}
            value={form.from_date}
          />
        </label>
        <br />
        <label>
          Enter To Date:
          <input
            type="text"
            onChange={captureToDateChange}
            value={form.to_date}
          />
        </label>
        <br />
        <label>
          Enter Doctor ID:
          <input
            type="text"
            onChange={captureDoctorIDChange}
            value={form.doctor_id}
          />
        </label>
        <br />
        <label>
          Enter Status:
          <input
            type="text"
            onChange={captureStatusChange}
            value={form.status}
          />
        </label>

        <br />
        <Button type="submit" variant="contained">
          Update History
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
