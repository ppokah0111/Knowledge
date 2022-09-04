import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//[course_id, staff_id, class_start_time, class_start_date, class_duration, class_mode, class_address, class_id]
const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "course_id",
    headerName: "COURSE ID",
    minWidth: 100,
  },
  {
    field: "staff_id",
    headerName: "STAFF ID",
    width: 50,
  },
  {
    field: "class_start_time",
    headerName: "CLASS START TIME",
    minWidth: 100,
  },
  { field: "class_start_date", headerName: "CLASS START DATE", width: 100 },
  {
    field: "class_duration",
    headerName: "CLASS DURATION",
    width: 100,
  },
  {
    field: "class_mode",
    headerName: "CLASS MODE",
    width: 50,
  },
  {
    field: "class_address",
    headerName: "CLASS ADDRESS",
    minWidth: 50,
  },
  { field: "class_id", headerName: "CLASS ID", width: 100 },
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
