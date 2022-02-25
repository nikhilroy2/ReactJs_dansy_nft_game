import React from "react";
import { Navigation2 } from "../../Layout/Navigation/Navigation";
import "./MyNft.css";
import { Link } from "react-router-dom";
function MyNft(props) {
  return (
    <div id="MyNft">
      <Navigation2 navigateName="my nft"></Navigation2>
      <MyNftFrame></MyNftFrame>
    </div>
  );
}

export default MyNft;

function MyNftFrame() {
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
  return (
    <section id="MyNftFrame">
      <div className="MyNftFrameWrapper">
        <h2 className="font_size_61 text-white">Collections</h2>
        <div className="row gy-4">
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
