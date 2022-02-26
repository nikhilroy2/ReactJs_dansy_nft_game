import "./Stake.css";
import { Navigation2 } from "../../Layout/Navigation/Navigation";
import "swiper/css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IsAuthenticate } from "../../AuthManagement/Auth";

function Stake(props) {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div id="Stake">
      <div className="container_section">
        <Navigation2 navigateName="Stake" navigateLink="/stake"></Navigation2>
        <section id="StakeFrame">
          <ul className="list-unstyled d-flex flex-wrap stake_tab_wrapper align-items-center">
            <li className="list_space">
              <button
                onClick={() => setTabIndex(1)}
                className={`text-uppercase font_size_55 d-flex align-items-center lg_responsive sm_responsive tab_btn ${
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
                className={`text-uppercase d-flex align-items-center font_size_55 lg_responsive sm_responsive lg_responsive sm_responsive tab_btn ${
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
              <button className="px-2 px-md-3 me-1 me-md-2 px-md-4 text-uppercase py-2 bg_dansy font_size_30 sm_responsive lg_responsive text-white">
                Claim YEN
              </button>
              <button className="px-2 px-md-3 text-uppercase py-2 bg_dansy font_size_30 sm_responsive lg_responsive text-white">
                Claim YEN & unstake
              </button>
            </li>
          </ul>
          <div className="tab_content_wrapper">
            {/* for first tab */}
            {tabIndex === 1 && (
              <div className="tab_inner_wrapper">
                <p className="font_size_50 text-uppercase text-white sm_responsive sm_sm_responsive text-center text-md-start">
                  You can only unstake if Ronin collected at least 2$ BRIBE
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 mb-md-5">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <h3 className="font_size_55 lg_responsive sm_responsive text-white">
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

                          <button className="font_size_35 lg_responsive text-white">
                            Select all
                          </button>
                        </div>
                        {IsAuthenticate ? (
                          <div className="slider_wrapper">
                            <Slider></Slider>
                          </div>
                        ) : (
                          <button className="bg_dansy btn_no_gold font_size_35 lg_responsive p-3 text-white">
                            no gold
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="mb-3  mb-md-5">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <h3 className="font_size_55 lg_responsive sm_responsive lg_responsive sm_responsive text-white">
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
                          <button className="font_size_35 lg_responsive text-white">
                            Select all
                          </button>
                        </div>
                        <div className="slider_wrapper">
                          <button className="bg_dansy btn_no_gold font_size_35 lg_responsive p-3 text-white">
                            no gold
                          </button>
                        </div>
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
                        <h3 className="font_size_55 lg_responsive sm_responsive text-white">
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
                        <button className="bg_dansy btn_no_gold font_size_35 lg_responsive p-3 text-white">
                          no gold
                        </button>
                      </div>
                      <div className="col-4 text-end">
                        <button className="font_size_35 lg_responsive text-white">
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
    </div>
  );
}

export default Stake;

function Slider() {
  return (
    <Swiper
      pagination={{
        clickable: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <div className="stake_swiper_item btn_no_gold position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font_size_30  sm_responsive">gen o</span>
            <span className="font_size_30  sm_responsive">lvl 1</span>
          </div>
          <span
            className="position-absolute font_size_30  sm_responsive"
            style={{ bottom: "15px" }}
          >
            #001
          </span>
        </div>
        <button className="btn_black_frame d-inline-block px-3 py-1 mt-1 py-md-0 font_size_27 sm_responsive">
          0.1336548056
        </button>
      </SwiperSlide>
    </Swiper>
  );
}
