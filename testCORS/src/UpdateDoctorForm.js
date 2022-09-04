//this is the controlled component way
//import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
//import Table from "./Table";
import DoctorTable from "./DoctorTable";

function App() {
  const [form, setForm] = useState({});
  const [doctordata, setDoctordata] = useState([]);
  const [doctor, setDoctor] = useState([]);


  const captureIdChange = (e) => {
    for( let i =0; i < doctor.length; i++){
        if(doctor[i].id == e.target.value){
            setForm({
                ...form,
                id: e.target.value,
                name: doctor[i].name,
                specialty: doctor[i].specialty,
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

  const captureSpecialtyChange = (e) => {
    setForm({
      ...form,
      specialty: e.target.value,
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:3000/doctor", {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((doctordata) => doctordata.json())
      .then((json) => setDoctordata(json));
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

    return () => {};
  }, []);

  
  return (
    <div className="App">
      <form onSubmit={handle_submit}>

        <label>
          Enter ID:
          <select onChange={captureIdChange}>

            <option>Select some option</option>
            {doctor.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
        </label>

        <br />

        <label>
          Enter Name:
          <input type="text" onChange={captureNameChange} value={form.name}/>
        </label>

        <label>
          Enter Specialty:
          <input type="text" onChange={captureSpecialtyChange} value={form.specialty}/>
        </label>

        <Button type="submit" variant="contained">
          Update Doctor
        </Button>
      </form>

      <br />

      <DoctorTable />

      <br />
      {JSON.stringify(doctordata)}
    </div>
  );
}

export default App;
