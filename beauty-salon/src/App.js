import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./components/MainPage/index.js";

function App() {
  return (
    <div className="App">
      <Router>
        <MainPage />
      </Router>
    </div>
  );
}

export default App;
