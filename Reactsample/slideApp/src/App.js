import "./App.css";
import { useState } from "react";
import Slider from "./Slider";

function App() {
  const [data, setdata] = useState([
    { title: "title1", body: "body1" },
    { title: "title2", body: "body2" },
    { title: "title3", body: "body3" },
  ]);
  const [index, setindex] = useState(0);

  const handle_previous = () => {
    if (index > 0) {
      setindex(index - 1);
    }
  };

  const handle_next = () => {
    if (index < data.length - 1) {
      setindex(index + 1);
    }
  };

  const handle_restart = () => {
    setindex(0);
  };

  return (
    <div>
      <button onClick={handle_previous}>previous</button>
      <button onClick={handle_next}>next</button>
      <button onClick={handle_restart}>restart</button>

      <br />

      <Slider title={data[index].title} body={data[index].body}>  </Slider>
    </div>
  );
}

export default App;
