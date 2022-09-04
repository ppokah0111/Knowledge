import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //use dispatch is used to send request
  const dispatch = useDispatch();
  //useSelector is used to get the required data from state
  const data = useSelector((state) => state.counter);

  //Action is triggered by using dispatch - Action will contsin actionType + any data
  const handleIncrement = () => dispatch({ type: "inc" });

  return (
    <div className="App">
      <header className="App-header">
        Counter :{JSON.stringify(data)}
        <br />
        <button onClick={handleIncrement}>Increment</button>
      </header>
    </div>
  );
}

export default App;
