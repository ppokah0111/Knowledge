import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//student_id, staff_id, course_id, score, cutoff_id
const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "student_id",
    headerName: "STUDENT ID",
    width: 100,
  },
  {
    field: "staff_id",
    headerName: "STAFF ID",
    width: 100,
  },
  {
    field: "course_id",
    headerName: "COURSE ID",
    minWidth: 100,
  },
  { field: "score", headerName: "SCORE", width: 100 },
  {
    field: "cutoff_id",
    headerName: "CUTOFF ID",
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
