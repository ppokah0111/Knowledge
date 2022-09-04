//this is the controlled component way II
import React, { useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

function AddFormStudents() {
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

    fetch("http://localhost:4000/students", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //name, age, national_id, student_id, phone, gender, address, level, semester
  return (
    <div className="App">
      <div>
        <h1>University Students Add Form</h1>
      </div>

     <div>
      <Alert>
        <Container>
          <form onSubmit={handle_submit}>

            <Form.Group>
              <Form.Label>Enter your full name: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={captureFieldChange}
                placeholder="Enter your full name"
              />
            </Form.Group> <br />

            <Form.Group>
              <Form.Label>Enter your age: </Form.Label>
              <Form.Control
                type="number"
                name="age"
                onChange={captureFieldChange}
                placeholder="Enter your age"
              />
            </Form.Group> <br />

            <Form.Group>
              <Form.Label>Enter your National Identification: </Form.Label>
              <Form.Control
                type="text"
                name="nationalid"
                onChange={captureFieldChange}
                placeholder="Enter your National ID"
              />
            </Form.Group> <br />

            <Form.Group>
              <Form.Label>Enter your Student ID: </Form.Label>
              <Form.Control type="text" placeholder="Enter your Student ID" />
            </Form.Group> <br />

            <Form.Group>
              <Form.Label>Enter your Phone Number: </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                onChange={captureFieldChange}
                placeholder="Enter your Phone Number"
              />
            </Form.Group> <br />

            <Form.Group>
              <Form.Label>Select your Gender: </Form.Label>
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
            </Form.Group> <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter your Address: </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                onChange={captureFieldChange}
              />
            </Form.Group> <br />

            <Form.Group>
              <Form.Label>Select your Level: </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="level"
                onChange={captureFieldChange}
              >
                <option>Select your level</option>
                <option value="1">Undergraduate - Year One</option>
                <option value="2">Undergraduate - Year Two</option>
                <option value="3">Undergraduate - Year Three</option>
                <option value="4">Undergraduate - Year Three</option>
                <option value="5">Postgraduate - Certificate</option>
                <option value="6">Postgraduate - Honours</option>
                <option value="7">Masters</option>
                <option value="8">Doctorate (PhD)</option>
                <option value="9">PostDoctorate</option>
              </Form.Select>
            </Form.Group> <br />

            <Form.Group>
              <Form.Label>Enter your semester: </Form.Label>
              <Form.Control
                type="number"
                name="address"
                onChange={captureFieldChange}
                placeholder="Enter your semester"
              />
            </Form.Group>
            <br />
              <br />
              <Stack direction="horizontal" gap={2}>
                <Button variant="primary" type="submit">
                  Click here to submit form{" "}
                </Button>
                &nbsp;&nbsp;
                <Button variant="primary" type="reset">
                  Click here to clear form{" "}
                </Button>
              </Stack>
            
          </form>

        </Container>
      </Alert>

      </div>
      
      <div>  {JSON.stringify(response)}</div>
    </div>
  );
}

export default AddFormStudents;
