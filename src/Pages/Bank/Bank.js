import React from "react";
import { Navigation2 } from "../../Layout/Navigation/Navigation";
import { IsAuthenticate } from "../../AuthManagement/Auth";
import "./Bank.css";
function Bank(props) {
  return (
    <div id="Bank">
      <div className="container_section">
        <Navigation2 navigateName="Bank"></Navigation2>
        <BankFrame></BankFrame>
      </div>
    </div>
  );
}

export default Bank;

function BankFrame() {
  const bank_card_object = [
    {
      id: 1,
      title: "Minecraft Mods",
      img_icon: require("../../Static/img/bank_card1.png"),
      minecraft_earn: "0.000000000",
      app: "250.14%",
      yourStake: "0.0000",
    },
    {
      id: 2,
      title: "Minecraft Mods",
      img_icon: require("../../Static/img/bank_card2.png"),
      minecraft_earn: "0.000000000",
      app: "250.14%",
      yourStake: "0.0000",
    },
    {
      id: 3,
      title: "Minecraft Mods",
      img_icon: require("../../Static/img/bank_card3.png"),
      minecraft_earn: "0.000000000",
      app: "250.14%",
      yourStake: "0.0000",
    },
    {
      id: 4,
      title: "Minecraft Mods",
      img_icon: require("../../Static/img/bank_card3.png"),
      minecraft_earn: "0.000000000",
      app: "250.14%",
      yourStake: "0.0000",
    },
    {
      id: 5,
      title: "Minecraft Mods",
      img_icon: require("../../Static/img/bank_card4.png"),
      minecraft_earn: "0.000000000",
      app: "250.14%",
      yourStake: "0.0000",
    },
    {
      id: 6,
      title: "Minecraft Mods",
      img_icon: require("../../Static/img/bank_card5.png"),
      minecraft_earn: "0.000000000",
      app: "250.14%",
      yourStake: "0.0000",
    },
  ];
  return (
    <section id="BankFrame">
      <div className="BankFrameWrapper">
        <div className="row gy-4">
          {bank_card_object.map((v) => {
            return (
              <div key={v.id} className="col-12 col-sm-6 col-lg-4">
                <div className="col_wrapper">
                  <div className="card_wrapper">
                    <div className="card_header">
                      {IsAuthenticate ? (
                        <h3 className="font_size_40 sm_responsive text-start text-capitalize">
                          {v.title}
                        </h3>
                      ) : (
                        <h3 className="font_size_40 sm_responsive">{v.title}</h3>
                      )}
                    </div>
                    <div className="card_body">
                      {IsAuthenticate ? (
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          <img
                            className="img_icon"
                            src={v.img_icon}
                            alt="img"
                          />

                          <button className="font_size_20  text-white px-2 px-md-3 harvest_frame">
                            harvest
                          </button>
                        </div>
                      ) : (
                        <img className="img_icon" src={v.img_icon} alt="img" />
                      )}

                      {IsAuthenticate ? (
                        <div className="text-start minecraft_control">
                          <h4 className="font_size_33 mb-0">
                            {v.minecraft_earn}
                          </h4>
                          <h5 className="font_size_20 ">Minecraft Earned</h5>
                          <div className="d-flex justify-content-between align-items-center">
                            <button className="bg_dansy me-2 wallet_btn text-white text-uppercase  font_size_20 ">
                              unstake bribe - wavax lp
                            </button>
                            <button className="font_size_55 plus_btn bg_dansy lg_responsive sm_responsive">+</button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <h4 className="font_size_33 mb-0">
                            {v.minecraft_earn}
                          </h4>
                          <h5 className="font_size_20 ">Minecraft Earned</h5>
                          <button className="bg_dansy wallet_btn text-white text-uppercase  font_size_20 ">
                            Unlock Wallet
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="card_footer mt-3">
                      <ul className="list-unstyled font_size_20 ">
                        <li className="mb-2">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <span>APR:</span>
                            <span>{v.app}</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <span>Your Stake:</span>
                            <span>{v.yourStake}</span>
                          </div>
                        </li>
                      </ul>
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
