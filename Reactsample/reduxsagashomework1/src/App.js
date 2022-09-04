
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { createRef } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Grid from "@material-ui/core/Grid";

//reqres.in
function App() {

  //GET: List & single user(s)

  /* const firstnameRef = createRef();
  const lastnameRef = createRef();
  const phoneRef = createRef();
  const avatarRef = createRef(); */

  const userValues = {
    firstnameRef: "",
    lastnameRef: "",
    phoneRef: 0,
    avatarRef: "",
  }
  //const {fnameRef, lnameRef, phoneNumRef, imageUrlRef} = createRef([]);
  const formUser = createRef(userValues)

 /* const nameRef = createRef();
  const yearRef = createRef();
  const colorRef = createRef();
  const pantone_valueRef = createRef(); */

  const resourceValues = {
    nameRef: "",
    yearRef: "",
    colorRef: "",
    pantone_valueRef: "",
  }
  
  //GET: List & single <Resource(s)>
  const formResource = createRef(resourceValues)


   /* const namecreateRef = createRef();
  const jobcreateRef = createRef(); */
  const postcreateValues = {
     name: "",
     job:"",
  }
  //POST: Create
  const formpostcreate = createRef(postcreateValues)
  

  /* const nameupdateRef = createRef();
  const jobupdateRef = createRef(); */
  const putupdateValues = {
    name: "",
    job: "",
 }
 //PUT: Update
 const formputupdate = createRef(putupdateValues)

  /* const emailRef_RegisterSuccess = createRef();
  const passwordRef_RegisterSuccess = createRef(); */
  const postregistersuccess = {
    email: "",
    password: "",
  }
  //POST: Register successful
  const formregistersuccess = createRef(postregistersuccess)


  //POST: Register UnSuccesful/Failure
  //const emailRef_RegisterFailure = createRef();
  const formregisterfailure = createRef()


  /*const emailRef_loginSuccess = createRef();
  const passwordRef_loginSuccess = createRef(); */
  const postloginsuccess = {
    email: "",
    password: "",
  }
  //POST: Login Successful 
  const formloginsuccess = createRef(postloginsuccess)

  //POST: Login UnSuccesful/Failure
  const formloginfailure  = createRef();
  

  const dispatch = useDispatch();
  const data = useSelector((state) => state);


  //reading all records in a database
  const handleFetch = () => { dispatch({ type: "FETCH_USER" }); };

  //reading a record in a database given an id
  const handleFetchList = () => { dispatch({ type: "FETCH_USER_LIST" }); };

  //reading all resource records in a database
  const handleResourceFetch = () => { dispatch({ type: "FETCH_RESOURCE" }); };

  //reading a resource record in a database given an id
  const handleResourceFetchList = () => { dispatch({ type: "FETCH_RESOURCE_LIST" }); };


  //reqres.in - POST CREATE
  const handleSubmit_Create = (e) => {
    e.preventDefault();
    dispatch({
      type: "POST_CREATE",
      
      name: formpostcreate.name.current.value,
      job: formpostcreate.job.current.value,
    });
  };

  //reqres.in - PUT UPDATE
  const handleSubmit_Update = (e) => {
    e.preventDefault();
    dispatch({
      type: "PUT_UPDATE",
      name: formputupdate.name.current.value,
      job: formputupdate.job.current.value,
    });
  };

  //reqres.in - POST REGISTER SUCCESSFUL
  const handleSubmit_RegisterSuccess = (e) => {
    e.preventDefault();
    dispatch({
      type: "POST_REGISTER_SUCCESS",
      email: formregistersuccess.email.current.value,
      password: formregistersuccess.name.current.value,
    });
  };

  //reqres.in - POST REGISTER UNSUCCESSFUL
  const handleSubmit_RegisterFailure = (e) => {
    e.preventDefault();
    dispatch({
      type: "POST_REGISTER_FAILURE",
      email: formregisterfailure.current.value,
    });
  };

  //reqres.in - POST LOGIN SUCCESS
  const handleSubmit_LoginSuccess = (e) => {
    e.preventDefault();
    dispatch({
      type: "POST_LOGIN_SUCCESS",
      email: formloginsuccess.email.current.value,
      password: formloginsuccess.password.current.value,
    });
  };

  //reqres.in - POST LOGIN FAILURE
  const handleSubmit_LoginFailure = (e) => {
    e.preventDefault();
    dispatch({
      type: "POST_LOGIN_FAILURE",
      email: formloginfailure.email.current.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formUser);
    console.log(formResource);
    console.log(formpostcreate);
    console.log(formputupdate);
    console.log(formregistersuccess);
    console.log(formregisterfailure);
    console.log(formloginsuccess);
    console.log(formloginfailure);
  }
  return (
    <div className="App">
      <header className="App-header">
       
          <Table data={data.data} columns={data.columns}></Table>
          <br />

          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  id="name-input"
                  name="Create name"
                  ref={formpostcreate.name}
                  label="Create Name"
                  type="text"
                  value={formpostcreate.name}
                  onChange={handleSubmit_Create}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="job-input"
                  name="Create job"
                  ref={formpostcreate.job}
                  label="Create job"
                  type="text"
                  value={formpostcreate.job}
                  onChange={handleSubmit_Create}
                />
              </Grid>
            </Grid>

            <br />

            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  id="name-input"
                  name="Update name"
                  ref={formputupdate.name}
                  label="Update name"
                  type="text"
                  value={formputupdate.name}
                  onChange={handleSubmit_Update}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="job-input"
                  name="Update job"
                  ref={formputupdate.job}
                  label="Update job"
                  type="text"
                  value={formputupdate.job}
                  onChange={handleSubmit_Update}
                />
              </Grid>
            </Grid>

            <br />

            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  id="email-input"
                  name="email"
                  ref={formregistersuccess.email}
                  label="Enter Registration Email that succeeds"
                  type="email"
                  value={formregistersuccess.email}
                  onChange={handleSubmit_RegisterSuccess}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="password-input"
                  name="password"
                  ref={formregistersuccess.password}
                  label="Enter Registration Password that succeeds"
                  type="password"
                  value={formregistersuccess.password}
                  onChange={handleSubmit_RegisterSuccess}
                />
              </Grid>
            </Grid>

            <br />

            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  id="email-input"
                  name="email"
                  ref={formregisterfailure}
                  label="Enter Registration Email that fails"
                  type="email"
                  value={formregisterfailure}
                  onChange={handleSubmit_RegisterFailure}
                />
              </Grid>
            </Grid>

            <br />

            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  id="email-input"
                  name="email"
                  ref={formloginsuccess.email}
                  label="Enter Login Email that succeeds"
                  type="email"
                  value={formloginsuccess.email}
                  onChange={handleSubmit_LoginSuccess}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="password-input"
                  name="password"
                  ref={formloginsuccess.password}
                  label="Enter Login Password that succeeds"
                  type="password"
                  value={formloginsuccess.password}
                  onChange={handleSubmit_LoginSuccess}
                />
              </Grid>
            </Grid>

            <br />

            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  id="email-input"
                  name="email"
                  ref={formloginfailure}
                  label="Enter Login Email that fails"
                  type="email"
                  value={formloginfailure}
                  onChange={handleSubmit_LoginFailure}
                />
              </Grid>
            </Grid>

            <br />


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

                  <Button onClick={handleFetch}>Fetch User</Button> 
                  <Button onClick={handleFetchList}>Fetch User List</Button>

                  <Button onClick={handleResourceFetch}>Fetch Resources</Button> 
                  <Button onClick={handleResourceFetchList}>Fetch Resources List</Button>
        
              </ButtonGroup>

                  <br />
                  {JSON.stringify(data)}

              </Box>
      
          </form>

    
      </header>
    </div>
  );
}

export default App;
