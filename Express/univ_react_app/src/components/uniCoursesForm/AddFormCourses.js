import React, { useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";
//import Button from "@mui/material/Button";

function AddFormCourses() {
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

    fetch("http://localhost:4000/courses", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //[course_id, level, course_duration, semester, start_date]
  return (
    <div className="App">
      <div>
        <h1>University Courses Add Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label>Course Identification : </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="course_id"
                  placeholder="Enter your Course ID"
                ></Form.Control>
              </Form.Group>{" "}
              <br />

              <Form.Group>
              <Form.Label>Select your University Level: </Form.Label>
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
                <Form.Label>Semester : </Form.Label>
                <Form.Control
                  type="number"
                  name="semester"
                  onChange={captureFieldChange}
                  placeholder="Enter your Semester"
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Staff Date : </Form.Label>
                <Form.Control
                  type="date"
                  name="start_date"
                  onChange={captureFieldChange}
                  placeholder="Enter your start_date"
                ></Form.Control>
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
            </Form>
          </Container>
        </Alert>
      </div>
      <br />
      <br />
      <div> {JSON.stringify(response)}</div>
    </div>
  );
}

export default AddFormCourses;
