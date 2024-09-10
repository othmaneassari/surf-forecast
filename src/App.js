import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Topbar" element={<Topbar />} />
      </Routes>
    </Router>
  );
}

export default App;
