import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Componets/Homepage/Homepage.jsx";
import Navbaar from "./Componets/Navbaar/Navbaar.jsx";
// import Home from "./pages/Home";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbaar />

      <Routes>
        {/* Example routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
