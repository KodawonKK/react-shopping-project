import React, { useState } from "react";
import styled from "styled-components";

const ProductInfoTabMenu = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-content: space-around;
  max-width: 1050px;
  margin: 0 auto;
`;
const ProductInfoTabList = styled.div`
  cursor: pointer;
  padding: 10px 30px;
  color: #a0a0a0;
  font-weight: 300;
  &.select {
    color: #000;
    font-weight: 500;
  }
  &:hover {
    color: #000;
  }
`;

const ProductInfoTab = ({ scrollToReview, tabNum }) => {
  const productDetailTabList = ["상세정보", "상품후기", "상품문의"];
  // const [selectNum, setSelectNum] = useState(0);

  const selectMenu = (idx) => {
    // setSelectNum(idx);
    scrollToReview(idx);
  };

  return (
    <ProductInfoTabMenu>
      {productDetailTabList.map((item, idx) => (
        <ProductInfoTabList key={idx} onClick={() => selectMenu(idx)} className={tabNum === idx ? "select" : ""}>
          {item}
        </ProductInfoTabList>
      ))}
    </ProductInfoTabMenu>
  );
};

export default ProductInfoTab;
