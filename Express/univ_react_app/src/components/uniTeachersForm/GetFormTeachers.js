//this is the controlled component way II
import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { useLocalStorage } from '@rehooks/local-storage';

import Button from "@mui/material/Button";
import Table from "../teacherTable";

function GetFormTeachers() {

  const [teachers, setTeachers] = useState([]);
  const [user, setUser, deleteUser] = useLocalStorage('user');

  const handle_submit = (e) => {
    e.preventDefault();

    //fetch("http://localhost:4000/assigns/user?"+'student_id='+user.user)
    fetch("http://localhost:4000/teachers/user?"+'student_id='+user.user)
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Get Teachers error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (teachers) => {
          setTeachers(teachers);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );
  };

  //name, age, national_id, student_id, phone, gender, address, level, semester
  return (
    <div className="App">
      <div>
        <h1>University Teachers Get Form</h1>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Get Teacher
      </Button>
      <br />
      <Table tableData={teachers} />
    </div>
  );
}

export default GetFormTeachers;
