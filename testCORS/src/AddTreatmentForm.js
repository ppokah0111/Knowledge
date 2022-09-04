import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TreatmentTable from "./TreatmentTable";

function App() {
  const [form, setForm] = useState({});
  const [treatmentdata, setTreatmentdata] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [patient, setPatient] = useState([]);
  //const [error, setError] = useState("");

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

  const captureDoctorIDChange = (e) => {
    setForm({
      ...form,
      doctor_id: e.target.value,
    });
  };

  const captureTreatmentChange = (e) => {
    setForm({
      ...form,
      treatment: e.target.value,
    });
  };

  const captureTreatmentStartDateChange = (e) => {
    setForm({
      ...form,
      treatment_start_date: e.target.value,
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();
    //console.log(form);
    fetch("http://localhost:3000/treatment", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((treatmentdata) => treatmentdata.json())
      .then((json) => setTreatmentdata(json));
  };

  //USEEFFECT
  useEffect(() => {
    fetch("http://localhost:3000/doctor")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with doctor error!" + res.status);
        }
        return res.json();
      })
      .then(
        (doctor) => {
          setDoctor(doctor);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );

    fetch("http://localhost:3000/patient")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with patient error!" + res.status);
        }
        return res.json();
      })
      .then(
        (patient) => {
          setPatient(patient);
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
          <input type="text" onChange={captureIdChange} />
        </label>
        <br />

        <label>
          Enter Patient ID:
          <select onChange={capturePatientIDChange}>

            <option>Select some option</option>

            {patient.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Enter Doctor ID:
          <select onChange={captureDoctorIDChange}>
           <option>Select some option</option>
            {doctor.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
        </label>

        <br />
        <label>
          Enter Treatment:
          <input type="text" onChange={captureTreatmentChange} />
        </label>
        <br />
        <label>
          Enter Treatment Start Date:
          <input type="text" onChange={captureTreatmentStartDateChange} />
        </label>
        <br />
        <Button type="submit" variant="contained">
          Click to Submit Treatment Table
        </Button>
      </form>

      <br />

      <TreatmentTable />

      <br />
      {JSON.stringify(treatmentdata)}
    </div>
  );
}

export default App;
