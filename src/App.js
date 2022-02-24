import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Recruit from "./Pages/Recruit/Recruit";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/recruit" element={<Recruit></Recruit>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
