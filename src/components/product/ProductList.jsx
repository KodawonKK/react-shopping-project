import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

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

const ProductList = ({ title }) => {
  return (
    <div>
      <ProductListWrap>
        <Title>{title}</Title>
        <ProductWrap>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductWrap>
      </ProductListWrap>
    </div>
  );
};

export default ProductList;
