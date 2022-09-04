import { useState, createRef } from "react";
import "./App.css";
import Background from "./Background";
import Child from "./Child";

function App() {

  const [color, setColor] = useState("blue");

  const colorRef = createRef();

  const handleClick = () => {
    setColor(colorRef.current.value);
  };

  return (

    <div className="App">

      <header className="App-header">

        <label>  Enter Color: <input ref={colorRef} />  </label>

        <button onClick={handleClick}> Click to Apply</button> <br />
        
        <Background.Provider value={color}> <Child />  </Background.Provider>

      </header>
    </div>
  );
}

export default App;
