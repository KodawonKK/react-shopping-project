import React from "react";
import BannerList from "../../bannerList.json";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const EventBannerWrap = styled.div`
  padding-top: 87px;
`;
const BannerWrap = styled.div`
  cursor: pointer;
`;
const TextWrap = styled.div`
  position: absolute;
  top: 30%;
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
    <EventBannerWrap>
      <Swiper
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
      >
        {BannerList.map((item, idx) => (
          <SwiperSlide key={idx}>
            <BannerWrap>
              <img src={require(`../../assets/images/${item?.img}.jpg`)} alt="배너" style={{ width: "100%" }} />
              <TextWrap>
                <TopText>{item.comment}</TopText>
                <BtmText>{item.comment2}</BtmText>
              </TextWrap>
            </BannerWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </EventBannerWrap>
  );
};

export default EventBanner;
