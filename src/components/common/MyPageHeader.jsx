import React from "react";
import { useState } from "react";
import styled from "styled-components";

const PageMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 20px 0px;
  max-width: 1240px;
  margin: 0 auto 50px;
`;
const PageMenuList = styled.div`
  color: #a0a0a0;
  font-size: 17px;
  font-weight: 300;
  cursor: pointer;
  &.hover {
    color: #000;
  }
`;
const MyPageHeader = () => {
  const [isHover, setHover] = useState(false);
  const [isMenu, setMenu] = useState("");
  const myPageMenu = ["주문조회", "쿠폰", "예치금", "회원정보 수정", "관심상품", "나의 문의"];

  return (
    <PageMenuWrap>
      {myPageMenu.map((item, idx) => (
        <PageMenuList
          key={idx}
          onMouseEnter={() => {
            setMenu(item);
            setHover(true);
          }}
          onMouseLeave={() => setHover(false)}
          className={isMenu === item && isHover ? "hover" : ""}
        >
          {item}
        </PageMenuList>
      ))}
    </PageMenuWrap>
  );
};

export default MyPageHeader;
