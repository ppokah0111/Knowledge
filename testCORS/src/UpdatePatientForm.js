import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import PatientTable from "./PatientTable";

function App() {
  const [form, setForm] = useState({});
  const [patientdata, setPatientdata] = useState([]);
  const [patient, setPatient] = useState([]);
  // const [error, setError] = useState("");

  const captureIdChange = (e) => {
    for (let i = 0; i < patient.length; i++) {
      if (patient[i].id == e.target.value) {
        setForm({
          ...form,
          id: e.target.value,
          name: patient[i].name,
          age: patient[i].age,
          phone: patient[i].phone,
        });
        break;
      }
    }
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
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((patientdata) => patientdata.json())
      .then((json) => setPatientdata(json));
  };

  //USEEFFECT
  useEffect(() => {
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

  return (
    <div className="App">
      <form onSubmit={handle_submit}>
        <label>
          Enter ID:
          <select onChange={captureIdChange}>
            <option>Select some option</option>
            {patient.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
        </label>

        <label>
          Enter Name:
          <input type="text" onChange={captureNameChange} value={form.name} />
        </label>

        <label>
          Enter Age:
          <input type="text" onChange={captureAgeChange} value={form.age} />
        </label>

        <label>
          Enter Phone:
          <input type="text" onChange={capturePhoneChange} value={form.phone} />
        </label>

        <Button type="submit" variant="contained">
          Update Patient
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
