import LoginPage from "./components/Registration/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/authenticate" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
