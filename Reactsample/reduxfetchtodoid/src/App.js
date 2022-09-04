
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {createRef} from "react"

function App() {
  const todoIdRef = createRef()

  //use dispatch is used to send request
  const dispatch = useDispatch();

  //useSelector is used to get the required data from state
  const data = useSelector((state) => state);

  //Action is triggered by using dispatch
  //Action will contsin actionType + any data
  
  //const handleclick = () => dispatch({ type: "fetchById"  });
  const handleclick = () => dispatch({ type: "fetchById", todoId:todoIdRef.current.value  });

  return (
    <div className="App">
      <header className="App-header">
        <label> Enter ID to fetch </label> <br />
        
        <input type="number" name="fetchId" ref={todoIdRef}/>
        <button onClick={handleclick}> fetch using Id</button>
        
        <br />
        {JSON.stringify(data)}

      </header>
    </div>
  );
}

export default App;
