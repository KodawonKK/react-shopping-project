import React from "react";
import Logo from "../../top_logo.png";
import styled from "styled-components";

const FooterWrap = styled.div`
  border-top: 1px solid #ddd;
  padding: 30px 40px;
  display: flex;
`;
const FooterRight = styled.div`
  padding: 0 10px;
`;
const FooterLeft = styled.div`
  padding: 0 10px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterLeft>
        <img src={Logo} alt={"로고"} />
        <h3>1670-9910</h3>
        <p>평일 AM 10:00 - PM 05:00 / 점심 PM 12:00 - PM 01:00 / 토요일, 일요일, 공휴일 휴무</p>
      </FooterLeft>
      <FooterRight>
        <h3>ABOUT US</h3>
        <span>브랜드소개</span>
        <span>매장정보</span>
      </FooterRight>
    </FooterWrap>
  );
};

export default Footer;
