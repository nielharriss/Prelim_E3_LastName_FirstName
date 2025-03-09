import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  const [user, setUser] = useState({
    name: "Niel Harriss J. Nunez",
    settings: { darkMode: false },
  });

  return (
    <Router>
      <div
        className={
          user.settings.darkMode
            ? "bg-dark text-white min-vh-100"
            : "bg-light text-dark min-vh-100"
        }
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">
              Home
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/settings">
                Settings
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route
              path="/settings"
              element={<Settings user={user} setUser={setUser} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
