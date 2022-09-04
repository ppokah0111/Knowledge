import React, { useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

//import Button from "@mui/material/Button";

function AddFormExams() {
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

    fetch("http://localhost:4000/exams", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //[exam_id, exam_duration, exam_type, exam_date, exam_time, course_id]

  return (
    <div className="App">
      <div>
        <h1>University Exams Add Form</h1>
      </div>

      <div>
        <Alert>
          <Container>

            <Form onSubmit={handle_submit}>

              <Form.Group>
                <Form.Label>Exam Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="exam_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Exam ID"
                ></Form.Control>
              </Form.Group>{" "} 
              
              <br />
              <Form.Group>
                <Form.Label>Exam Duration: </Form.Label>
                <Form.Control
                  type="text"
                  name="exam_duration"
                  onChange={captureFieldChange}
                  placeholder="Enter your Exam Duration in Minutes"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Type: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="exam_type"
                  placeholder="Enter your Exam Type"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Date: </Form.Label>
                <Form.Control
                  type="date"
                  name="exam_date"
                  onChange={captureFieldChange}
                  placeholder="Enter your Exam Date"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label> Exam Time: </Form.Label>
                <Form.Control
                  type="time"
                  name="exam_time"
                  onChange={captureFieldChange}
                  placeholder="Enter your Exam Time"
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

export default AddFormExams;
