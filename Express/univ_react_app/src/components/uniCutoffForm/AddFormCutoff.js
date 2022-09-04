import React, { useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

//import Button from "@mui/material/Button";

//[course_id, assign_id, exam_id, _percentage, cutoff_id]
function AddFormCutoff() {
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

    fetch("http://localhost:4000/cutoff", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //[course_id, assign_id, exam_id, _percentage, cutoff_id]

  return (
    <div className="App">
      <div>
        <h1>University Cutoff Add Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form onSubmit={handle_submit}>
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
                <Form.Label>Assign Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="assign_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Assign ID"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="exam_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Exam Identification"
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Percentage (%) : </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="_percentage"
                  placeholder="Enter your Percentage "
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Cutoff Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="cutoff_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Cutoff identification"
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

export default AddFormCutoff;
