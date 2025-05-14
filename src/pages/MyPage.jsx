import React, { useState } from "react";
import styled from "styled-components";
import MyPageHeader from "../components/common/MyPageHeader";

const MyPageWrap = styled.div`
  padding: 150px 0px 0;
`;
const MyPageTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 300;
`;
const MyPageInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  padding: 50px 40px;
  max-width: 1240px;
  width: 90%;
  margin: 0 auto;
`;
const MyPageInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const MyPageInfoLeft = styled.div`
  display: flex;
  padding-bottom: 10px;
  width: 100%;
`;
const MyInfoImg = styled.img``;
const MyInfoGradeTxtWrap = styled.div`
  padding: 0 10px;
`;
const MyInfoGradeTxt = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 300;
`;
const MyInfoGradeTxt2 = styled.div`
  display: flex;
  font-size: 18px;
`;
const MyInfoGrade = styled.h3`
  font-size: 18px;
`;
const MyInfoGradeName = styled.h3`
  font-size: 25px;
`;
const MyPageInfoRight = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;
const MyPageItemWrap = styled.div`
  border: 1px solid #e7e7e7;
  padding: 30px 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333%;
`;
const MyPageItemImgWrap = styled.div`
  padding-bottom: 5px;
  width: 35px;
  height: 35px;
`;
const MyPageItemImg = styled.img`
  &.coupon {
    padding: 7px 0 7px;
  }
`;
const MyPageItemTitle = styled.div`
  font-size: 15px;
  font-weight: 300;
`;
const MyPageInfoBottom = styled.div`
  /* border: 3px solid red; */
  padding: 30px 0;
`;
const DeliveryStatus = styled.div`
  display: flex;
  justify-content: center;
  background: #f1f1f1;
  padding: 30px 0;
`;
const DeliveryStatusList = styled.div`
  background: #f1f1f1;
`;
const CurrentOrderInfoWrap = styled.div`
  padding-top: 50px;
  max-width: 1240px;
  width: 90%;
  margin: 0 auto;
`;
const CurrentOrderInfoTitle = styled.h3`
  font-size: 23px;
  font-weight: 300;
  padding-bottom: 5px;
  border-bottom: 1px solid #000;
`;
const CurrentOrderInfo = styled.div`
  text-align: center;
  padding: 50px 0;
  color: #909090;
  font-size: 14px;
`;

const MyPage = () => {
  const myPageItems = [
    { title: "주문내역", count: 3, icon: "mypage_cart", unit: "개" },
    { title: "적립금", count: 12000, icon: "mypage_deposit", unit: "원" },
    { title: "쿠폰", count: 2, icon: "mypage_coupon", unit: "개" }
  ];
  const deliveryList = ["결제 전", "상품준비중", "배송중", "배송완료"];

  return (
    <MyPageWrap>
      <MyPageTitle>MY PAGE</MyPageTitle>
      <MyPageHeader />
      <MyPageInfoWrap>
        {/* 마이페이지 상단 */}
        <MyPageInfoTop>
          {/* 마이페이지 프로필 등급 정보 (왼쪽) */}
          <MyPageInfoLeft>
            <MyInfoImg src={require("../assets/images/profile.jpg")} />
            <MyInfoGradeTxtWrap>
              <MyInfoGradeTxt>
                안녕하세요&nbsp;<MyInfoGradeName>망망망</MyInfoGradeName>님!
              </MyInfoGradeTxt>
              <MyInfoGradeTxt2>
                고객님의 회원등급은&nbsp;<MyInfoGrade>일반회원</MyInfoGrade>입니다.
              </MyInfoGradeTxt2>
            </MyInfoGradeTxtWrap>
            {/* <div>멤버십 확인하기</div> */}
          </MyPageInfoLeft>

          {/* 마이페이지 주문내역/적립금/쿠폰 (오른쪽) */}
          <MyPageInfoRight>
            {myPageItems.map((item, idx) => (
              <MyPageItemWrap key={idx}>
                <MyPageItemImgWrap>
                  <MyPageItemImg
                    src={require(`../assets/images/${item.icon}.png`)}
                    alt={`${item.title}`}
                    width={"100%"}
                    className={idx === 2 && "coupon"}
                  />
                </MyPageItemImgWrap>
                <MyPageItemTitle>{item.title}</MyPageItemTitle>
                <span>
                  {item.count}
                  {item.unit}
                </span>
              </MyPageItemWrap>
            ))}
          </MyPageInfoRight>
        </MyPageInfoTop>
        {/* 마이페이지 하단 */}
        <MyPageInfoBottom>
          {/* 주문 진행 현황 */}
          <DeliveryStatus>
            {deliveryList.map((item, idx) => (
              <DeliveryStatusList key={idx}>{item} 0 &gt;</DeliveryStatusList>
            ))}
          </DeliveryStatus>
        </MyPageInfoBottom>
      </MyPageInfoWrap>

      <CurrentOrderInfoWrap>
        <CurrentOrderInfoTitle>최근 주문 정보</CurrentOrderInfoTitle>
        <CurrentOrderInfo>주문 내역이 없습니다.</CurrentOrderInfo>
      </CurrentOrderInfoWrap>
    </MyPageWrap>
  );
};

export default MyPage;
