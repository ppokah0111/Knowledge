import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", 
    headerName: "ID", 
    width: 30 },
  {
    field: "userId",
    headerName: "USERID",
    width: 50,
  },
  {
    field: "completed",
    headerName: "COMPLETED",
    width: 100,
  },
  {
    field: "title",
    headerName: "TITLE",
    flex: 1,
  },
];

export default function Table(props) {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={props.tableData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
}
