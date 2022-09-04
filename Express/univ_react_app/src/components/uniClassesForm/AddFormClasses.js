//this is the controlled component way II
import React, { useState } from "react";
import { Form, Container, Button, Alert, Stack } from "react-bootstrap";

//import Button from "@mui/material/Button";

function AddFormClasses() {
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

  const reset = () => {
    setForm({});
    //e.target.reset();
  };

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/classes", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //[course_id, staff_id, class_start_time, class_start_date, class_duration, class_mode, class_address, class_id]
  return (
    <div className="App">
      <div>
        <h1>University classes Add Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label>Enter your Course Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="course_id"
                  onChange={captureFieldChange}
                  value={form.course_id}
                  placeholder="Enter your Course ID"
                />
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label justifyAlign="left">
                  Enter your Staff ID:{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="staff_id"
                  onChange={captureFieldChange}
                  value={form.staff_id}
                  placeholder="Enter your Staff ID"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Enter your Class Start Time: </Form.Label>
                <Form.Control
                  type="time"
                  name="class_start_time"
                  onChange={captureFieldChange}
                  value={form.class_start_time}
                  placeholder="Enter your Class Start Time"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Enter your Class Start Date: </Form.Label>
                <Form.Control
                  type="date"
                  name="class_start_date"
                  onChange={captureFieldChange}
                  value={form.class_start_date}
                  placeholder="Enter your Class Start Date"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Enter your Class Duration: </Form.Label>
                <Form.Control
                  type="text"
                  name="class_duration"
                  onChange={captureFieldChange}
                  value={form.class_duration}
                  placeholder="Enter your Class Duration "
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Enter your Class Mode: </Form.Label>
                <Form.Control
                  type="text"
                  name="class_mode"
                  onChange={captureFieldChange}
                  value={form.class_mode}
                  placeholder="Enter your Class Mode "
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Enter your Class Address: </Form.Label>
                <Form.Control
                  className="mb-3"
                  as="textarea"
                  type="text"
                  rows={3}
                  name="class_address"
                  onChange={captureFieldChange}
                  value={form.class_address}
                  placeholder="Enter your Class Address "
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Enter your Class Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="class_id"
                  onChange={captureFieldChange}
                  value={form.class_id}
                  placeholder="Enter your Class Identification"
                />
              </Form.Group>
              <br />
              <br />
              <Stack direction="horizontal" gap={2}>
                <Button variant="primary" type="submit">
                  Click here to submit form{" "}
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="primary"
                  type="reset"
                  value="Reset"
                  onClick={reset}
                >
                  Click here to clear form{" "}
                </Button>
              </Stack>
              <br />
              <br />
            </form>
          </Container>
        </Alert>
      </div>

      <div> {JSON.stringify(response)}</div>
      <br />
      <br />
    </div>
  );
}

export default AddFormClasses;
