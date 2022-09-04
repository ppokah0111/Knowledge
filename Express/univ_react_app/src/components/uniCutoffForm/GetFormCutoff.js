//this is the controlled component way II
import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { useLocalStorage } from '@rehooks/local-storage';

import Button from "@mui/material/Button";
import Table from "../cutoffTable";

//[course_id, assign_id, exam_id, _percentage, cutoff_id]
function GetFormCutoff() {
  
  const [cutoff, setCutoff] = useState([]);
  const [user, setUser, deleteUser] = useLocalStorage('user');

  const handle_submit = (e) => {
    e.preventDefault();

     // fetch("http://localhost:4000/assigns/user?"+'student_id='+user.user)
    fetch("http://localhost:4000/cutoff/user?"+'student_id='+user.user)
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Get Cutoff error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (cutoff) => {
          setCutoff(cutoff);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );
  };

  //[course_id, assign_id, exam_id, _percentage, cutoff_id]
  return (
    <div className="App">
      <div>
        <h1>University Cutoff Get Form</h1>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Get Cutoff
      </Button>
      <br />
      <br />
      <Table tableData={cutoff} />
    </div>
  );
}

export default GetFormCutoff;
