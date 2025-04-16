import React from "react";
import styled from "styled-components";

const ProductInfoTabMenu = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
`;
const ProductInfoTabList = styled.div`
  cursor: pointer;
  padding: 10px 30px;
  color: #a0a0a0;
  font-weight: 300;
`;

const ProductInfoTab = () => {
  const productDetailTabList = ["상세정보", "상품후기", "상품문의"];

  return (
    <ProductInfoTabMenu>
      {productDetailTabList.map((item, idx) => (
        <ProductInfoTabList key={idx}>{item}</ProductInfoTabList>
      ))}
    </ProductInfoTabMenu>
  );
};

export default ProductInfoTab;
