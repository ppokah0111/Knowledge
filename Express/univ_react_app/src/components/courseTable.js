import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//[course_id, level, course_duration, semester, start_date]
const columns = [
  
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "course_id",
    headerName: "COURSE ID",
    minWidth: 100,
  },
  {
    field: "level",
    headerName: "LEVEL",
    width: 50,
  },
  {
    field: "course_duration",
    headerName: "COURSE DURATION",
    minWidth: 50,
  },
  { field: "semester", headerName: "SEMESTER", width: 100 },
  {
    field: "start_date",
    headerName: "START DATE",
    width: 100,
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
