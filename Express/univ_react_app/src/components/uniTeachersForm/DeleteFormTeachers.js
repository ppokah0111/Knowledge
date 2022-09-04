//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form,  Container, Alert } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../teacherTable";

function DeleteFormTeachers() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [teachers, setTeachers] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //name, age, national_id, staff_id, phone, gender, address, tax, course_id
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < teachers.length; i++) {
      //console.log(e.target.value);
      //console.log(teachers[i]._id);

      if (teachers[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          name: teachers[i].name,
          age: teachers[i].age,
          national_id: teachers[i].national_id,
          staff_id: teachers[i].staff_id,
          phone: teachers[i].phone,
          gender: teachers[i].gender,
          address: teachers[i].address,
          tax: teachers[i].tax,
          course_id: teachers[i].course_id,
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

    //fetch("https://jsonplaceholder.typicode.com/posts", {
    fetch("http://localhost:4000/teachers?_id="+form._id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //USEEFFECT
  useEffect(() => {
    fetch("http://localhost:4000/teachers")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Teachers error!" + res.status
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
    return () => {};
  }, []);

  //name, age, national_id, staff_id, phone, gender, address, tax, course_id
  return (
    <div className="App">
      <div>
        <h1>University Teachers Delete Form</h1>
      </div>

      <div>
        <Alert>
          <Container>

            <Form.Group>
              <Form.Label> Enter ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {teachers.map((data) => (
                  <option value={data._id}>{data.name}</option>
                ))}
              </select>
            </Form.Group>

            <div> {JSON.stringify(form)}</div>

            <br />
          </Container>
        </Alert>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Delete Selected Teachers
      </Button>

      <br />
      <br />
      <Table tableData={teachers} />
    </div>
  );
}

export default DeleteFormTeachers;
