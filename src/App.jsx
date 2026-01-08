import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Componets/Homepage/Homepage.jsx";
import Navbaar from "./Componets/Navbaar/Navbaar.jsx";
import Form from "./Componets/ContactForm/Form.jsx";
// import Home from "./pages/Home";
// import About from "./pages/About";


function App() {
  return (
    <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
