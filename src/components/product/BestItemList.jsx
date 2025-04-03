import React from "react";
import Card from "../common/Card";
import styled from "styled-components";
import jsonData from "../../../src/dataList.json";

const Title = styled.h1`
  text-align: center;
`;
const BestListWrap = styled.div`
  padding: 20px 0;
`;
const BestList = styled.div`
  max-width: 1720px;
  margin: 0 auto;
  width: 90%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
`;

const BestItemList = ({ title }) => {
  return (
    <BestListWrap>
      <Title>{title}</Title>
      <BestList>
        {jsonData.map((item, idx) => (
          <Card item={item} kind={"best"} key={idx} />
        ))}
      </BestList>
    </BestListWrap>
  );
};

export default BestItemList;
