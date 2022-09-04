import { useState } from "react";
import Button from "@mui/material/Button";
import Table from "./Table";

export default function PatientTable() {
  const [treatmentdata, setTreatmentdata] = useState([]);
  const [error, setError] = useState("");

  const columnsdata = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "patient_id",
      headerName: "PATIENT ID",
      width: 100,
    },
    {
      field: "doctor_id",
      headerName: "DOCTOR ID",
      width: 100,
    },
    {
      field: "treatment",
      headerName: "TREATMENT",
      width: 300,
    },
    {
      field: "treatment_start_date",
      headerName: "TREATMENT START DATE",
      width: 400,
    },
  ];

  /*     const handleChange = () => {
        fetch('http://localhost:3000/patient')  //from express
        .then(res=>res.json())
        .then(res=>setDoctordata(res))
    } */

  const handleChange = () => {
    fetch("http://localhost:3000/treatment")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with error!" + res.status);
        }
        return res.json();
      })
      .then(
        (treatmentdata) => {
          setTreatmentdata(treatmentdata);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
          setError(error.message);
        }
      );
  };

  return (
    <div>
      <Button onClick={handleChange} variant="contained">
        Click to Fetch Treatment Table
      </Button>
      <br />
      <Table tableData={treatmentdata} columns={columnsdata}></Table>

      <br />
      {JSON.stringify(error)}
    </div>
  );
}
