import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { useLocalStorage } from '@rehooks/local-storage';

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

/* import AddFormTeachers from "./components/uniTeachersForm/AddFormTeachers";
import DeleteFormTeachers from "./components/uniTeachersForm/DeleteFormTeachers";
import GetFormTeachers from "./components/uniTeachersForm/GetFormTeachers";
import UpdateFormTeachers from "./components/uniTeachersForm/UpdateFormTeachers"; */

export default function TeacherLink() {

  const [user, setUser, deleteUser] = useLocalStorage('user');

  return (
    <div>
      <h1>Testing Teacher Link</h1>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="/GetFormCourses">View Courses</Link>
        <Link to="/UpdateFormCourses">Edit Courses</Link>

        <Link to="/GetFormExams">View Exams</Link>
        <Link to="/UpdateFormExams">Edit Exams</Link>

        <Link to="/GetFormClasses">View Classes</Link>
        <Link to="/AddFormClasses">Add Classes</Link>
        <Link to="/UpdateFormClasses">Edit Classes</Link>

        <Link to="/GetFormMarks">View Marks</Link>
        <Link to="/AddFormMarks">Add Marks</Link>
        <Link to="/UpdateFormMarks">Edit Marks</Link>

        <Link to="/GetFormCutoff">View Cutoff</Link>
        <Link to="/AddFormCutoff">Add Cutoff</Link>
        <Link to="/UpdateFormCutoff">Edit Cutoff</Link>
        <Link to="/DeleteFormCutoff">Delete Cutoff</Link>

        <Link to="/GetFormStudents">View Students</Link>
        <Link to="/GetFormTeachers">View Teachers</Link>
        <Link to="/GetFormAssigns">View Assigns</Link>

      </Stack>
    </div>
  );
}
