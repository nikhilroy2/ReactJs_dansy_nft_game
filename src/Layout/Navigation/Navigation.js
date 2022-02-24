import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation(props) {
  const nav_list_object = [
    {
      id: 1,
      link: "",
      name: "Dashboard",
    },
    {
      id: 2,
      link: "/recruit",
      name: "Recruit",
    },
    {
      id: 3,
      link: "#",
      name: "Stake",
    },
    {
      id: 4,
      link: "#",
      name: "Bank",
    },
    {
      id: 5,
      link: "#",
      name: "Merchant",
    },
    {
      id: 6,
      link: "#",
      name: "Marketplace",
    },
  ];
  return (
    <div id="Navigation">
      <nav className="navigation_wrapper">
        <ul className="list-unstyled d-flex align-items-center nav_list">
          {nav_list_object.map((v) => {
            return (
              <li key={v.id}>
                <Link
                  to={v.link}
                  className="bg_dansy font_size_35 text-white text-uppercase"
                >
                  {v.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

export function Navigation2(props) {
  return (
    <div id="Navigation2">
      <section>
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-4 text-start">
            <button onClick={() => window.history.back()} className="arrow_btn">
              <img src={require("../../Static/img/arow.png")} alt="img" />
            </button>
          </div>
          <div className="col-4 text-center">
            <button className="recruit_btn text-white bg_dansy font_size_57 text-uppercase">
              Recruit{" "}
            </button>
          </div>

          <div className="col-4 text-end">
            <button className="bg_dansy connect_wallet_btn text-white font_size_30 text-uppercase">
              Connect Wallet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
