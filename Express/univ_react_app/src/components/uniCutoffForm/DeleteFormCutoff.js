//this is the controlled component way II
import React, { useEffect, useState } from "react";
import { Form, Container, Alert } from "react-bootstrap";

import Button from "@mui/material/Button";
import Table from "../cutoffTable";

//[course_id, assign_id, exam_id, _percentage, cutoff_id]
function DeleteFormCutoff() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [cutoff, setCutoff] = useState([]);

  //Fetch database and store in Array
  //do a drop down,  onChange and display in form
  //display form content based on the selection

  //[course_id, assign_id, exam_id, _percentage, cutoff_id]
  const captureIdFieldChange = (e) => {
    for (let i = 0; i < cutoff.length; i++) {
      if (cutoff[i]._id == e.target.value) {
        setForm({
          ...form,
          _id: e.target.value,
          course_id: cutoff[i].course_id,
          assign_id: cutoff[i].assign_id,
          exam_id: cutoff[i].exam_id,
          _percentage: cutoff[i]._percentage,
          cutoff_id: cutoff[i].cutoff_id,
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

    fetch("http://localhost:4000/cutoff?_id="+form._id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  //USEEFFECT
  useEffect(() => {
    fetch("http://localhost:4000/cutoff")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Cutoff error!" + res.status
          );
        }
        return res.json();
      })
      .then(
        (cutoff) => {
          setCutoff(cutoff);
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
        <h1>University Cutoff Delete Form</h1>
      </div>

      <div>
        <Alert>
          <Container>
            <Form.Group>
              <Form.Label> Enter Cutoff ID: </Form.Label>
              <select onChange={captureIdFieldChange}>
                <option>Select some option</option>
                {cutoff.map((data) => (
                  <option value={data._id}>
                    {data.course_id} [ {data.cutoff_id} ]
                  </option>
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
        Delete Selected Cutoff
      </Button>

      <br />
      <br />
      <Table tableData={cutoff} />
    </div>
  );
}

export default DeleteFormCutoff;
