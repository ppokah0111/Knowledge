//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

import Table from "../studentTable";

function DeleteFormClasses() {
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

    fetch("http://localhost:4000/students?_id="+form._id, {
      method: "DELETE",
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
      }, [response]); 

  //name, age, national_id, student_id, phone, gender, address, level, semester
  return (
    <div className="App">
      <div>
        <h1>University Students Delete Form</h1>
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

        </Container>
      </Alert>
      </div>

      <Button variant="contained" onClick={handle_submit}> Delete Selected Student</Button>
      <br />
      <Table tableData={students} />
      

    </div>
  );
}

export default DeleteFormClasses;
