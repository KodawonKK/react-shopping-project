import React from "react";
import Card from "../common/Card";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  padding: 20px 0;
`;
const BestListWrap = styled.div`
  /* padding: 20px 0; */
`;
const BestList = styled.div`
  max-width: 1720px;
  margin: 0 auto;
  width: 90%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BestItemList = ({ title, best }) => {
  return (
    <BestListWrap>
      <Title>{title}</Title>
      <BestList>
        {best?.map((item, idx) => (
          <Card item={item} kind={"best"} key={idx} grade={idx + 1} />
        ))}
      </BestList>
    </BestListWrap>
  );
};

export default BestItemList;
