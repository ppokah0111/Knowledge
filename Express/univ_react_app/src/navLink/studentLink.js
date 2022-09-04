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

export default function StudentLink() {

  const [user, setUser, deleteUser] = useLocalStorage('user');


  return (
    <div>
      <h1>Testing Student Link</h1>
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
        <Link to="/GetFormStudents">View Students</Link>
        <Link to="/GetFormTeachers">View Teachers</Link>
        <Link to="/GetFormAssigns">View Assigns</Link>
  
        
      </Stack>
    </div>
  );
}
