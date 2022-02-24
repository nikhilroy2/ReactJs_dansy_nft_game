import React, { useState } from "react";
import "./Stake.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";

function Stake(props) {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div id="Stake">
      <Navigation2 navigateName="Stake" navigateLink="/stake"></Navigation2>
      <section id="StakeFrame">
        <ul className="list-unstyled d-flex stake_tab_wrapper align-items-center">
          <li className="list_space">
            <button
              onClick={() => setTabIndex(1)}
              className={`text-uppercase font_size_55 tab_btn ${
                tabIndex === 1 && "active_tab"
              }`}
            >
              Staked
              <svg
                width={23}
                height={12}
                viewBox="0 0 23 12"
                fill="rgba(255, 255, 255, 0.59)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5577 0C22.8526 1.6 23 3.6 23 6C23 8.3 22.8526 10.3 22.5577 12H0.442307C0.147435 10.3 0 8.3 0 6C0 3.6 0.147435 1.6 0.442307 0H22.5577Z"
                  fill="rgba(255, 255, 255, 0.59)"
                />
              </svg>
              <span className="count">30</span>{" "}
            </button>
          </li>

          <li>
            <button
              onClick={() => setTabIndex(2)}
              className={`text-uppercase font_size_55 tab_btn ${
                tabIndex === 2 && "active_tab"
              }`}
            >
              Unstaked
              <svg
                width={23}
                height={12}
                viewBox="0 0 23 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5577 0C22.8526 1.6 23 3.6 23 6C23 8.3 22.8526 10.3 22.5577 12H0.442307C0.147435 10.3 0 8.3 0 6C0 3.6 0.147435 1.6 0.442307 0H22.5577Z"
                  fill="rgba(255, 255, 255, 0.59)"
                />
              </svg>
              <span className="count">30</span>{" "}
            </button>
          </li>

          <li className="ms-auto">
            <button className="px-3 me-2 px-md-4 text-uppercase py-2 bg_dansy font_size_30 text-white">
              Claim YEN
            </button>
            <button className="px-3 px-md-4 text-uppercase py-2 bg_dansy font_size_30 text-white">
              Claim YEN & unstake
            </button>
          </li>
        </ul>
        <div className="tab_content_wrapper">
          {/* for first tab */}
          {tabIndex === 1 && (
            <div className="tab_inner_wrapper">
              <p className="font_size_50 text-uppercase text-white">
                You can only unstake if Ronin collected at least 2$ BRIBE
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 mb-md-5">
                  <div className="row">
                    <div className="col-8">
                      <h3 className="font_size_55 text-white">
                        Ronin
                        <svg
                          className="mx-4"
                          width={23}
                          height={12}
                          viewBox="0 0 23 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5577 0C22.8526 1.6 23 3.6 23 6C23 8.3 22.8526 10.3 22.5577 12H0.442307C0.147435 10.3 0 8.3 0 6C0 3.6 0.147435 1.6 0.442307 0H22.5577Z"
                            fill="white"
                          />
                        </svg>
                        <span className="count">0</span>
                      </h3>
                      <button className="bg_dansy btn_no_gold font_size_35 p-3 text-white">
                        no gold
                      </button>
                    </div>
                    <div className="col-4 text-end">
                      <button className="font_size_35 text-white">
                        Select all
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mb-3  mb-md-5">
                  <div className="row">
                    <div className="col-8">
                      <h3 className="font_size_55 text-white">
                      Samurai
                        <svg
                          className="mx-4"
                          width={23}
                          height={12}
                          viewBox="0 0 23 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5577 0C22.8526 1.6 23 3.6 23 6C23 8.3 22.8526 10.3 22.5577 12H0.442307C0.147435 10.3 0 8.3 0 6C0 3.6 0.147435 1.6 0.442307 0H22.5577Z"
                            fill="white"
                          />
                        </svg>
                        <span className="count">0</span>
                      </h3>
                      <button className="bg_dansy btn_no_gold font_size_35 p-3 text-white">
                        no gold
                      </button>
                    </div>
                    <div className="col-4 text-end">
                      <button className="font_size_35 text-white">
                        Select all
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* for second tab */}

          {tabIndex === 2 && (
            <div className="tab_inner_wrapper">
              <p className="font_size_50 text-uppercase text-white">
                You can only unstake if Ronin collected at least 2$ BRIBE
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 mb-md-5">
                  <div className="row">
                    <div className="col-8">
                      <h3 className="font_size_55 text-white">
                        Ronin
                        <svg
                          className="mx-4"
                          width={23}
                          height={12}
                          viewBox="0 0 23 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5577 0C22.8526 1.6 23 3.6 23 6C23 8.3 22.8526 10.3 22.5577 12H0.442307C0.147435 10.3 0 8.3 0 6C0 3.6 0.147435 1.6 0.442307 0H22.5577Z"
                            fill="white"
                          />
                        </svg>
                        <span className="count">0</span>
                      </h3>
                      <button className="bg_dansy btn_no_gold font_size_35 p-3 text-white">
                        no gold
                      </button>
                    </div>
                    <div className="col-4 text-end">
                      <button className="font_size_35 text-white">
                        Select all
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Stake;
