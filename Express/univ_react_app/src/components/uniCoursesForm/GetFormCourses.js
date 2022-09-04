//this is the controlled component way II
import React, { useState } from "react";
import { useLocalStorage } from '@rehooks/local-storage';

import Button from "@mui/material/Button";
import Table from "../courseTable";


function GetFormCourses() {
  const [courses, setCourses] = useState([]);

  const [user, setUser, deleteUser] = useLocalStorage('user');

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/courses/user?"+'student_id='+user.user)
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error) into the cache itself
        // You have to send it, as I have done below
        if (!res.ok) {
          throw new Error(
            "Server responds with Uni Get Courses error!" + res.status
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
  };

  //[course_id, level, course_duration, semester, start_date]
  return (
    <div className="App">
      <div>
        <h1>University Courses Get Form</h1>
      </div>

      <Button variant="contained" onClick={handle_submit}>
        {" "}
        Get Courses
      </Button>
      <br />
      <Table tableData={courses} />
    </div>
  );
}

export default GetFormCourses;
