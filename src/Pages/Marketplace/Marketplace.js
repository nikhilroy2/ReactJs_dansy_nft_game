import React from "react";
import "./Marketplace.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";

function Marketplace(props) {
  return (
    <div id="Marketplace">
      <Navigation2 navigateName="Marketplace"></Navigation2>
      <MarketPlaceFrame></MarketPlaceFrame>
    </div>
  );
}

export default Marketplace;

function MarketPlaceFrame() {
  const marketplace_card_object = [
    {
      id: 1,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
    {
      id: 2,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
    {
      id: 3,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
    {
      id: 4,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
    {
      id: 5,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
    {
      id: 6,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
    {
      id: 7,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
    {
      id: 8,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
    },
  ];
  return (
    <section id="MarketPlaceFrame">
      <div className="MarketPlaceFrameWrapper">
        <div className="row align-items-center gy-3 my-3">
          <div className="col-6 first_col">
            <ul className="list-unstyled card_control_list d-flex flex-wrap">
              <li className="font_size_20 text-center">
                <h5 className="mb-0 font_size_20">Floor price</h5>
                55{" "}
                <img
                  src={require("../../Static/img/gold_coin.png")}
                  alt="img"
                />
              </li>
              <li className="font_size_20 text-center">
                <h5 className="mb-0 font_size_20">Floor price</h5>
                55{" "}
                <img
                  src={require("../../Static/img/gold_coin.png")}
                  alt="img"
                />
              </li>
              <li className="font_size_20 text-center">
                <h5 className="mb-0 font_size_20">Floor price</h5>
                55{" "}
                <img
                  src={require("../../Static/img/gold_coin.png")}
                  alt="img"
                />
              </li>
            </ul>
          </div>
          <div className="col-6 mt-0">
            <div className="d-flex align-items-center">
              <div className="form_group flex-grow-1">
                <select name="" className="font_size_20" id="">
                  <option value="Price (Lowest to highest)">
                    Price (Lowest to highest)
                  </option>
                </select>
              </div>

              <div className="form_group">
                <select name="" className="font_size_20" id="">
                  <option value="Price (Lowest to highest)">
                    Price (Lowest to highest)
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {marketplace_card_object.map((v) => {
            return (
              <div key={v.id} className="col-6 col-lg-4 col-xl-3">
                <div className="col_wrapper">
                  <div className="card_wrapper">
                    <div className="card_header text-center">
                      <img className="img_icon " src={v.img} alt="img" />
                    </div>
                    <div className="card_body mt-3">
                      <h5 className="font_size_20">Samurai #1125</h5>
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <span className="font_size_16">
                          <img
                            className="align-middle"
                            src={require("../../Static/img/gold_coin.png")}
                            alt="img"
                          />
                          <b>{v.coin_price1}</b> <i>(Highest offer)</i>
                        </span>

                        <span className="font_size_22">
                          <img
                            className="align-middle"
                            src={require("../../Static/img/gold_coin.png")}
                            alt="img"
                          />
                          {v.coin_price2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
