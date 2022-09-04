//this is the controlled component way II
import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const captureFieldChange = (e) => {
    let fieldname = e.target.name;
    let obj = {};
    obj[fieldname] = e.target.value;

    setForm({
      ...form,
      ...obj,
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();

    //fetch("https://jsonplaceholder.typicode.com/posts", {
    fetch("http://localhost:3001/doctor", {
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
          <input type="text" name="title" onChange={captureFieldChange} />
        </label>

        <label>
          Enter Body:
          <input type="text" name="body" onChange={captureFieldChange} />
        </label>

        <label>
          Enter UserId:
          <input type="text" name="userId" onChange={captureFieldChange} />
        </label>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
