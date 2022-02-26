import React, { useState } from "react";
import "./Marketplace.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";
import { Link } from "react-router-dom";
function Marketplace(props) {
  return (
    <div id="Marketplace">
      <div className="container_section">
        <Navigation2 navigateName="Marketplace"></Navigation2>
        <MarketPlaceFrame></MarketPlaceFrame>
      </div>
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
      link: "/buy_nft",
    },
    {
      id: 2,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
      link: "/buy_nft",
    },
    {
      id: 3,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
      link: "/buy_nft",
    },
    {
      id: 4,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
      link: "/buy_nft",
    },
    {
      id: 5,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
      link: "/buy_nft",
    },
    {
      id: 6,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
      link: "/buy_nft",
    },
    {
      id: 7,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
      link: "/buy_nft",
    },
    {
      id: 8,
      img: require("../../Static/img/marketplace_img.png"),
      coin_price1: 30,
      coin_price2: 125,
      link: "/buy_nft",
    },
  ];

  const [filter, setFilter] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  return (
    <section id="MarketPlaceFrame">
      <div className="MarketPlaceFrameWrapper">
        <div className="row align-items-center gy-3 my-3">
          <div className="col-lg-6 first_col">
            <ul className="list-unstyled card_control_list d-flex flex-wrap">
              <li className="font_size_20 mb-2 text-center">
                <h5 className="mb-0 font_size_20 lg_responsive">Floor price</h5>
                55{" "}
                <img
                  src={require("../../Static/img/gold_coin.png")}
                  alt="img"
                />
              </li>
              <li className="font_size_20 mb-2 text-center lg_responsive">
                <h5 className="mb-0 font_size_20">Floor price</h5>
                55{" "}
                <img
                  src={require("../../Static/img/gold_coin.png")}
                  alt="img"
                />
              </li>
              <li className="font_size_20 mb-2 text-center lg_responsive">
                <h5 className="mb-0 font_size_20">Floor price</h5>
                55{" "}
                <img
                  src={require("../../Static/img/gold_coin.png")}
                  alt="img"
                />
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-0">
            <div className="d-flex align-items-center position-relative">
              <div
                onClick={() => setPriceDropdown(!priceDropdown)}
                className="form_group flex-grow-1 form_price_select_group select_event position-relative"
              >
                <div className="form_group_input_wrapper  position-relative">
                  <select name="" className="font_size_24 lg_responsive" id="">
                    <option value="Price (Lowest to highest)">
                      Price (Lowest to highest)
                    </option>
                  </select>
                  <svg
                    width={18}
                    height={10}
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 1.5L9 8.5L16.5 1.5"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {priceDropdown && (
                  <div className="form_select_dropdown">
                    <div className="row">
                      <div className="col-12">
                        <div className="col_wrpaper_dropdown px-4 py-2">
                          <ul className="list-unstyled p-1 m-0">
                            <li className="font_size_24 lg_responsive">Recently Listed</li>
                            <li className="font_size_24 lg_responsive">Recently Minted</li>
                            <li className="font_size_24 lg_responsive">Recently Sold</li>
                            <li className="font_size_24 lg_responsive">
                              Price (Lowest to highest)
                            </li>
                            <li className="font_size_24 lg_responsive">
                              Price (Highest to lowest)
                            </li>
                            <li className="font_size_24 lg_responsive">Highest Last Sale</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="form_group form_filter_select_group">
                <div
                  className="form_group_input_wrapper select_event"
                  onClick={() => setFilter(!filter)}
                >
                  <select name="" className="font_size_24 lg_responsive" id="">
                    <option value="Filter">Filter</option>
                  </select>
                  <svg
                    width={18}
                    height={10}
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 1.5L9 8.5L16.5 1.5"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {filter && (
                  <div className="form_select_dropdown">
                    <div className="row g-0 g-md-2">
                      <div className="col-4">
                        <div className="col_wrapper">
                          <h4 className="font_size_24 text_red filter_responsive">Alpha Score</h4>
                          <ul className="list-unstyled">
                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="srore1" />{" "}
                              <label
                                htmlFor="srore1"
                                className="font_size_18 ms-2"
                              >
                                5 (2966)
                              </label>
                            </li>

                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="srore2" />{" "}
                              <label
                                htmlFor="srore2"
                                className="font_size_18 ms-2"
                              >
                                6 (1730)
                              </label>
                            </li>

                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="srore3" />{" "}
                              <label
                                htmlFor="srore3"
                                className="font_size_18 ms-2"
                              >
                                7 (2548)
                              </label>
                            </li>

                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="srore4" />{" "}
                              <label
                                htmlFor="srore4"
                                className="font_size_18 ms-2"
                              >
                                8 (36478)
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="col_wrapper">
                          <h4 className="font_size_24 text_red filter_responsive">Generation</h4>
                          <ul className="list-unstyled">
                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="num0" />{" "}
                              <label
                                htmlFor="num0"
                                className="font_size_18 ms-2"
                              >
                                0
                              </label>
                            </li>

                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="num1" />{" "}
                              <label
                                htmlFor="num1"
                                className="font_size_18 ms-2"
                              >
                                1
                              </label>
                            </li>

                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="num2" />{" "}
                              <label
                                htmlFor="num2"
                                className="font_size_18 ms-2"
                              >
                                2
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="col_wrapper">
                          <h4 className="font_size_24 text_red filter_responsive">Type</h4>
                          <ul className="list-unstyled">
                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="Samurai" />{" "}
                              <label
                                htmlFor="Samurai"
                                className="font_size_18 ms-2"
                              >
                                Samurai
                              </label>
                            </li>

                            <li className="d-flex align-items-center">
                              <input type="checkbox" name="" id="Ronin" />{" "}
                              <label
                                htmlFor="Ronin"
                                className="font_size_18 ms-2"
                              >
                                Ronin
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row g-2 g-md-4">
          {marketplace_card_object.map((v) => {
            return (
              <div key={v.id} className="col-6 col-lg-4 col-xl-3">
                <Link
                  to={{
                    pathname: v.link,
                    search: `?id=${v.id}`,
                  }}
                  className="d-block text-white"
                >
                  <div className="col_wrapper">
                    <div className="card_wrapper">
                      <div className="card_header text-center">
                        <img className="img_icon " src={v.img} alt="img" />
                      </div>
                      <div className="card_body mt-3">
                        <h5 className="font_size_20 text-black card_responsize">Samurai #1125</h5>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <span className="font_size_16 sm_responsive text-black">
                            <img
                              className="align-middle gold_icon"
                              src={require("../../Static/img/gold_coin.png")}
                              alt="img"
                            />
                            <b>{v.coin_price1}</b> <i>(Highest offer)</i>
                          </span>

                          <span className="font_size_22 lg_responsive text-black">
                            <img
                              className="align-middle gold_icon"
                              src={require("../../Static/img/gold_coin.png")}
                              alt="img"
                            />
                            {v.coin_price2}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
