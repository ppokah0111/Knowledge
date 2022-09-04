import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//name, age, national_id, student_id, phone, gender, address, level, semester
const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "name",
    headerName: "NAME",
    width: 150,
  },
  {
    field: "national_id",
    headerName: "NATIONAL ID",
    width: 100,
  },
  {
    field: "student_id",
    headerName: "STUDENT ID",
    width: 100,
  },
  { field: "phone", headerName: "PHONE NUMBER", width: 100 },
  {
    field: "gender",
    headerName: "GENDER",
    width: 100,
  },
  {
    field: "address",
    headerName: "ADDRESS",
    width: 150,
    flex: 1,
  },
  {
    field: "level",
    headerName: "LEVEL",
    width: 1,
  },
  {
    field: "semester",
    headerName: "SEMESTER",
    minWidth: 1,
  },
];

export default function Table(props) {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={props.tableData}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
}
