import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2> Input Form Example</h2>
          <div class="col">
            <EmployeeForm />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
