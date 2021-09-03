import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../../slider.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { useHistory } from "react-router-dom";
import logo from "../../files/pics/logoPic.png";
import slider1 from "../../files/pics/slider1.png";
import sss from "../../files/pics/sss.jpg";
import styled from "styled-components";

export const SliderPic = styled.div`
  max-width: 100%;
  max-height: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
  }
`;

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const SliderDiv = (): JSX.Element => {
  const history = useHistory();

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderPic>
            <img src={logo} />
          </SliderPic>
        </SwiperSlide>
        <SwiperSlide>
          <SliderPic>
            <img src={sss} />
          </SliderPic>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
