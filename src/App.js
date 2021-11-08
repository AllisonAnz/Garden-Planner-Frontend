
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { AddNewPlant } from "./components/Pages/AddNewPlant";
import { Plants } from "./components/Pages/Plants";
import { Login } from "./components/Pages/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newplant" element={<AddNewPlant />}/>
            <Route path="/plants" element={<Plants />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;