import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//name, age, national_id, staff_id, phone, gender, address, tax, course_id
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
    field: "staff_id",
    headerName: "STAFF ID",
    width: 80,
  },
  { field: "phone", headerName: "PHONE NUMBER", width: 100 },
  {
    field: "gender",
    headerName: "GENDER",
    width: 80,
  },
  {
    field: "address",
    headerName: "ADDRESS",
    width: 150,
    flex: 1,
  },
  {
    field: "tax",
    headerName: "TAX",
    width: 30,
  },
  {
    field: "course_id",
    headerName: "COURSE ID",
    minWidth: 6,
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
