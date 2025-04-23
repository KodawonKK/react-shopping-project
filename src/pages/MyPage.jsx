import React from "react";
import styled from "styled-components";
import Footer from "../components/layout/Footer";

const MyPageWrap = styled.div`
  padding: 80px 20px 0;
`;
const MyPageTitle = styled.h1`
  text-align: center;
`;
const PageMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
const PageMenuList = styled.div`
  /* border: 3px solid; */
`;
const MyPageInfoWrap = styled.div`
  display: flex;
  background: #f8f8f8;
`;
const MyPageInfoLeft = styled.div``;
const MyInfoImg = styled.img``;
const MyInfoGrade = styled.div``;
const MyPageInfoRight = styled.div``;
const MyPageInfoBottom = styled.div``;
const DeliveryStatus = styled.div`
  background: #f1f1f1;
  display: flex;
`;
const DeliveryStatusList = styled.div`
  background: #f1f1f1;
`;
const CurrentOrderInfoWrap = styled.div``;
const CurrentOrderInfoTitle = styled.h3``;

const MyPage = () => {
  "";
  const myPageMenu = ["주문조회", "쿠폰", "예치금", "회원정보 수정", "관심상품", "나의 문의"];
  const myInfo = [
    { title: "주문내역", kindNum: `${0}개` },
    { title: "사용가능 적립금", kindNum: `${0}원` },
    { title: "쿠폰", kindNum: `${0}개` }
  ];
  const deliveryList = ["결제 전", "상품준비중", "배송중", "배송완료"];
  return (
    <MyPageWrap>
      <MyPageTitle>MY PAGE</MyPageTitle>
      <PageMenuWrap>
        {myPageMenu.map((item, idx) => (
          <PageMenuList key={idx}>{item}</PageMenuList>
        ))}
      </PageMenuWrap>
      <MyPageInfoWrap>
        <MyPageInfoLeft>
          <MyInfoImg />
          <MyInfoGrade>안녕하세요 고다원님! 고객님의 회원등급은 일반회원입니다.</MyInfoGrade>
          <div>멤버십 확인하기</div>
        </MyPageInfoLeft>
        <MyPageInfoRight></MyPageInfoRight>
      </MyPageInfoWrap>
      <MyPageInfoBottom>
        <DeliveryStatus>
          {deliveryList.map((item, idx) => (
            <DeliveryStatusList>{item} 0 &gt;</DeliveryStatusList>
          ))}
        </DeliveryStatus>
      </MyPageInfoBottom>
      <CurrentOrderInfoWrap>
        <CurrentOrderInfoTitle>최근 주문 정보</CurrentOrderInfoTitle>
      </CurrentOrderInfoWrap>
      <Footer />
    </MyPageWrap>
  );
};

export default MyPage;
