import logo from "./logo.svg";
import "./App.css";
// ...............Pages................

import Home from "./Pages/Home/Home";
import Recruit from "./Pages/Recruit/Recruit";
import Stake from "./Pages/Stake/Stake";
// ...............Pages................End
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/recruit" element={<Recruit></Recruit>}></Route>
          <Route path="/stake" element={<Stake></Stake>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
