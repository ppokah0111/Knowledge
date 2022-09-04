import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function ExamLink() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="/AddFormExams">Add Exams</Link>
        <Link to="/UpdateFormExams">Update Exams</Link>
        <Link to="/GetFormExams">Get Exams</Link>
        <Link to="/DeleteFormExams">Delete Exams</Link>
        
      </Stack>
    </div>
  );
}
