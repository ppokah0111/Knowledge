import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


export default function ClassLink() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
       <Link to="/AddFormClasses">Add Classes</Link>
        <Link to="/UpdateFormClasses">Update Classes</Link>
        <Link to="/GetFormClasses">Get Classes</Link>
        <Link to="/DeleteFormClasses">Delete Classes</Link>
        
      </Stack>
    </div>
  );
}
