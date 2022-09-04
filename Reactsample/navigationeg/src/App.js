import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Address from "./Address";
import Email from "./Email";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/contact" element={<Contact />}>
            <Route path="email" element={<Email />} />
            <Route path="address" element={<Address />} />
          </Route>

          <Route path="/about" element={<About />} />
        </Routes>

        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

      </header>
      
    </div>
  );
}

export default App;
