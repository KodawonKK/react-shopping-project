import React from "react";
import styled from "styled-components";
import btmBannerData from "../../btmBannerList.json";

const BannerWrap = styled.div`
  background: #000;
  padding: 50px 20px;
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
  height: 40px;
`;
const ViewMore = styled.span`
  color: #9b9898;
  cursor: pointer;
  &::after {
    content: "";
    width: 50%;
    height: 1px;
    background: #9b9898;
    display: block;
    margin-top: 2px;
  }
`;

const BottomBanner = () => {
  return (
    <BannerWrap>
      {btmBannerData.map((item, idx) => (
        <CardWrap key={idx}>
          <ImgWrap>
            <img src={require(`../../assets/images/${item.img}.jpg`)} alt="하단 이벤트 배너" width={"100%"} />
          </ImgWrap>
          <TextWrap>{item.comment}</TextWrap>
          <BtmTxt>{item.comment2}</BtmTxt>
          <ViewMore>VIEW MORE {">"}</ViewMore>
        </CardWrap>
      ))}
    </BannerWrap>
  );
};

export default BottomBanner;
