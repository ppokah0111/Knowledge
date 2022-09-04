import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import ListUsers from './component/ListUsers';
import SingleUser from './component/SingleUser';
import ListResources from './component/ListResources';
import SingleResource from './component/SingleResource';

function App() {

  return (
    <div className="App">
      <header className="App-header">

      <nav>
        <Link to="/">List Users</Link> <br/>
        <Link to="/ListUsers">List Users</Link> <br/>
        <Link to="/SingleUser">Single User</Link> <br/>
        <Link to="/ListResources">List Resources</Link> <br/>
        <Link to="/SingleResource">Single Resource</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="ListUsers" element={<ListUsers />} />
        <Route path="SingleUser" element={<SingleUser />} />
        <Route path="ListResources" element={<ListResources />} />
        <Route path="SingleResource" element={<SingleResource />} />
      </Routes>

      </header>
    </div>
  );
}

export default App;
