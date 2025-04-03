import React from "react";
import styled from "styled-components";

const BannerWrap = styled.div`
  background: #000;
  padding: 20px 20px;
  display: flex;
  gap: 10px;
`;
const CardWrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const ImgWrap = styled.div``;
const TextWrap = styled.h3`
  color: #fff;
`;
const BtmTxt = styled.p`
  color: #fff;
`;

const BottomBanner = () => {
  return (
    <BannerWrap>
      <CardWrap>
        <ImgWrap>
          <img src={require("../../assets/images/product1.jpg")} alt="하단 이벤트 배너" width={"100%"} />
        </ImgWrap>

        <TextWrap>스프링 이너 위크</TextWrap>
        <BtmTxt>지금 입기 좋은 이너 20%</BtmTxt>
      </CardWrap>
      <CardWrap>
        <img src={require("../../assets/images/product1.jpg")} alt="하단 이벤트 배너" width={"100%"} />
        <TextWrap>스프링 이너 위크</TextWrap>
        <BtmTxt>지금 입기 좋은 이너 20%</BtmTxt>
      </CardWrap>
    </BannerWrap>
  );
};

export default BottomBanner;
