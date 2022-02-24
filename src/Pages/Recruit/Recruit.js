import React from "react";
import "./Recruit.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";
function Recruit(props) {
  return (
    <div id="Recruit">
      <Navigation2></Navigation2>
      <RecruitFrame></RecruitFrame>
    </div>
  );
}

export default Recruit;

function RecruitFrame() {
  return (
    <section id="RecruitFrame" className="">
      <p className="font_size_45 text-white text-uppercase px-5 py-4">
        A violent battle now pits the last human survivors against the{" "}
        <span className="text_danger">Ronin</span> who are trying to steal the
        $VIRUS samples in order to contaminate the entire human race. The{" "}
        <span className="text_29">Samurai</span> will do anything to survive and
        kill any Zombie who tries to oppose them and infiltrate the LAB !
      </p>

      <ul className="list-unstyled d-flex gen_list">
        <li className="flex-grow-1 text-center font_size_54 text-black">
          GEN-0
        </li>
        <li className="flex-grow-1 text-center font_size_54 text-black">
          GEN-1{" "}
        </li>
        <li className="flex-grow-1 text-center font_size_54 text-black">
          GEN-2
        </li>
      </ul>
      <div className="py-3 py-md-4">
        <h3 className="font_size_60 text-center text-white">
          0 / 30 000 MINTED
        </h3>
        <h3 className="font_size_56 text-center text-white">
          CONNECT YOUR WALLET FIRST
        </h3>
      </div>
      <div className="d-flex justify-content-center recruit_human_img_wrapper ">
          <img className="recruit_human_img" src={require('../../Static/img/3940438-middle-removebg-preview2.png')} alt="img" />
          <img src={require('../../Static/img/3940438-middle-removebg-preview.png')} alt="img" />
      </div>
    </section>
  );
}
