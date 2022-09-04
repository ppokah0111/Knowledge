import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./../Table";

import { Stack, Button, TextField, Divider, Paper, styled  } from "@mui/material";

import { createRef } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RE_AddDoctor() {
  const idRef = createRef();
  const nameRef = createRef();
  const specialtyRef = createRef();

  //use dispatch is used to send request
  const dispatch = useDispatch();

  //useSelector is used to get the required data from state
  const data = useSelector((state) => state);

  //Action is triggered by using dispatch
  //Action will contsin actionType + any data
  const handleRE_AddDoctor = (e) => {
    e.preventDefault();
    dispatch({
      type: "addDoctor",
      name: nameRef.current.value,
      specialty: specialtyRef.current.value,
    });
  };

  /*  const handleAddDoctorByName = () =>
    dispatch({
      type: "addDoctor",
      hospitalTodoId: hospitalIdRef.current.value,
    }); */

  return (
    <div className="App">
        <br/>

      

      <br />

      <form onSubmit={handleRE_AddDoctor}>
        <label>
          Enter Doctor's Name: &nbsp;&nbsp;
          <input inputRef={nameRef} type="text"  />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          Enter Doctor's Specialty: &nbsp;&nbsp;
          <input inputRef={specialtyRef} type="text" />
        </label>
        <br />
        <button>Click to Add Doctor</button>
      </form>

      <br />
      {JSON.stringify(data)}
    </div>
  );
}

// {/* <DoctorTable /> */}

//<Table data={data.data} columns={data.columns}></Table>
