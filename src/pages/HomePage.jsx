import React from "react";
import Header from "../components/layout/Header";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Banner1 from "../assets/images/banner1.jpg";
import ProductList from "../components/product/ProductList";
import Footer from "../components/layout/Footer";
import BestItemList from "../components/product/BestItemList";
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

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* SWIPER */}
      <Swiper onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <BannerWrap>
            <img src={Banner1} alt="상단배너" width={"100%"} />
            <TextWrap>
              <TopText>다다익선 혜택</TopText>
              <BtmText>구매할수록 늘어나는 혜택 최대 20%</BtmText>
            </TextWrap>
          </BannerWrap>
        </SwiperSlide>
      </Swiper>
      {/**********신상품**********/}
      <ProductList title={"이번 주 신상품"} />
      {/*********** 이번주 베스트************/}
      <BestItemList title={"이번 주 베스트"} />
      {/**********인기템**********/}
      <ProductList title={"리뷰 인기템"} />
      <Footer />
    </div>
  );
};

export default HomePage;
