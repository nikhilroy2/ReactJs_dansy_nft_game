import React from "react";
import "./Merchant.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";

function Merchant(props) {
  return (
    <div id="Merchant">
      <Navigation2 navigateName="Merchant"></Navigation2>
      <MerchantFrame></MerchantFrame>
    </div>
  );
}

export default Merchant;

function MerchantFrame() {
  const merchant_card_object = [
    {
      id: 1,
      img: require("../../Static/img/minecraft1.png"),
      title: "NAME OF CHARACTER",
      subtitle: "OUFIT",
      coin_price: "1,200 YEN",
    },
    {
      id: 2,
      img: require("../../Static/img/minecraft2.png"),
      title: "NAME OF CHARACTER",
      subtitle: "OUFIT",
      coin_price: "1,200 YEN",
    },
    {
      id: 3,
      img: require("../../Static/img/minecraft3.png"),
      title: "NAME OF CHARACTER",
      subtitle: "OUFIT",
      coin_price: "1,200 YEN",
    },
    {
      id: 4,
      img: require("../../Static/img/minecraft4.png"),
      title: "NAME OF CHARACTER",
      subtitle: "OUFIT",
      coin_price: "1,200 YEN",
    },
    {
      id: 5,
      img: require("../../Static/img/minecraft5.png"),
      title: "NAME OF CHARACTER",
      subtitle: "OUFIT",
      coin_price: "1,200 YEN",
    },
    {
      id: 6,
      img: require("../../Static/img/minecraft6.png"),
      title: "NAME OF CHARACTER",
      subtitle: "OUFIT",
      coin_price: "1,200 YEN",
    },
  ];
  return (
    <section id="MerchantFrame">
      <div className="MerchantFrameWrapper">
        <div className="row gy-4">
          {merchant_card_object.map((v) => {
            return (
              <div key={v.id} className="col-6 col-lg-4">
                <div className="col_wrapper">
                  <div className="card_wrapper">
                    <div className="card_header">
                      <img className="img_icon" src={v.img} alt="img" />
                    </div>
                    <div className="card_body">
                      <div className="card_body_content">
                        <h5 className="text-white font_size_24 mb-0">
                          NAME OF CHARACTER
                        </h5>
                        <h6 className="text-white font_size_16">
                          {v.subtitle}
                        </h6>
                        <div className="card_footer_content d-flex align-items-center justify-content-between">
                          <span className="font_size_24">
                            {" "}
                            <img
                              className="align-middle"
                              src={require("../../Static/img/gold_coin.png")}
                              alt=""
                            />{" "}
                            {v.coin_price}
                          </span>
                          <button className="font_size_24 text-white">
                            BUY NOW
                          </button>
                        </div>
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
