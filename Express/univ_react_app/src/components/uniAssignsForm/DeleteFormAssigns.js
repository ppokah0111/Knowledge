//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Container, Alert } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../assignTable";

function DeleteFormAssigns() {

  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [assigns, setAssigns] = useState([]); 

    //Fetch database and store in Array
    //do a drop down,  onChange and display in form
    //display form content based on the selection

 //[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
  const captureIdFieldChange = (e) => {
    for( let i =0; i < assigns.length; i++){
       // console.log(e.target.value)
        // console.log(assigns[i]._id)

        if(assigns[i]._id == e.target.value){
            
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

    fetch("http://localhost:4000/assigns?_id="+form._id, {
      method: "DELETE",
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
              throw new Error("Server responds with Uni Assigns error!" + res.status);
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
      }, [response]); 

   //[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
  return (
    <div className="App">
      <div>
        <h1>University Assigns Delete Form</h1>
      </div>

     <div>
      <Alert>
        <Container>

        <Form.Group>
            <Form.Label>  Enter ID:  </Form.Label>
            <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {assigns.map((data) => (
                <option value={data._id}>{data._id}</option>
                ))}
            </select>
        </Form.Group>
        
        <div>  {JSON.stringify(form)}</div>

        <br />

        </Container>
      </Alert>
      </div>

      <Button variant="contained" onClick={handle_submit}> Delete Selected Assign ID</Button>
      <br /> <br />
      <Table tableData={assigns} />
      

    </div>
  );
}

export default DeleteFormAssigns;
