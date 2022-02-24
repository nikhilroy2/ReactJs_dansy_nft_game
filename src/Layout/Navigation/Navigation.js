import React from "react";
import "./Navigation.css";
function Navigation(props) {
  const nav_list_object = [
    {
      id: 1,
      link: "#",
      name: "Dashboard",
    },
    {
      id: 2,
      link: "#",
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
                <a
                  href={v.link}
                  className="bg_dansy font_size_35 text-white text-uppercase"
                >
                  {v.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
