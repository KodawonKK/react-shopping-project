import React from "react";
import styled from "styled-components";
import Card from "../common/Card";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import jsonData from "../../../src/dataList.json";

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

const ProductList = ({ title, product }) => {
  console.log(product);
  return (
    <ProductListWrap>
      <Title>{title}</Title>
      <ProductWrap>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          // onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          {product?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ProductWrap>
    </ProductListWrap>
  );
};

export default ProductList;
