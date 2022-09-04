import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Table from './Table'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const handleFetch = () => {
    dispatch({ type: "FETCH_USER" });
  };

  const handleFetchList = () => {
    dispatch({ type: "FETCH_USER_LIST" });
  };

  return (
    <div className="App">
      <header className="App-header">

      <Table data={data.data} columns={data.columns}></Table>
        <br />

        <ButtonGroup disableElevation variant="contained">
          <Button onClick={handleFetch} >Fetch User</Button>
          <Button onClick={handleFetchList}>Fetch Resources</Button>
        </ButtonGroup>

        <br />
        {JSON.stringify(data)}

      </header>
    </div>
  );
}

export default App;
