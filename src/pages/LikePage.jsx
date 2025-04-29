import React from "react";
import MyPageHeader from "../components/common/MyPageHeader";
import Footer from "../components/layout/Footer";
import styled from "styled-components";

const LikePageWrap = styled.div`
  padding-top: 100px;
`;
const LikePageListWrap = styled.div`
  border-top: 1px solid #000;
  max-width: 1250px;
  width: 95%;
  margin: 0 auto;
`;
const LikePageListHeadWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 50px);
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
`;
const CheckBox = styled.input`
  display: none;
  &:checked + label {
    background-color: #000;
  }
  &:checked + label::after {
    content: "✔";
    display: block;
    font-size: 12px;
    color: #fff;
    line-height: 10px;
  }
`;
const Label = styled.label`
  width: 12px;
  height: 12px;
  border: 1px solid #000;
  cursor: pointer;
`;

const LikePage = () => {
  const productListArr = ["checkbox", "상품정보", "적립금", "배송구분", "배송비", "합계", "선택"];
  return (
    <LikePageWrap>
      <MyPageHeader />
      <LikePageListWrap>
        <LikePageListHeadWrap>
          {productListArr.map((item, idx) =>
            item === "checkbox" ? (
              <>
                <CheckBox type="checkbox" id="allCheck" />
                <Label key={idx} htmlFor="allCheck" />
              </>
            ) : (
              <div key={idx}>{item}</div>
            )
          )}
        </LikePageListHeadWrap>
      </LikePageListWrap>
      <Footer />
    </LikePageWrap>
  );
};

export default LikePage;
