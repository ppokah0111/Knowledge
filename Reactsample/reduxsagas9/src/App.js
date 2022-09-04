import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { createRef } from "react";

function App() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const emailRef_loginSuccessful = createRef();
  const passwordRef_loginSuccessful = createRef();

  const emailRef_loginUnSuccessful = createRef();
 
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

//reading all records in a database
  const handleFetch = () => {
    dispatch({ type: "FETCH_USER" });
  };

//reading a record in a database given an id
  const handleFetchList = () => {
    dispatch({ type: "FETCH_USER_LIST" });
  };



  const handleFetchRegisterSuccessfull = (e) => {
    e.preventDefault();
    dispatch({
      type: "FETCH_REGISTER_SUCCESSFUL",
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const handleLoginSuccessful = (e) => {
    e.preventDefault();
    dispatch({
      type: "FETCH_LOGIN_SUCCESSFUL",
      email: emailRef_loginSuccessful.current.value,
      password: passwordRef_loginSuccessful.current.value,
    });
  };

  const handleLoginUnSuccessful = (e) => {
    e.preventDefault();
    dispatch({
      type: "FETCH_LOGIN_UNSUCCESSFUL",
      email: emailRef_loginUnSuccessful.current.value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">

        <Table data={data.data} columns={data.columns}></Table>

        <br />
        <form onSubmit={handleFetchRegisterSuccessfull}>
          <label>
            Email Address
            <input ref={emailRef} type="email" />
          </label>
          <label>
            Password
            <input ref={passwordRef} type="password" />
          </label>
          <br />
          <button>Fetch Register Success</button>
        </form>

      <br/>

        <form onSubmit={handleLoginSuccessful}>
        <label>
            Email Address
            <input ref={emailRef_loginSuccessful} type="email" />
          </label>
          <label>
            Password
            <input ref={passwordRef_loginSuccessful} type="password" />
          </label>
          <br />
          <button>Login Success</button>
        </form>

    <br/>
        <form onSubmit={handleLoginUnSuccessful}>
        <label>
            Email Address
            <input ref={emailRef_loginUnSuccessful} type="email" />
          </label>
         
          <br />
          <button>Login [Un]Success</button>
        </form>

        <br />

        <button onClick={handleFetch}>Fetch User</button> 
        <button onClick={handleFetchList}>Fetch Resources</button>

        <br />
        {JSON.stringify(data)}
        
      </header>
    </div>
  );
}

export default App;
