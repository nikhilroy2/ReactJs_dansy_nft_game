import logo from "./logo.svg";
import "./App.css";
// ...............Pages................

import Home from "./Pages/Home/Home";
import Recruit from "./Pages/Recruit/Recruit";
import Stake from "./Pages/Stake/Stake";
import Bank from "./Pages/Bank/Bank";
import Merchant from "./Pages/Merchant/Merchant";
import Marketplace from "./Pages/Marketplace/Marketplace";
import BuyNft from "./Pages/BuyNft/BuyNft";
import MyNft from "./Pages/MyNft/MyNft";
import StatisticsPage from "./Pages/StatisticsPage/StatisticsPage";
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
          <Route path="/bank" element={<Bank></Bank>}></Route>
          <Route path="/merchant" element={<Merchant></Merchant>}></Route>
          <Route
            path="/marketplace"
            element={<Marketplace></Marketplace>}
          ></Route>
          <Route path="/buy_nft" element={<BuyNft></BuyNft>}></Route>
          <Route path="/my_nft" element={<MyNft></MyNft>}></Route>
          <Route path="/statistics_page" element={<StatisticsPage></StatisticsPage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
