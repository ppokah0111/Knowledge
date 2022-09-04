//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert, Stack} from "react-bootstrap";

function UpdateFormClasses() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [classes, setClasses] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //[course_id, staff_id, class_start_time, class_start_date, class_duration, class_mode, class_address, class_id]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < classes.length; i++) {
      //console.log(e.target.value)
      //console.log(classes[i]._id)

      if (classes[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          course_id: classes[i].course_id,
          staff_id: classes[i].staff_id,
          class_start_time: classes[i].class_start_time,
          class_start_date: classes[i].class_start_date,
          class_duration: classes[i].class_duration,
          class_mode: classes[i].class_mode,
          class_address: classes[i].class_address,
          class_id: classes[i].class_id,
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

    fetch("http://localhost:4000/classes", {
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
    fetch("http://localhost:4000/classes")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Classes error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (classes) => {
          setClasses(classes);
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

  //[course_id, staff_id, class_start_time, class_start_date, class_duration, class_mode, class_address, class_id]
  return (
    <div className="App">
      <div>
        <h1>University Classes Update Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form.Group>
              <Form.Label> Enter Class ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {classes.map((data) => (
                  <option value={data._id}>{data.class_id}</option>
                ))}
              </select>
            </Form.Group>
            <div> {JSON.stringify(form)}</div>
            <br />
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
                <Form.Label>Enter your Staff ID: </Form.Label>
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter your Class Address: </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="class_address"
                  onChange={captureFieldChange}
                  value={form.class_address}
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

export default UpdateFormClasses;
