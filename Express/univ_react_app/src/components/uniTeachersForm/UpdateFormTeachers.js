//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

//import Button from "@mui/material/Button";

function UpdateFormTeachers() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [teachers, setTeachers] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //use  //name, age, national_id, student_id, phone, gender, address, level, semester
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < teachers.length; i++) {
      //console.log(e.target.value)
      //console.log(students[i]._id)

      if (teachers[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          name: teachers[i].name,
          age: teachers[i].age,
          national_id: teachers[i].national_id,
          student_id: teachers[i].student_id,
          phone: teachers[i].phone,
          gender: teachers[i].gender,
          address: teachers[i].address,
          tax: teachers[i].tax,
          course_id: teachers[i].course_id,
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

    fetch("http://localhost:4000/teachers", {
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
    fetch("http://localhost:4000/teachers")
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
        (teachers) => {
          setTeachers(teachers);
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

  //name, age, national_id, student_id, phone, gender, address, level, semester
  return (
    <div className="App">
      <div>
        <h1>University Teachers Update Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form.Group>
              <Form.Label> Enter ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {teachers.map((data) => (
                  <option value={data._id}>{data.name}</option>
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
                <Form.Label>Enter your full name: </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={captureFieldChange}
                  value={form.name}
                  placeholder="Enter your full name"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your age: </Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  onChange={captureFieldChange}
                  value={form.age}
                  placeholder="Enter your age"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your National Identification: </Form.Label>
                <Form.Control
                  type="text"
                  name="national_id"
                  onChange={captureFieldChange}
                  value={form.national_id}
                  placeholder="Enter your National ID"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your Student ID: </Form.Label>
                <Form.Control
                  type="text"
                  name="student_id"
                  onChange={captureFieldChange}
                  value={form.student_id}
                  placeholder="Enter your Student ID"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Enter your Phone Number: </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={captureFieldChange}
                  value={form.phone}
                  placeholder="Enter your Phone Number"
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Select your Gender: </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="gender"
                  onChange={captureFieldChange}
                  value={form.gender}
                >
                  <option>Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="undecided">Undecided</option>
                </Form.Select>
              </Form.Group> <br />

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter your Address: </Form.Label>
                <Form.Control
                  type="textarea"
                  as="textarea" 
                  rows={3}
                  name="address"
                  onChange={captureFieldChange}
                  value={form.address}
                />
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Tax Number: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="tax"
                  value={form.tax}
                ></Form.Control>
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>Course Identification: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={captureFieldChange}
                  name="course_id"
                  value={form.course_id}
                ></Form.Control>
              </Form.Group>
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

export default UpdateFormTeachers;
