import { useState } from "react";
import Button from "@mui/material/Button";
import Table from "./Table";

export default function DoctorTable() {
  const [doctordata, setDoctordata] = useState([]);
  const [error, setError] = useState("");

  const columnsdata = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "NAME",
      width: 300,
    },
    {
      field: "specialty",
      headerName: "SPECIALTY",
      width: 300,
    },
  ];

  /*     const handleChange = () => {
        fetch('http://localhost:3000/doctor')  //from express
        .then(res=>res.json())
        .then(res=>setDoctordata(res))
    } */

  const handleChange = () => {
    fetch("http://localhost:3000/doctor")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with error!" + res.status);
        }
        return res.json();
      })
      .then(
        (doctordata) => {
          setDoctordata(doctordata);
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
        Fetch DoctorTable
      </Button>
      <br />
      <Table tableData={doctordata} columns={columnsdata}>
      </Table>

      <br />
      {JSON.stringify(error)}
    </div>
  );
}
