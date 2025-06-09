import React from "react";
import styled from "styled-components";

const LikeProductWrap = styled.div`
  padding-top: 20px;
`;
const LikeProductTop = styled.div`
  display: flex;
  gap: 10px;
`;
const LikeProductImg = styled.div`
  width: 30%;
`;
const LikeProductRight = styled.div``;
const ProductTitle = styled.div``;

const LikePage = ({ likeList }) => {
  const savingCalc = (price) => {
    return Number(price.replace(",", "")) * 0.01;
  };
  return (
    <LikeProductWrap>
      {likeList.map((item, idx) => (
        <LikeProductTop key={idx}>
          <LikeProductImg>
            <img src={require(`../../assets/images/${item.img}.jpg`)} alt="상품 이미지" width={"100%"} />
          </LikeProductImg>
          <LikeProductRight>
            <ProductTitle>{item.name}</ProductTitle>
            <div>배송: 2,500 [조건] / 기본배송</div>
            <div>{savingCalc(item?.price?.sale)} (1%)</div>
            <div>{item.price.sale}</div>
          </LikeProductRight>
        </LikeProductTop>
      ))}
    </LikeProductWrap>
  );
};

export default LikePage;
