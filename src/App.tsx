import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StringInput from "./components/StringInput";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import StringsPage from "./components/StringsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StringsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
