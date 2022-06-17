import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Details } from "./Pages/Details";
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
