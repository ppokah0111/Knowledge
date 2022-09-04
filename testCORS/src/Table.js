import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function Table(props) {
  

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={props.tableData}
        columns={props.columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
}
