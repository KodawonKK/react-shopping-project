import React from "react";
import BannerList from "../../bannerList.json";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BannerWrap = styled.div`
  padding-top: 80px;
`;
const TextWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  color: #fff;
`;
const TopText = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const BtmText = styled.div`
  font-size: 17px;
`;

const EventBanner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {BannerList.map((item, idx) => (
          <SwiperSlide>
            <BannerWrap key={idx}>
              <img src={require(`../../assets/images/${item?.img}.jpg`)} alt="배너" style={{ width: "100%" }} />
              <TextWrap>
                <TopText>{item.comment}</TopText>
                <BtmText>{item.comment2}</BtmText>
              </TextWrap>
            </BannerWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventBanner;
