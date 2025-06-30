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
const LikeProductRight = styled.div`
  font-size: 13px;
  line-height: 1.5;
`;
const ProductTitle = styled.div``;
const SavingIcon = styled.span`
  background: #b88cc5;
  border-radius: 5px;
  font-size: 10px;
  padding: 1px 3px;
  color: #fff;
  border: 1px solid #ddd;
`;
const SavingWrap = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const LikeProductBtm = styled.div`
  background: #f5f5f5;
  padding: 15px 20px;
`;
const OptionWrap = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
  padding: 0 0 10px;
`;
const OptionTitle = styled.div`
  min-width: 40px;
  color: #757575;
`;
const OptionSelect = styled.select`
  width: 90%;
`;
const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
`;
const OptionCommonBtn = styled.button`
  border: 1px solid #ddd;
  background: #fff;
  padding: 5px 5px;
  cursor: pointer;
`;

const LikePage = ({ likeList }) => {
  const size = ["S(090)", "M(095)", "L(100)"];
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
            <SavingWrap>
              <SavingIcon>적</SavingIcon>
              <div>{savingCalc(item?.price?.sale)} (1%)</div>
            </SavingWrap>
            <div>{item.price.sale}</div>
          </LikeProductRight>
        </LikeProductTop>
      ))}
      <LikeProductBtm>
        <OptionWrap>
          <OptionTitle>Color</OptionTitle>
          {/* <label for="color-select">- [필수] Color 선택 -</label> */}
          <OptionSelect id="color-select">
            {likeList.map((item, idx) => (
              <option key={idx}>{item.colors[0].eng}</option>
            ))}
          </OptionSelect>
        </OptionWrap>
        <OptionWrap>
          <OptionTitle>Size</OptionTitle>
          {/* <label for="size-select">- [필수] Size 선택 -</label> */}
          <OptionSelect id="size-select">
            {size.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </OptionSelect>
        </OptionWrap>
        <BtnWrap>
          <OptionCommonBtn>변경</OptionCommonBtn>
          <OptionCommonBtn>취소</OptionCommonBtn>
        </BtnWrap>
      </LikeProductBtm>
    </LikeProductWrap>
  );
};

export default LikePage;
