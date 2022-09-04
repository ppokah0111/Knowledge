import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { createRef } from "react";

import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
//import Grid from "@material-ui/core/Grid"; 
//import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Grid';

export default function ListUsers () {

  //GET:  single user(s)

  const formListUser = createRef()

  const dispatch = useDispatch();
  const data = useSelector((state) => state);

 //reading all records in a database
 //const handleFetch = () => { dispatch({ type: "FETCH_USER" }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formListUser.current.value)
    dispatch({ type: "FETCH_RESOURCE", data:formListUser.current.value });

  }

    return (
        <div className="App">

              <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <Table data={data.data} columns={data.columns}></Table>
                        <br />
                    </Grid>

                <form onSubmit={handleSubmit}>

                    <Grid item>
                        <TextField
                            id="number-input"
                            name="number"
                            inputRef={formListUser}
                            label="Enter record number to check resource"
                            type="number"

                        />
                    </Grid>

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
                            <Button type="submit">Post Single Resource</Button>
                        </ButtonGroup>

                            <br />
                            {JSON.stringify(data)}

                        </Box>
                    </Grid>

                    </form>
                </Grid>     

         

        </div>
    )

}