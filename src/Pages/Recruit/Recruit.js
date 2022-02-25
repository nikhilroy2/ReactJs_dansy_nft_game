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
      <div className="py-3 py-md-4">
        {!IsAuthenticate && (
          <h3 className="font_size_60 lg_responsive sm_responsive text-center text-white">
            0 / 30 000 MINTED
          </h3>
        )}
        {IsAuthenticate ? (
          <h3 className="font_size_56 lg_responsive sm_responsive text-center text-white">
            14551 / 30000 MINTED
          </h3>
        ) : (
          <h3 className="font_size_56 lg_responsive sm_responsive text-center text-white">
            CONNECT YOUR WALLET FIRST
          </h3>
        )}
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
