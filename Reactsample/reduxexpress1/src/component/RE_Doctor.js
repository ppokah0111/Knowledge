import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Stack, Button, TextField } from "@mui/material";
import { createRef } from "react";

export default function RE_Doctor() {
  const hospitalIdRef = createRef();

  //use dispatch is used to send request
  const dispatch = useDispatch();

  //useSelector is used to get the required data from state
  const data = useSelector((state) => state);

  //Action is triggered by using dispatch
  //Action will contsin actionType + any data
  const handleFetchDoctor = () => dispatch({ type: "fetchDoctor" });

  const handlefetchDoctorByName = () =>
    dispatch({
      type: "fetchDoctorByName",
      hospitalTodoId: hospitalIdRef.current.value,
    });

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <label>
         
          Redux Fetch Doctor &nbsp;
          <Button variant="contained" onClick={handleFetchDoctor}>
           
            Click Redux Fetch
          </Button>
        </label>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <label>
          <TextField
            id="outlined-basic"
            name="fetchDoctorByName"
            label="Enter Name to fetch Doctor"
            variant="outlined"
            type="text"
            inputRef={hospitalIdRef}
          />
          &nbsp; &nbsp;
          <Button variant="contained" onClick={handlefetchDoctorByName}>
            Click Redux Fetch by Name
          </Button>
        </label>{" "}
        <br />
      </Stack>

      <br />
      {JSON.stringify(data)}
    </div>
  );
}
