import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function CutoffLink() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="/GetFormCutoff">View Cutoff</Link>
        <Link to="/AddFormCutoff">Add Cutoff</Link>
        <Link to="/UpdateFormCutoff">Edit Cutoff</Link>
        <Link to="/DeleteFormCutoff">Delete Cutoff</Link>
        
      </Stack>
    </div>
  );
}
