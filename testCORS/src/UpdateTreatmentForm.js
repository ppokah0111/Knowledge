import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TreatmentTable from "./TreatmentTable";

function App() {
  const [form, setForm] = useState({});
  const [treatmentdata, setTreatmentdata] = useState([]);

  const [doctor, setDoctor] = useState([]);
  const [patient, setPatient] = useState([]);

  const [treatment, setTreatment] = useState([]);
  //const [error, setError] = useState("");

  const captureIdChange = (e) => {
    for (let i = 0; i < treatment.length; i++) {
      if (treatment[i].id == e.target.value) {
        setForm({
          ...form,
          id: e.target.value,
          patient_id: treatment[i].patient_id,
          doctor_id: treatment[i].doctor_id,
          treatment: treatment[i].treatment,
          treatment_start_date: treatment[i].treatment_start_date,
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
      method: "PUT",
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
    fetch("http://localhost:3000/treatment")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with doctor error!" + res.status);
        }
        return res.json();
      })
      .then(
        (treatment) => {
          setTreatment(treatment);
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
            {treatment.map((data) => (
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
          Enter Doctor ID:
          <input
            type="text"
            onChange={captureDoctorIDChange}
            value={form.doctor_id}
          />
        </label>

        <br />
        <label>
          Enter Treatment:
          <input
            type="text"
            onChange={captureTreatmentChange}
            value={form.treatment}
          />
        </label>
        <br />
        <label>
          Enter Treatment Start Date:
          <input
            type="date"
            onChange={captureTreatmentStartDateChange}
            value={new Date(form.treatment_start_date).toISOString().split('T')[0]}
          />
        </label>
        <br />
        <Button type="submit" variant="contained">
          Update Treatment
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
