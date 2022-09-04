import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


export default function CourseLink() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >

<Link to="/AddFormCourses">Add Courses</Link>
        <Link to="/UpdateFormCourses">Update Courses</Link>
        <Link to="/GetFormCourses">Get Courses</Link>  
        <Link to="/DeleteFormCourses">Delete Courses</Link>
        
      </Stack>
    </div>
  );
}
