//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

//import Button from "@mui/material/Button";

function UpdateFormMarks() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [marks, setMarks] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //student_id, staff_id, course_id, score, cutoff_id
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < marks.length; i++) {
      //console.log(e.target.value)
      //console.log(students[i]._id)

      if (marks[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          student_id: marks[i].student_id,
          course_id: marks[i].course_id,
          staff_id: marks[i].staff_id,
          score: marks[i].score,
          cutoff_id: marks[i].cutoff_id,
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
    setForm ({})
  }

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/marks", {
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
    fetch("http://localhost:4000/marks")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Marks error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (marks) => {
          setMarks(marks);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components
        (error) => {
          console.log(error);
        }
      );

    return () => {};
  }, []);

  //student_id, staff_id, course_id, score, cutoff_id
  return (
    <div className="App">
      <div>
        <h1>University Marks Update Form</h1>
      </div>

      <div>
        <Alert>
          <Container>

            <Form onSubmit={handle_submit}>
              
              <Form.Group>
                <Form.Label> Enter ID: </Form.Label>
                <select onChange={captureIdFieldChange}>
                  <option>Select some option</option>
                  {marks.map((data) => (
                    <option value={data._id}>{data._id}</option>
                  ))}
                </select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Student Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="student_id"
                  onChange={captureFieldChange}
                  value={form.student_id}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Staff Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="staff_id"
                  onChange={captureFieldChange}
                  value={form.staff_id}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Course Identification: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="course_id"
                  value={form.course_id}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Score: </Form.Label>
                <Form.Control
                  type="text"
                  name="score"
                  onChange={captureFieldChange}
                  value={form.score}
                ></Form.Control>
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Cutoff Id: </Form.Label>
                <Form.Control
                  type="text"
                  name="cutoff_id"
                  onChange={captureFieldChange}
                  value={form.cutoff_id}
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

export default UpdateFormMarks;
