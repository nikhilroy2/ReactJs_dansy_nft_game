import React from "react";
import "./BuyNft.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";

function BuyNft(props) {
  return (
    <div id="BuyNft">
      <Navigation2 navigateName="Marketplace"></Navigation2>
      <BuyNftFrame></BuyNftFrame>
    </div>
  );
}

export default BuyNft;

function BuyNftFrame() {
  return (
    <section id="BuyNftFrame">
      <div className="BuyNftFrameWrapper">
        <SamuraiFunc></SamuraiFunc>
        <PropertiesFunc></PropertiesFunc>
        <OffersFunc></OffersFunc>
      </div>
    </section>
  );
}

const SamuraiFunc = () => {
  const samuraiObject = {
    name: "Samurai #1125",
    img: require("../../Static/img/marketplace_img.png"),
    subName: "mined 1 month ago , on fri jan 07 2022",
    ownedBy: "CHINO",
    userAvatar: require("../../Static/img/avatar.png"),
    offerList: [
      {
        id: 1,
        name: "Highest offer",
        count: 30,
      },
      {
        id: 2,
        name: "Last sold for",
        count: 20,
      },
      {
        id: 3,
        name: "Last sold for",
        count: 20,
      },
    ],
  };
  return (
    <div className="d-flex flex-wrap align-items-center buy_nft_inner ">
      <div className="img_box mb-4">
        <img src={samuraiObject.img} alt="img" />
      </div>
      <div className="content_box mb-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h2 className="font_size_49 content_title">{samuraiObject.name}</h2>
          <button>
            <svg
              width={8}
              height={30}
              viewBox="0 0 8 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={4} cy={4} r={4} fill="white" />
              <circle cx={4} cy="14.6665" r={4} fill="white" />
              <circle cx={4} cy="25.3335" r={4} fill="white" />
            </svg>
          </button>
        </div>
        <h4 className="font_size_26 content_subtitle">
          {samuraiObject.subName}
        </h4>

        <ul className="list-unstyled">
          <li className="font_size_26">
            <img
              className="avatar_img"
              src={samuraiObject.userAvatar}
              alt="avatar"
            />
            <span className="text_white_71">Owned by</span>{" "}
            <span className="text_red">{samuraiObject.ownedBy}</span>
          </li>
        </ul>

        <ul className="list-unstyled">
          {samuraiObject.offerList.map((v) => {
            return (
              <li key={v.id} className="font_size_26 text_white_71 mb-0">
                {v.name}
                <span className="coin_count text_white_71 ms-4 d-inline-flax align-items-center">
                  {v.count}
                  <img
                    className="ms-2"
                    src={require("../../Static/img/gold_coin.png")}
                    alt="img"
                  />
                </span>
              </li>
            );
          })}
        </ul>

        <div className="button_wrapper pt-3">
          <button className="bg_dansy font_size_34 px-4 me-3">
            list for sale
          </button>
          <button className="bg_dansy font_size_34 px-4">cancel listing</button>
        </div>
      </div>
    </div>
  );
};

const PropertiesFunc = () => {
  return (
    <div id="PropertiesFunc">
      <h2 className="font_size_49">Properties</h2>
      <div className="btn_wrapper">
        <button className="font_size_20">
          <span className="d-block text-center">TYPE</span>
          <span className="d-block text-center">SAMURAI</span>
        </button>
        <button className="font_size_20">
          <span className="d-block text-center">GENERATION</span>
          <span className="d-block text-center">1</span>
        </button>
        <button className="font_size_20">
          <span className="d-block text-center">ALPHA SCORE</span>
          <span className="d-block text-center">5</span>
        </button>
      </div>
    </div>
  );
};

const OffersFunc = () => {
  const offersList = [
    {
      id: 1,
      from: "CHINO",
      price: "1.4",
      date: "1.4 2/14/2022 10:11 AM",
      status: "Active",
      action: "ACCEPT",
    },
    {
      id: 2,
      from: "CHINO",
      price: "1.4",
      date: "1.4 2/14/2022 10:11 AM",
      status: "Active",
      action: "ACCEPT",
    },
    {
        id: 3,
        from: "CHINO",
        price: "1.4",
        date: "1.4 2/14/2022 10:11 AM",
        status: "Active",
        action: "ACCEPT",
      },
  ];
  return (
    <div id="OffersFunc" className="mt-4">
      <h2 className="font_size_49">Offers</h2>
      <div className="table-responsive offers_table">
        <table className="table">
          <thead className="border-0">
            <tr className="border-0">
              <th className="font_size_24 border-0">FROM</th>
              <th className="font_size_24 border-0">PRICE</th>
              <th className="font_size_24 border-0">DATE</th>
              <th className="font_size_24 border-0">STATUS</th>
              <th className="font_size_24 border-0">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {offersList.map((v) => {
              return (
                <tr key={v.id}>
                  <td className="pb-0 pt-2 text_white_73 border-0 font_size_20">
                    {" "}
                    <img
                      src={require("../../Static/img/avatar.png")}
                      alt="user"
                      className="user_avatar"
                    />{" "}
                    Owned by {v.from}
                  </td>

                  <td className="pb-0 pt-2 text_white_73 border-0 font_size_20">
                    {v.price}
                    <img
                      style={{ height: "11px" }}
                      src={require("../../Static/img/gold_coin.png")}
                      alt="img"
                      className="mx-1"
                    />
                  </td>

                  <td className="pb-0 pt-2 text_white_73 border-0 font_size_20">
                    {v.date}
                  </td>

                  <td className="pb-0 pt-2 text_white_73 border-0 font_size_20">
                    {v.status}
                  </td>
                  <td className="pb-0 pt-2 text_white_73 border-0 font_size_20">
                    <button className="font_s_size_20 accept_btn text_white_73">
                      {v.action}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
