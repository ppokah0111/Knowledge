//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form,  Container, Alert } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../markTable";

function DeleteFormMarks() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [marks, setMarks] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //student_id, staff_id, course_id, score, cutoff_id
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < marks.length; i++) {

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

  const handle_submit = (e) => {
    e.preventDefault();

    //fetch("https://jsonplaceholder.typicode.com/posts", {
    fetch("http://localhost:4000/marks?_id="+form._id, {
      method: "DELETE",
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
  }, [response]);

  //student_id, staff_id, course_id, score, cutoff_id
  return (
    <div className="App">
      <div>
        <h1>University Marks Delete Form</h1>
      </div>

      <div>
        <Alert>
          <Container>

            <Form.Group>
              <Form.Label> Enter ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {marks.map((data) => (
                  <option value={data._id}>{data.course_id} [ {data._id} ]</option>
                ))}
              </select>
            </Form.Group>

            <div> {JSON.stringify(form)}</div>

            <br />
          </Container>
        </Alert>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Delete Selected Marks
      </Button>

      <br />
      <br />
      <Table tableData={marks} />
    </div>
  );
}

export default DeleteFormMarks;
