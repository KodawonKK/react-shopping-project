import React from "react";
import styled from "styled-components";
import Card from "../common/Card";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const ProductListWrap = styled.div`
  padding: 20px 0;
`;
const Title = styled.h1`
  text-align: center;
`;
const ProductWrap = styled.div`
  max-width: 1720px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const ProductList = ({ title, product, kind }) => {
  return (
    <ProductListWrap style={kind === "coordi" ? { maxWidth: "1000px", margin: "0 auto" } : {}}>
      <Title style={kind === "coordi" ? { textAlign: "left", padding: "20px 30px", fontSize: "30px", fontWeight: 100 } : {}}>{title}</Title>
      <ProductWrap>
        <Swiper
          spaceBetween={20}
          slidesPerView={kind === "coordi" ? 4 : 3}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          {product?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card item={item} kind={kind} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ProductWrap>
    </ProductListWrap>
  );
};

export default ProductList;
