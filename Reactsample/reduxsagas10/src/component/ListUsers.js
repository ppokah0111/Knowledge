import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { createRef } from "react";

import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
//import Grid from "@material-ui/core/Grid"; 
//import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Grid';

export default function ListUsers () {

     //GET: List & single user(s)

  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  //reading a record in a database given an id
  //const handleFetchList = () => { dispatch({ type: "FETCH_USER_LIST" }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH_USER_LIST" });
  }

    return (
        <div className="App">

            <Table data={data.data} columns={data.columns}></Table>
            <br />

            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>

                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                            }}
                        >
                        <ButtonGroup disableElevation variant="contained">
                            <Button type="submit">Post User List</Button>
                        </ButtonGroup>

                            <br />
                            {JSON.stringify(data)}

                        </Box>
                    </Grid>
                </Grid>     

            </form>

        </div>
    )

}