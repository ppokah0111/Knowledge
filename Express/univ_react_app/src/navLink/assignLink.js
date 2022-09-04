import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


export default function AssignLink() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="/AddFormAssigns">Add Assigns</Link>
        <Link to="/UpdateFormAssigns">Update Assigns</Link>
        <Link to="/GetFormAssigns">Get Assigns</Link>
        <Link to="/DeleteFormAssigns">Delete Assigns</Link>
        
      </Stack>
    </div>
  );
}
