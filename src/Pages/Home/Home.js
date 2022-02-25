import React from "react";
import Navigation from "../../Layout/Navigation/Navigation";
import "./Home.css";
function Home(props) {
  const social_object = [
    {
      id: 1,
      img: require("../../Static/img/twitter.png"),
      link: "#",
    },
    {
      id: 2,
      img: require("../../Static/img/social_img2.png"),
      link: "#",
    },
    {
      id: 3,
      img: require("../../Static/img/social_img3.png"),
      link: "#",
    },
  ];
  return (
    <div id="Home">
      <div className="container_section">
        <Navigation></Navigation>
        <img
          className="dynasty_img"
          src={require("../../Static/img/dynasty_zen.png")}
          alt="img"
        />
        <div className="btn_wrapper text-center">
          <button className="bg_dansy font_size_50 sm_responsive text-white">BUY YEN</button>
        </div>
        <ul className="social_icon_list list-unstyled d-flex justify-content-center align-items-center">
          {social_object.map((v) => {
            return (
              <li key={v.id}>
                <a href={v.link}>
                  <img src={v.img} alt="img" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
