//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert, Stack } from "react-bootstrap";

function UpdateFormAssigns() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [assigns, setAssigns] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < assigns.length; i++) {
      //console.log(e.target.value)
      //console.log(assigns[i]._id)

      if (assigns[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          assign_id: assigns[i].assign_id,
          assign_type: assigns[i].assign_type,
          course_id: assigns[i].course_id,
          assign_start_date: assigns[i].assign_start_date,
          assign_deadline: assigns[i].assign_deadline,
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

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/assigns", {
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
    fetch("http://localhost:4000/assigns")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Students error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (assigns) => {
          setAssigns(assigns);
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

  //[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
  return (
    <div className="App">
      <div>
        <h1>University Assigns Update Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form.Group>
              <Form.Label> Enter Assigns ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {assigns.map((data) => (
                  <option value={data._id}>{data.assign_id}</option>
                ))}
              </select>
            </Form.Group>
            <div> {JSON.stringify(form)}</div>
            <br /> <br />
            <form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label>Enter your Assign Type: </Form.Label>
                <Form.Control
                  type="text"
                  name="assign_type"
                  onChange={captureFieldChange}
                  value={form.assign_type}
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
                  value={form.course_id}
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
                  value={form.assign_start_date}
                  placeholder="Enter your Assign Start Date"
                />
              </Form.Group>{" "}
              <br />
              <Form.Group>
                <Form.Label>Enter your Assign Deadline:</Form.Label>
                <Form.Control
                  type="text"
                  name="assign_deadline"
                  onChange={captureFieldChange}
                  value={form.assign_deadline}
                  placeholder="Enter your assign_deadline"
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

      <div> {JSON.stringify(response)}</div>
    </div>
  );
}

export default UpdateFormAssigns;
