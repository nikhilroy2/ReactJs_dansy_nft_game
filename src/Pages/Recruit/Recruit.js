import React, { useState } from "react";
import "./Recruit.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";
import { IsAuthenticate } from "../../AuthManagement/Auth";
function Recruit(props) {
  return (
    <div id="Recruit">
      <div className="container_section">
        <Navigation2 navigateName="Recruit"></Navigation2>
        <RecruitFrame></RecruitFrame>
      </div>
    </div>
  );
}

export default Recruit;

function RecruitFrame() {
  const [tabIndex, setTabIndex] = useState(1);
  const [yenToggle, setYenToggle] = useState(1);
  return (
    <section id="RecruitFrame" className="">
      <p className="font_size_45 lg_responsive sm_responsive text-white text-uppercase px-3 px-md-5 text-center py-4">
        A violent battle now pits the last human survivors against the{" "}
        <span className="text_danger">Ronin</span> who are trying to steal the
        $VIRUS samples in order to contaminate the entire human race. The{" "}
        <span className="text_29">Samurai</span> will do anything to survive and
        kill any Zombie who tries to oppose them and infiltrate the LAB !
      </p>

      {IsAuthenticate ? (
        <ul className="list-unstyled d-flex gen_list gen_list_auth">
          <li
            onClick={() => setTabIndex(0)}
            className={`flex-grow-1 text-center font_size_54 sm_responsive lg_responsive text-black ${
              tabIndex === 0 && "activeTab"
            }`}
          >
            GEN-0
          </li>
          <li
            onClick={() => setTabIndex(1)}
            className={`flex-grow-1 text-center font_size_54 sm_responsive lg_responsive text-black ${
              tabIndex === 1 && "activeTab"
            }`}
          >
            GEN-1{" "}
          </li>
          <li
            onClick={() => setTabIndex(2)}
            className={`flex-grow-1 text-center font_size_54 sm_responsive lg_responsive text-black ${
              tabIndex === 2 && "activeTab"
            }`}
          >
            GEN-2
          </li>
        </ul>
      ) : (
        <ul className={`list-unstyled d-flex gen_list `}>
          <li className="flex-grow-1 text-center font_size_54 sm_responsive lg_responsive text-black">
            GEN-0
          </li>
          <li className="flex-grow-1 text-center font_size_54 sm_responsive lg_responsive text-black">
            GEN-1{" "}
          </li>
          <li className="flex-grow-1 text-center font_size_54 sm_responsive lg_responsive text-black">
            GEN-2
          </li>
        </ul>
      )}
      <div className="tabContent">
        <div className="py-3 py-md-4">
          {!IsAuthenticate && (
            <h3 className="font_size_60 lg_responsive sm_responsive text-center text-white">
              0 / 30 000 MINTED
            </h3>
          )}
          {IsAuthenticate ? (
            <h3 className="font_size_60 lg_responsive sm_responsive text-center text-white">
              14551 / 30000 MINTED
            </h3>
          ) : (
            <h3 className="font_size_60 lg_responsive sm_responsive text-center text-white">
              CONNECT YOUR WALLET FIRST
            </h3>
          )}

          {IsAuthenticate && (
            <div className="btn_control_wrapper">
              <button
                className="decrement_btn"
                onClick={() => setYenToggle(yenToggle - 1)}
              >
                <svg
                  width={84}
                  height={68}
                  viewBox="0 0 84 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x={2}
                    y="2.81934"
                    width={80}
                    height="63.1807"
                    rx={6}
                    fill="#FFCACA"
                    stroke="#D40000"
                    strokeWidth={4}
                  />
                  <path
                    d="M50.4844 34.4C50.6977 35.2533 50.8044 36.32 50.8044 37.6C50.8044 38.8267 50.6977 39.8933 50.4844 40.8H34.4844C34.271 39.8933 34.1644 38.8267 34.1644 37.6C34.1644 36.32 34.271 35.2533 34.4844 34.4H50.4844Z"
                    fill="black"
                  />
                </svg>
              </button>
              <div className="mint_result">mint {yenToggle} nft</div>
              <button
                onClick={() => setYenToggle(yenToggle + 1)}
                className="increment_btn"
              >
                <svg
                  width={84}
                  height={68}
                  viewBox="0 0 84 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x={2}
                    y="2.81934"
                    width={80}
                    height="63.1807"
                    rx={6}
                    fill="#FFCACA"
                    stroke="#D40000"
                    strokeWidth={4}
                  />
                  <path
                    d="M54.0044 37.6C54.0044 38.8267 53.8977 39.8933 53.6844 40.8H45.6844C45.8977 41.6533 46.0044 42.72 46.0044 44C46.0044 45.2267 45.8977 46.2933 45.6844 47.2C45.8977 48.0533 46.0044 49.12 46.0044 50.4C46.0044 51.6267 45.8977 52.6933 45.6844 53.6H39.2844C39.071 52.6933 38.9644 51.6267 38.9644 50.4C38.9644 49.12 39.071 48.0533 39.2844 47.2C39.071 46.2933 38.9644 45.2267 38.9644 44C38.9644 42.72 39.071 41.6533 39.2844 40.8H31.2844C31.071 39.8933 30.9644 38.8267 30.9644 37.6C30.9644 36.32 31.071 35.2533 31.2844 34.4H39.2844C39.071 33.4933 38.9644 32.4267 38.9644 31.2C38.9644 29.92 39.071 28.8533 39.2844 28C39.071 27.0933 38.9644 26.0267 38.9644 24.8C38.9644 23.52 39.071 22.4533 39.2844 21.6H45.6844C45.8977 22.4533 46.0044 23.52 46.0044 24.8C46.0044 26.0267 45.8977 27.0933 45.6844 28C45.8977 28.8533 46.0044 29.92 46.0044 31.2C46.0044 32.4267 45.8977 33.4933 45.6844 34.4H53.6844C53.8977 35.2533 54.0044 36.32 54.0044 37.6Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          )}

          {IsAuthenticate && (
            <h3 className="font_size_60 my-3 lg_responsive sm_responsive text-center text-white text-center">
              1 NFT = 20000 YEN
            </h3>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center recruit_human_img_wrapper ">
        <img
          className="recruit_human_img"
          src={require("../../Static/img/3940438-middle-removebg-preview2.png")}
          alt="img"
        />
        <img
          src={require("../../Static/img/3940438-middle-removebg-preview.png")}
          alt="img"
        />
      </div>
    </section>
  );
}
