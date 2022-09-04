//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Container, Alert } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../classTable";

function GetFormClasses() {
  const [form, setForm] = useState({});
  //const [response, setResponse] = useState({});
  const [classes, setClasses] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //[course_id, staff_id, class_start_time, class_start_date, class_duration, class_mode, class_address, class_id]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < classes.length; i++) {
      //console.log(e.target.value)
      //console.log(classes[i]._id)

      if (classes[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          course_id: classes[i].course_id,
          staff_id: classes[i].staff_id,
          class_start_time: classes[i].class_start_time,
          class_start_date: classes[i].class_start_date,
          class_duration: classes[i].class_duration,
          class_mode: classes[i].class_mode,
          class_address: classes[i].class_address,
          class_id: classes[i].class_id,
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

    fetch("http://localhost:4000/classes")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Get Classes error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (classes) => {
          setClasses(classes);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );
  };

  //[course_id, staff_id, class_start_time, class_start_date, class_duration, class_mode, class_address, class_id]
  return (
    <div className="App">
      <div>
        <h1>University Classes Get Form</h1>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Fetch Classes
      </Button>
      <br /> <br />
      <Table tableData={classes} />

      {/*    <div>  {JSON.stringify(response)}</div> */}
    </div>
  );
}

export default GetFormClasses;
