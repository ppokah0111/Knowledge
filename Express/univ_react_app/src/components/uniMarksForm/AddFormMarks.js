import React, { useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

//import Button from "@mui/material/Button";

function AddFormMarks() {
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

    fetch("http://localhost:4000/marks", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //student_id, staff_id, course_id, score, cutoff_id

  return (
    <div className="App">
      <div>
        <h1>University Marks Add Form</h1>
      </div>

      <div>
        <Alert>
          <Container>

            <Form onSubmit={handle_submit}>

              <Form.Group>
                <Form.Label>Student Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="student_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Student ID"
                ></Form.Control>
              </Form.Group>{" "} 
              
              <br />
              <Form.Group>
                <Form.Label>Staff Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="staff_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Staff ID"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Course Identification: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="course_id"
                  placeholder="Enter your Course ID"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Score: </Form.Label>
                <Form.Control
                  type="text"
                  name="score"
                  onChange={captureFieldChange}
                  placeholder="Enter your Score%"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Cutoff Id: </Form.Label>
                <Form.Control
                  type="text"
                  name="cutoff_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your cutoff ID"
                ></Form.Control>
              </Form.Group>{" "}
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

export default AddFormMarks;
