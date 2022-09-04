import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useLocalStorage } from '@rehooks/local-storage';
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AdminLink() {

  const [user, setUser, deleteUser] = useLocalStorage('user');

  return (
    <div>
      <h1>Testing Admin Link</h1>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="/GetFormCourses">View Courses</Link>
        <Link to="/GetFormExams">View Exams</Link>
        <Link to="/GetFormClasses">View Classes</Link>
        <Link to="/GetFormMarks">View Marks</Link>
        <Link to="/GetFormCutoff">View Cutoff</Link>

        <Link to="/AddFormStudents"> Add Students</Link>
        <Link to="/UpdateFormStudents" > Update Students</Link>
        <Link to="/GetFormStudents" > View Students</Link>
        <Link to="/DeleteFormStudents"> Delete Students</Link>

        <Link to="/AddFormTeachers"> Add Teachers</Link>
        <Link to="/UpdateFormTeachers" > Update Teachers</Link>
        <Link to="/GetFormTeachers" > View Teachers</Link>
        <Link to="/DeleteFormTeachers" > Delete Teachers</Link>

        <Link to="/AddFormMarks" > Add Marks</Link>
        <Link to="/UpdateFormMarks" > Update Marks</Link>
        <Link to="/GetFormMarks"  > View Marks</Link>
        <Link to="/DeleteFormMarks" > Delete Marks</Link>

        <Link to="/AddFormExams"  > Add Exams</Link>
        <Link to="/UpdateFormExams" > Update Exams</Link>
        <Link to="/GetFormExams" > View Exams</Link>
        <Link to="/DeleteFormExams" >Delete Exams</Link>

        <Link to="/AddFormCutoff" > Add Cutoff</Link>
        <Link to="UpdateFormCutoff"> Update Cutoff</Link>
        <Link to="GetFormCutoffs" > View Cutoff</Link>
        <Link to="DeleteFormCutoff" > Delete Cutoff</Link>

        <Link to="/AddFormClasses" > Add Classes</Link>
        <Link to="/UpdateFormClasses"  > Update Classes</Link>
        <Link to="/GetFormClasses"  > View Classes</Link>
        <Link to="/DeleteFormClasses"  > Delete Classes</Link>

        <Link to="/AddFormCourses"  > Add Courses</Link>
        <Link to="/UpdateFormCourses"  > Update Courses</Link>
        <Link to="/GetFormCourses"  > View Courses</Link>
        <Link to="/DeleteFormCourses"  > Delete Courses</Link>

        <Link to="/AddFormAssigns"  > Add Assigns</Link>
        <Link to="/UpdateFormAssigns"  > Update Assigns</Link>
        <Link to="/GetFormAssigns"  > View Assigns</Link>
        <Link to="/DeleteFormAssigns"  > Delete Assigns</Link>
        
      </Stack>
    </div>
  );
}
