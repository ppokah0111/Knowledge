//this is the controlled component way
import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const captureTitleChange = (e) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const captureBodyChange = (e) => {
    setForm({
      ...form,
      body: e.target.value,
    });
  };

  const captureUserIdChange = (e) => {
    setForm({
      ...form,
      userId: e.target.value,
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(form),
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
          <input type="text" onChange={captureTitleChange} />
        </label>

        <label>
          Enter Body:
          <input type="text" onChange={captureBodyChange} />
        </label>

        <label>
          Enter UserId:
          <input type="text" onChange={captureUserIdChange} />
        </label>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
