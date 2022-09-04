import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//[assign_id, assign_type, course_id, assign_start_date, assign_deadline]
const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "assign_id",
    headerName: "ASSIGN ID",
    minWidth: 100,
  },
  {
    field: "assign_type",
    headerName: "ASSIGN ID",
    width: 100,
  },
  {
    field: "course_id",
    headerName: "COURSE ID",
    minWidth: 100,
  },
  { field: "assign_start_date", headerName: "ASSIGN START DATE", width: 200 },
  {
    field: "assign_deadline",
    headerName: "ASSIGN DEADLINE",
    width: 150,
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
