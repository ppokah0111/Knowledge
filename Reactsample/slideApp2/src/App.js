import "./App.css";
import { useState } from "react";
import Slide from "./Slide";

function App() {
  const [slideData, setSlideData] = useState([
    { title: "Title 1", body: "Body 1" },
    { title: "Title 2", body: "Body 2" },
    { title: "Title 3", body: "Body 3" },
  ]);
  return (
    <div className="App">
      Slide show
      <p>{JSON.stringify(slideData)}</p>
      <Slide slideData={slideData} />{" "}
    </div>
  );
}

export default App;
