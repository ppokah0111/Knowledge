//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

//import Button from "@mui/material/Button";

function UpdateFormExams() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [exams, setExams] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //[exam_id, exam_duration, exam_type, exam_date, exam_time, course_id]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < exams.length; i++) {
      //console.log(e.target.value)
      //console.log(students[i]._id)

      if (exams[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          exam_id: exams[i].exam_id,
          exam_duration: exams[i].exam_duration,
          exam_type: exams[i].exam_type,
          exam_date: exams[i].exam_date,
          exam_time: exams[i].exam_time,
          course_id: exams[i].course_id,
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

  const reset = () => {
    setForm({});
  };

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/exams", {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //USEEFFECT
  useEffect(() => {
    fetch("http://localhost:4000/exams")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error("Server responds with Uni Exams error!" + res.status);
        }
        return res.json();
      })
      .then(
        (exams) => {
          setExams(exams);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );

    return () => {};
  }, [response]);

  //[exam_id, exam_duration, exam_type, exam_date, exam_time, course_id]
  return (
    <div className="App">
      <div>
        <h1>University Exams Update Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label> Enter ID: </Form.Label>
                <select onChange={captureIdFieldChange}>
                  <option>Select some option</option>
                  {exams.map((data) => (
                    <option value={data._id}>{data.exam_id}</option>
                  ))}
                </select>
              </Form.Group>
              <br />
              <br />
              <Form.Group>
                <Form.Label>Exams Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="exam_id"
                  onChange={captureFieldChange}
                  value={form.exam_id}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Duration: </Form.Label>
                <Form.Control
                  type="text"
                  name="exam_duration"
                  onChange={captureFieldChange}
                  value={form.exam_duration}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Type: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="exam_type"
                  value={form.exam_type}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Date: </Form.Label>
                <Form.Control
                  type="date"
                  name="exam_date"
                  onChange={captureFieldChange}
                  value={form.exam_date}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Time: </Form.Label>
                <Form.Control
                  type="time"
                  name="exam_time"
                  onChange={captureFieldChange}
                  value={form.exam_time}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Course Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="course_id"
                  onChange={captureFieldChange}
                  value={form.course_id}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <br />
              <Stack direction="horizontal" gap={2}>
                <Button variant="primary" type="submit">
                  Click here to submit form{" "}
                </Button>
                &nbsp;&nbsp;
                <Button variant="primary" onClick={reset} type="reset">
                  Click here to clear form{" "}
                </Button>
              </Stack>
            </Form>
          </Container>
        </Alert>
      </div>

      <br />
      <br />

      <div> {JSON.stringify(form)}</div>
      <br />
      <br />
      <div> {JSON.stringify(response)}</div>
    </div>
  );
}

export default UpdateFormExams;