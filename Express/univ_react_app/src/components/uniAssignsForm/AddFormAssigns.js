//this is the controlled component way II
import React, { useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

function AddFormAssigns() {
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

    fetch("http://localhost:4000/assigns", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
  return (
    <div className="App">
      <div>
        <h1>University Assigns Add Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label>Enter your Assign ID: </Form.Label>
                <Form.Control
                  type="text"
                  name="assign_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Assign ID"
                />
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Enter your Assign Type: </Form.Label>
                <Form.Control
                  type="text"
                  name="assign_type"
                  onChange={captureFieldChange}
                  placeholder="Enter your Assign Type"
                />
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Enter your Course ID: </Form.Label>
                <Form.Control
                  type="text"
                  name="course_id"
                  onChange={captureFieldChange}
                  placeholder="Enter your Course ID"
                />
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Enter your Assign Start Date: </Form.Label>
                <Form.Control
                  type="date"
                  name="assign_start_date"
                  onChange={captureFieldChange}
                  placeholder="Enter your Assign Start Date"
                />
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Enter your Assign Deadline: </Form.Label>
                <Form.Control
                  type="text"
                  name="assign_deadline"
                  onChange={captureFieldChange}
                  placeholder="Enter your Assign Deadline"
                />
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

            </form>
          </Container>
        </Alert>
      </div>

      <div> {JSON.stringify(response)}</div>
    </div>
  );
}

export default AddFormAssigns;
