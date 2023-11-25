import "./App.css";
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
