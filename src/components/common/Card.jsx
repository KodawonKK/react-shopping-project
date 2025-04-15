import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CardWrap = styled.div`
  cursor: pointer;
`;
const CardImgWrap = styled.div`
  position: relative;
`;
const CardNum = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background: #0000007d;
  font-size: 25px;
  text-align: center;
  color: #fff;
`;
const ProductName = styled.h3`
  font-weight: 400;
  height: 55px;
  font-size: 17px;
  padding: 10px 0;
`;
const PriceInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PriceWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
const Price = styled.div`
  &.discounted {
    font-weight: bold;
    color: #000;
    font-size: 20px;
    padding-right: 10px;
  }
  &.original {
    text-decoration: line-through;
    color: gray;
  }
  &.percentage {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
`;
const ColorBox = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px solid #dfdfdf;
  margin-right: 3px;
`;

const Card = ({ kind, item }) => {
  console.log(kind);
  const navigate = useNavigate();
  const gotoProductDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <CardWrap onClick={gotoProductDetail}>
      <CardImgWrap>
        {kind === "best" && <CardNum>{item.id}</CardNum>}
        <img src={require(`../../assets/images/${item?.img}.jpg`)} alt="상품" width="100%" />
      </CardImgWrap>
      <ProductName>{item.name}</ProductName>
      <PriceInfoWrap>
        <PriceWrap>
          <Price className="discounted">{item.salePrice}</Price>
          <Price className="original">{item.price}</Price>
        </PriceWrap>
        {kind !== "coordi" && <Price className="percentage">{item.percent}</Price>}
      </PriceInfoWrap>

      {kind !== "coordi" && item.color.map((color, idx) => <ColorBox style={{ background: color }} key={idx}></ColorBox>)}
    </CardWrap>
  );
};

export default Card;
