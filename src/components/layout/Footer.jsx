import React from "react";
import Logo from "../../top_logo.png";
import styled from "styled-components";

const FooterWrap = styled.div`
  border-top: 1px solid #ddd;
  padding: 30px 40px;
  display: flex;
  text-align: left;
`;
const Tel = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;
const Info = styled.p`
  font-size: 13px;
  color: #7c7b7b;
`;
const FooterLeft = styled.div`
  padding: 0 10px;
`;
const PolicyWrap = styled.div`
  display: flex;
`;
const PolicyItem = styled.span`
  padding-right: 20px;
  font-size: 14px;
  color: #7c7b7b;
  &.point {
    color: #000;
  }
`;
const FooterRight = styled.div`
  padding: 0 10px;
`;
const EtcWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #7c7b7b;
`;
const EtcItem = styled.span``;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterLeft>
        <img src={Logo} alt={"로고"} />
        <Tel>1670-9910</Tel>
        <Info>평일 AM 10:00 - PM 05:00 / 점심 PM 12:00 - PM 01:00 / 토요일, 일요일, 공휴일 휴무</Info>
        <Info>(주)이랜드월드패션사업부　대표이사 : 조동주,최종양　사업자등록번호 : 113-85-19030 </Info>
        <PolicyWrap>
          <PolicyItem>이용약관</PolicyItem>
          <PolicyItem className="point">개인정보처리방침</PolicyItem>
          <PolicyItem>이용안내</PolicyItem>
        </PolicyWrap>
      </FooterLeft>
      <FooterRight>
        <h3>ABOUT US</h3>
        <EtcWrap>
          <EtcItem>브랜드소개</EtcItem>
          <EtcItem>매장정보</EtcItem>
        </EtcWrap>
      </FooterRight>
    </FooterWrap>
  );
};

export default Footer;
