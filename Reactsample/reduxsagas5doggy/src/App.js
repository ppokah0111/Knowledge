import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const handleClick = () => {
    dispatch({ type: "FETCH" });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.message || logo} className="App-logo" alt="logo" />
        <br />
        <button onClick={handleClick}>FETCH</button>
      </header>
    </div>
  );
}

export default App;
