import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
//import Button from "@mui/material/Button";

function AddFormTeachers() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

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

    fetch("http://localhost:4000/teachers", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //name, age, national_id, student_id, phone, gender, address, tax, course_id

  return (
    <div className="App">
      <div>
        <h1>University Teachers Add Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label>FullName</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={captureFieldChange}
                  placeholder="Enter your Fullname"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  onChange={captureFieldChange}
                  placeholder="Enter your Age"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>National Identification</Form.Label>
                <Form.Control
                  type="text"
                  name="national_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your National ID"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Staff Identification</Form.Label>
                <Form.Control
                  type="text"
                  name="staff_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Staff ID"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={captureFieldChange}
                  placeholder="Enter your Phone Number"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Select your Gender:</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="gender"
                  onChange={captureFieldChange}
                >
                  <option>Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="undecided">Undecided</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea" 
                  rows={3}
                  name="address"
                  onChange={captureFieldChange}
                  placeholder="Enter your Address"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Tax Number</Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="tax"
                  placeholder="Enter your Tax Number"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Course Identification</Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="course_id"
                  placeholder="Enter your Course ID"
                ></Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Click here to submit form{" "}
              </Button>
            </Form>
          </Container>
        </Alert>
      </div>

      <div> {JSON.stringify(response)}</div>
    </div>
  );
}

export default AddFormTeachers;
