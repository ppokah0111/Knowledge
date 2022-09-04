import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function MarkLink() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="/AddFormMarks">Add Marks</Link>
        <Link to="/UpdateFormMarks">Update Marks</Link>
        <Link to="/GetFormMarks">Get Marks</Link>
        <Link to="/DeleteFormMarks">Delete Marks</Link>
      </Stack>
    </div>
  );
}
