//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form,  Container, Alert } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../examTable";

 //[exam_id, exam_duration, exam_type, exam_date, exam_time, course_id]
function DeleteFormExams() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [exams, setExams] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

   //[exam_id, exam_duration, exam_type, exam_date, exam_time, course_id]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < exams.length; i++) {

      if (exams[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          exam_id: exams[i].exam_id,
          exam_duration: exams[i].exam_duration,
          exam_type: exams[i].exam_type,
          exam_date: exams[i].exam_date,
          exam_time: exams[i].exam_time,
          course_id: exams[i].course_id,
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
    fetch("http://localhost:4000/exams?_id="+form._id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //USEEFFECT
  useEffect(() => {
    fetch("http://localhost:4000/exams")
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
        (exams) => {
          setExams(exams);
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
        <h1>University Exams Delete Form</h1>
      </div>

      <div>
        <Alert>
          <Container>

            <Form.Group>
              <Form.Label> Enter Exam ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {exams.map((data) => (
                  <option value={data._id}>{data.course_id} [ {data.exam_id} ]</option>
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
        Delete Selected Exams
      </Button>

      <br />
      <br />
      <Table tableData={exams} />
    </div>
  );
}

export default DeleteFormExams;
