import LoginPage from "./components/Registration/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/authenticate"
            element={
              <LoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
