//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";


function UpdateFormStudents() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [students, setStudents] = useState([]); 

    //Fetch database and store in Array
    //do a drop down,  onChange and display in form
    //display form content based on the selection

//use  //name, age, national_id, student_id, phone, gender, address, level, semester
  const captureIdFieldChange = (e) => {
    for( let i =0; i < students.length; i++){
        console.log(e.target.value)
        console.log(students[i]._id)

        if(students[i]._id == e.target.value){
            
            setForm({
                ...form,
                _id: e.target.value,
                name: students[i].name,
                age: students[i].age,
                national_id: students[i].national_id,
                student_id: students[i].student_id,
                phone: students[i].phone,
                gender: students[i].gender,
                address: students[i].address,
                level: students[i].level,
                semester: students[i].semester,
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

    //fetch("https://jsonplaceholder.typicode.com/posts", {
    fetch("http://localhost:4000/students", {
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
        fetch("http://localhost:4000/students")
          .then((res) => {
            // Unfortunately, fetch doesn't send (404 error) into the cache itself
            // You have to send it, as I have done below
            if (!res.ok) {
              throw new Error("Server responds with Uni Students error!" + res.status);
            }
            return res.json();
          })
          .then(
            (students) => {
              setStudents(students);
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
        <h1>University Students Update Form</h1>
      </div>

    
     <div>
      <Alert>
        <Container>

        <Form.Group>
            <Form.Label>  Enter ID:  </Form.Label>
            <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {students.map((data) => (
                <option value={data._id}>{data.name}</option>
                ))}
            </select>
        </Form.Group>
        
        <div>  {JSON.stringify(form)}</div>

        <br />

          <form onSubmit={handle_submit} >

            <Form.Group>
              <Form.Label>Enter your full name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={captureFieldChange}
                value={form.name}
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter your age:</Form.Label>
              <Form.Control
                type="number"
                name="age"
                onChange={captureFieldChange}
                value={form.age}
                placeholder="Enter your age"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter your National Identification:</Form.Label>
              <Form.Control
                type="text"
                name="national_id"
                onChange={captureFieldChange}
                value={form.national_id}
                placeholder="Enter your National ID"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter your Student ID:</Form.Label>
              <Form.Control
                type="text"
                name="student_id"
                onChange={captureFieldChange}
                value={form.student_id}
                placeholder="Enter your Student ID"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter your Phone Number:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                onChange={captureFieldChange}
                value={form.phone}
                placeholder="Enter your Phone Number"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select your Gender:</Form.Label>
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
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter your Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                onChange={captureFieldChange}
                value={form.address}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select your Level:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="level"
                onChange={captureFieldChange}
                value={form.level}
              >
                <option>Select your level</option>
                <option value="1">Undergraduate - Year One</option>
                <option value="2">Undergraduate - Year Two</option>
                <option value="3">Undergraduate - Year Three</option>
                <option value="4">Undergraduate - Year Three</option>
                <option value="5">Postgraduate - Certificate</option>
                <option value="6">Postgraduate - Honours</option>
                <option value="7">Masters</option>
                <option value="8">Doctorate (PhD)</option>
                <option value="9">PostDoctorate</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter your semester:</Form.Label>
              <Form.Control
                type="number"
                name="semester"
                onChange={captureFieldChange}
                value={form.semester}
                placeholder="Enter your semester"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Click here to submit form{" "}
            </Button>
            
          </form>

        </Container>
      </Alert>
      </div>
      
      <div>  {JSON.stringify(response)}</div>
    </div>
  );
}

export default UpdateFormStudents;
