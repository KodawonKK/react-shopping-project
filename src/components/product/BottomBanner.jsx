import React from "react";
import styled from "styled-components";
import btmBannerData from "../../btmBannerList.json";

const BannerWrap = styled.div`
  background: #000;
  padding: 50px 20px;
  display: flex;
  gap: 10px;
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const CardWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 760px) {
    margin: 5px auto;
  }
`;
const ImgWrap = styled.div`
  overflow: hidden;
`;
const BannerImg = styled.img`
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
const TextWrap = styled.h3`
  padding: 10px 0;
  color: #fff;
  font-size: 19.5px;
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
            <BannerImg src={require(`../../assets/images/${item.img}.jpg`)} alt="하단 이벤트 배너" />
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
