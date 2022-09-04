import { useState } from "react";
import Button from "@mui/material/Button";
import Table from "./Table";

export default function HistoryTable() {
  const [historydata, setHistorydata] = useState([]);
  const [error, setError] = useState("");

  const columnsdata = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "patient_id",
      headerName: "PATIENT ID",
      width: 100,
    },
    {
      field: "illness",
      headerName: "ILLNESS",
      width: 200,
    },
    {
      field: "from_date",
      headerName: "FROM DATE",
      width: 300,
    },
    {
      field: "to_date",
      headerName: "TO_DATE",
      width: 300,
    },
    {
      field: "doctor_id",
      headerName: "DOCTOR ID",
      width: 100,
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 100,
    },
  ];

  /*     const handleChange = () => {
        fetch('http://localhost:3000/patient')  //from express
        .then(res=>res.json())
        .then(res=>setDoctordata(res))
    } */

  const handleChange = () => {
    fetch("http://localhost:3000/history")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with error!" + res.status);
        }
        return res.json();
      })
      .then(
        (historydata) => {
          setHistorydata(historydata);
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
        Click to Fetch History Table
      </Button>
      <br />
      <Table tableData={historydata} columns={columnsdata}></Table>

      <br />
      {JSON.stringify(error)}
    </div>
  );
}
