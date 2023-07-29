import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";

function App() {
  return (
    <div className="app w-full">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}

export default App;