import { Routes, Route } from "react-router-dom";

// import Cursor from "./components/Cursor";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-card">
        {/* <Cursor /> */}
        <div className="app-body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
