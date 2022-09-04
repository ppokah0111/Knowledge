//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

//import Button from "@mui/material/Button";

//[course_id, level, course_duration, semester, start_date]
function UpdateFormCourses() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [courses, setCourses] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //[course_id, level, course_duration, semester, start_date]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < courses.length; i++) {
      //console.log(e.target.value)
      //console.log(students[i]._id)

      if (courses[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          course_id: courses[i].course_id,
          level: courses[i].level,
          course_duration: courses[i].course_duration,
          semester: courses[i].semester,
          start_date: courses[i].start_date,
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

    fetch("http://localhost:4000/courses", {
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
    fetch("http://localhost:4000/courses")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Courses error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (courses) => {
          setCourses(courses);
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

  //[course_id, level, course_duration, semester, start_date]
  return (
    <div className="App">
      <div>
        <h1>University Courses Update Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form.Group>
              <Form.Label> Enter Course ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {courses.map((data) => (
                  <option value={data._id}>{data.course_id}</option>
                ))}
              </select>
            </Form.Group>

            <br />
             <br />

            <div> {JSON.stringify(form)}</div>

            <br />
            <br />

            <form onSubmit={handle_submit}>
              <Form.Group>
                <Form.Label>Enter your Course Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="course_id"
                  onChange={captureFieldChange}
                  value={form.course_id}
                  placeholder="Enter your Course Identification"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your Level: </Form.Label>
                <Form.Control
                  type="number"
                  name="level"
                  onChange={captureFieldChange}
                  value={form.level}
                  placeholder="Enter your Level"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your Course Duration: </Form.Label>
                <Form.Control
                  type="text"
                  name="course_duration"
                  onChange={captureFieldChange}
                  value={form.course_duration}
                  placeholder="Enter your Course Duration"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your Semester: </Form.Label>
                <Form.Control
                  type="number"
                  name="semester"
                  onChange={captureFieldChange}
                  value={form.semester}
                  placeholder="Enter your Semester"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your Start Date: </Form.Label>
                <Form.Control
                  type="date"
                  name="start_date"
                  onChange={captureFieldChange}
                  value={form.start_date}
                  placeholder="Enter your Start Date"
                />
              </Form.Group> <br />
         
              <br />
              <br />
              <Button variant="primary" type="submit">
                Click here to submit form{" "}
              </Button>
            </form>
          </Container>
        </Alert>
      </div>
      <br />
      <br />
      <div> {JSON.stringify(response)}</div>
    </div>
  );
}

export default UpdateFormCourses;
