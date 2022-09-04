//this is the controlled component way II
import React, { useState } from "react";
import { useLocalStorage } from '@rehooks/local-storage';
//import { Button } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../examTable";

function GetFormExams() {

  const [exams, setExams] = useState([]);
  const [user, setUser, deleteUser] = useLocalStorage('user');

  const handle_submit = (e) => {
    e.preventDefault();

    // fetch("http://localhost:4000/assigns/user?"+'student_id='+user.user)
    fetch("http://localhost:4000/exams/user?"+'student_id='+user.user)
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Get Exams error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (exams) => {
          setExams(exams);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );
  };

  //[exam_id, exam_duration, exam_type, exam_date, exam_time, course_id]
  return (
    <div className="App">
      <div>
        <h1>University Exams Get Form</h1>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Get Exams
      </Button>
      <br />
      <br />
      <Table tableData={exams} />
    </div>
  );
}

export default GetFormExams;
