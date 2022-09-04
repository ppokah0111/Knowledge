//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

//import Button from "@mui/material/Button";

//[course_id, assign_id, exam_id, _percentage, cutoff_id]
function UpdateFormCutoff() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [cutoff, setCutoff] = useState([]);

  //Fetch database and store in Array do a drop down,  onChange and display in form
  //display form content based on the selection

  //[course_id, assign_id, exam_id, _percentage, cutoff_id]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < cutoff.length; i++) {
      //console.log(e.target.value)
      //console.log(students[i]._id)

      if (cutoff[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          course_id: cutoff[i].course_id,
          assign_id: cutoff[i].assign_id,
          exam_id: cutoff[i].exam_id,
          _percentage: cutoff[i]._percentage,
          cutoff_id: cutoff[i].cutoff_id,
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

    fetch("http://localhost:4000/cutoff", {
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
    fetch("http://localhost:4000/cutoff")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Cutoff error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (cutoff) => {
          setCutoff(cutoff);
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

  //[course_id, assign_id, exam_id, _percentage, cutoff_id]
  return (
    <div className="App">
      <div>
        <h1>University Cutoff Update Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label> Enter ID: </Form.Label>
                <select onChange={captureIdFieldChange}>
                  <option>Select some option</option>
                  {cutoff.map((data) => (
                    <option value={data._id}>{data.cutoff_id}</option>
                  ))}
                </select>
              </Form.Group>
              <br />
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
              <Form.Group>
                <Form.Label>Assign Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="assign_id"
                  onChange={captureFieldChange}
                  value={form.assign_id}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Exam Identification: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="exam_id"
                  value={form.exam_id}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label> Percentage (%): </Form.Label>
                <Form.Control
                  type="text"
                  name="_percentage"
                  onChange={captureFieldChange}
                  value={form._percentage}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>cutoff Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="cutoff_id"
                  onChange={captureFieldChange}
                  value={form.cutoff_id}
                ></Form.Control>
              </Form.Group>{" "}
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

export default UpdateFormCutoff;
