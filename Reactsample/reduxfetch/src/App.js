import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //use dispatch is used to send request
  const dispatch = useDispatch();

  //useSelector is used to get the required data from state
  const data = useSelector((state) => state);

  //Action is triggered by using dispatch
  //Action will contsin actionType + any data
  const handleclick = () => dispatch({ type: "fetchAll" });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleclick}> fetch</button>
        <br />
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
