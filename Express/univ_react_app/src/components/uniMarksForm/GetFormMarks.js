//this is the controlled component way II
import React, { useState } from "react";
//import { Button } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../markTable";

function GetFormMarks() {
  const [marks, setMarks] = useState([]);

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/marks")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Get Marks error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (marks) => {
          setMarks(marks);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );
  };

  //student_id, staff_id, course_id, score, cutoff_id
  return (
    <div className="App">
      <div>
        <h1>University Marks Get Form</h1>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Get Marks
      </Button>
      <br />
      <br />
      <Table tableData={marks} />
    </div>
  );
}

export default GetFormMarks;
