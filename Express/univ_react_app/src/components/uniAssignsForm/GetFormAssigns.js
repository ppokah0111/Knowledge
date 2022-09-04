//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { useLocalStorage } from '@rehooks/local-storage';

//import { Form, Button, Container, Alert } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../assignTable";

function GetFormAssigns() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [assigns, setAssigns] = useState([]);

  const [user, setUser, deleteUser] = useLocalStorage('user');

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < assigns.length; i++) {
      if (assigns[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          assign_id: assigns[i].assign_id,
          assign_type: assigns[i].assign_type,
          course_id: assigns[i].course_id,
          assign_start_date: assigns[i].assign_start_date,
          assign_deadline: assigns[i].assign_deadline,
        });
        break;
      }
    }
  };

  const captureFieldChange = (e) => {
    let fieldname = e.target.name;
    let obj = {};
    obj[fieldname] = e.target.value;

    setForm({
      ...form,
      ...obj,
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();

    //fetch("http://localhost:4000/courses/user?"+'student_id='+user.user)
    fetch("http://localhost:4000/assigns/user?"+'student_id='+user.user)
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Get Assigns error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (assigns) => {
          setAssigns(assigns);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );
  };

  //[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
  return (
    <div className="App">
      <div>
        <h1>University Assigns Get Form</h1>
      </div>
     
      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Fetch Assigns ID
      </Button>
      <br /> 
      <br />
      <Table tableData={assigns} />
    </div>
  );
}

export default GetFormAssigns;
