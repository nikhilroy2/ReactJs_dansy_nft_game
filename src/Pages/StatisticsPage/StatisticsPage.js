import React, { useState } from "react";
import { Navigation2 } from "../../Layout/Navigation/Navigation";
import "./StatisticsPage.css";

function StatisticsPage(props) {
  return (
    <div id="StatisticsPage">
      <div className="container_section">
        <Navigation2 navigateName="DASHBOARD"></Navigation2>
        <StatisticsPageFrame></StatisticsPageFrame>
      </div>
    </div>
  );
}

export default StatisticsPage;

function StatisticsPageFrame() {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <section id="StatisticsPageFrame">
      <div className="StatisticsPageFrameWrapper">
        <div className="row">
          <div className="col-6 text-center">
            <h2
              onClick={() => setTabIndex(1)}
              className={`tab_title font_size_61 ${
                tabIndex === 1 && "active_tab"
              }`}
            >
              Statistics
            </h2>
          </div>
          <div className="col-6 text-center">
            <h2
              onClick={() => setTabIndex(2)}
              className={`tab_title font_size_61 ${
                tabIndex === 2 && "active_tab"
              }`}
            >
              Leaderboard
            </h2>
          </div>
        </div>

        <div className="tabContentWrapper">
          {tabIndex === 1 && (
            <div id="staticticsContent">
              <div className="row">
                <div className="col-6">
                  <div className="col_wrapper">
                    <ul className="list-unstyled">
                      <li className="text-center">
                        <h2 className="font_size_65">RONIN MINTED</h2>
                        <h3 className="font_size_55 text_500">30,0000</h3>
                      </li>

                      <li className="text-center">
                        <h2 className="font_size_65">RONIN STAKED</h2>
                        <h3 className="font_size_55 text_500">23,0000</h3>
                      </li>

                      <li className="text-center">
                        <h2 className="font_size_65">RONIN STOLEN</h2>
                        <h3 className="font_size_55 text_500">18,0000</h3>
                      </li>

                      <li className="text-center">
                        <h2 className="font_size_65">TOTAL YEN CLAIMED</h2>
                        <h3 className="font_size_55 text_500">2,30,0000</h3>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col_wrapper">
                    <ul className="list-unstyled">
                      <li className="text-center">
                        <h2 className="font_size_65">RONIN MINTED</h2>
                        <h3 className="font_size_55 text_500">30,0000</h3>
                      </li>

                      <li className="text-center">
                        <h2 className="font_size_65">SAMURAI MINTED</h2>
                        <h3 className="font_size_55 text_500">14,0000</h3>
                      </li>

                      <li className="text-center">
                        <h2 className="font_size_65">SAMURAI STAKED</h2>
                        <h3 className="font_size_55 text_500">7,0000</h3>
                      </li>

                      <li className="text-center">
                        <h2 className="font_size_65">SAMURAI STOLEN</h2>
                        <h3 className="font_size_55 text_500">5,0000</h3>
                      </li>

                      <li className="text-center">
                        <h2 className="font_size_65">TOTAL YEN BURNED</h2>
                        <h3 className="font_size_55 text_500">1,14,0000</h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tabIndex === 2 && (
            <div id="leaderboardContent">
              <div className="row justify-content-center">
                <div className="col-11 col-xl-10">
                  <div className="col_wrapper">
                    <ol className="font_size_55">
                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>23,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>1,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>11,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>85,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>24,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>4,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>7,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>15,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>23,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>47,315,394 yen</span>
                        </h3>
                      </li>

                      <li className="text-center">
                        <h3 className="font_size_55 d-flex align-items-center justify-content-between">
                          <span>0xaoaf...4012</span>
                          <span>25,315,394 yen</span>
                        </h3>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
