//this is the Uncontrolled component way III
//controlled ways have better performance than the uncontrolled way

import "./App.css";
import { useState, createRef } from "react";

function App() {
  const [response, setResponse] = useState({});

  const titlerefs = createRef();
  const bodyrefs = createRef();
  const userIdrefs = createRef();

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",

      body: JSON.stringify({
        title: titlerefs.current.value,
        body: bodyrefs.current.value,
        userId: userIdrefs.current.value,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  return (
    <div className="App">
      {JSON.stringify(response)}

      <form onSubmit={handle_submit}>
        <label>
          Enter Title:
          <input type="text" ref={titlerefs} />
        </label>

        <label>
          Enter Body:
          <input type="text" ref={bodyrefs} />
        </label>

        <label>
          Enter UserId:
          <input type="text" ref={userIdrefs} />
        </label>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
