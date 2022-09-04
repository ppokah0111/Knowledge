import { useState, useEffect } from "react";
//import Doctor from './Doctor'

export default function SampleTry() {
  const [doctor, setDoctor] = useState([]);
  const [patient, setPatient] = useState([]);

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



  return (
    <div>
      <select>
        {doctor.map((data) => (
          <option value={data.id}>{data.name}</option>
        ))}
      </select>
        <br />

        <select>
        {patient.map((data) => (
          <option value={data.id}>{data.name}</option>
        ))}
      </select>

    </div>
  );
}
