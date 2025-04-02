import React from "react";
import ProductImg from "../../assets/images/product1.jpg";
import styled from "styled-components";

const ProductName = styled.h3`
  font-weight: 400;
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

const ProductCard = () => {
  return (
    <div>
      <img src={ProductImg} alt="상품" width="100%" />
      <ProductName>시스루 셔츠_MIWYWF420A</ProductName>
      <PriceInfoWrap>
        <PriceWrap>
          <Price className="discounted">46,400</Price>
          <Price className="original">46,400</Price>
        </PriceWrap>
        <Price className="percentage">7%</Price>
      </PriceInfoWrap>
    </div>
  );
};

export default ProductCard;
