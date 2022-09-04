import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//[course_id, assign_id, exam_id, _percentage, cutoff_id]
const columns = [
  
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "course_id",
    headerName: "COURSE ID",
    minWidth: 100,
  },
  {
    field: "assign_id",
    headerName: "ASSIGN ID",
    width: 100,
  },
  {
    field: "exam_id",
    headerName: "EXAM ID",
    minWidth: 200,
  },
  { field: "_percentage", headerName: "PERCENTAGE", width: 100 },
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
