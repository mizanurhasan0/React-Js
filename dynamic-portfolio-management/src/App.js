import "./App.css";
import { Navbar } from "./Portfolio/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Portfolio/Pages/Home";
import { DashboardHome } from "./AdminPanel/DashboardHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
