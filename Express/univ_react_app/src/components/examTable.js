import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//[exam_id, exam_duration, exam_type, exam_date, exam_time, course_id]
const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "exam_id",
    headerName: "EXAM ID",
    width: 100,
  },
  {
    field: "exam_duration",
    headerName: "EXAM DURATION",
    width: 100,
  },
  {
    field: "exam_type",
    headerName: "EXAM TYPE",
    minWidth: 200,
  },
  { field: "exam_date", headerName: "EXAM DATE", width: 100 },
  {
    field: "exam_time",
    headerName: "EXAM TIME",
    width: 100,
  },
  {
    field: "course_id",
    headerName: "COURSE ID",
    minWidth: 100,
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
