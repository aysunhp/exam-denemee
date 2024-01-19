import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className="hero hero2">
            <div className="containerr">
              <h1>Tasty & Delicios Food</h1>
              <button>Book a table</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero hero1">
            <div className="containerr">
              <h1>Tasty & Delicios Food</h1>
              <button>Book a table</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero hero1">
            <div className="containerr">
              <h1>Tasty & Delicios Food</h1>
              <button>Book a table</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
