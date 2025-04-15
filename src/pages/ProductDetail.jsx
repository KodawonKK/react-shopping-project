import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../components/product/ProductList";

const ProductDetailWrap = styled.div``;
const ProductDetailTop = styled.div`
  padding-top: 90px;
  max-width: 950px;
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;
  gap: 15px;
`;
const ProductDetailImg = styled.div`
  /* border: 1px solid red; */
`;
const ProductDetailInfo = styled.div``;
const ProductId = styled.h3`
  color: #a0a0a0;
  font-size: 18px;
  font-weight: 300;
`;
const ProductName = styled.span`
  font-size: 25px;
  font-weight: 500;
`;
const PriceInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0 20px;
  border-bottom: 1px solid #e5e5e5;
`;
const PriceWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
const Price = styled.div`
  &.discounted {
    font-weight: bold;
    color: #000;
    font-size: 20px;
    padding-right: 10px;
  }
  &.original {
    text-decoration: line-through;
    color: gray;
    padding-right: 10px;
  }
  &.percentage {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
`;
const DetailInfoWrap = styled.div`
  border-bottom: 1px solid #000;
  padding: 30px 0;
`;
const RequireWrap = styled.div`
  font-size: 13px;
  padding: 10px 0;
  /* border: 3px solid red; */
  display: flex;
  align-items: flex-start;
  /* justify-content: space-between; */
`;
const Color = styled.span`
  color: #a0a0a0;
  min-width: 140px;
`;
const SelectBtn = styled.button`
  font-size: 12px;
  background: #fff;
  border: 1px solid #d7d7d7;
  margin: 0 2px;
  cursor: pointer;
`;
const RequiredTxt = styled.p`
  padding-top: 5px;
`;
const BottomBtnWrap = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0 20px;
  width: 100%;
  justify-content: space-between;
`;
const BottomBtn = styled.button`
  padding: 10px 10px;
  &.icon {
    border: 1px solid #ddd;
  }
  &.purchase {
    background-color: #000;
    width: 100%;
    color: #fff;
  }
  &.cart {
    width: 100%;
  }

  border: 1px solid #000;
  background: #fff;
  cursor: pointer;
`;
const ProductGuideWrap = styled.div`
  display: flex;
  /* border-top: 1px solid #ddd; */
  border-bottom: 1px solid #ddd;
  align-items: center;
  padding: 15px 0;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    /* border-top: 1px solid #000; */
    border-bottom: 1px solid #000;
  }
`;
const ProductGuide = styled.div``;

const ProductDetail = () => {
  const [productData, setProductData] = useState([]);
  const [coordiList, setCoordiList] = useState([]);

  const { id } = useParams();

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductData(data);
  };
  const getCoordiList = async () => {
    let url = `http://localhost:5000/coordiItem/`;
    let response = await fetch(url);
    let data = await response.json();
    setCoordiList(data);
  };

  let productID = productData?.name?.split("_")[1];

  const menuItems = [
    { type: "icon", content: faHeartRegular },
    { type: "cart", content: "장바구니" },
    { type: "purchase", content: "구매하기" }
  ];
  const guideTitleList = [
    { type: "scroll", title: "상품 사이즈 및 상품 정보 제공공시" },
    { type: "popup", title: "배송안내" },
    { type: "popup", title: "취소/반품/교환/환불 안내" }
  ];

  useEffect(() => {
    getProductDetail();
    getCoordiList();
  }, []);

  return (
    <ProductDetailWrap>
      {/* 상품 상세 정보 TOP  */}
      <ProductDetailTop>
        <ProductDetailImg>{productData?.img && <img src={require(`../assets/images/${productData?.img}.jpg`)} alt="상품" width="100%" />}</ProductDetailImg>
        {/* 사용자 선택 필수 옵션: 색상 및 사이즈 */}
        <ProductDetailInfo>
          <ProductId>{productID}</ProductId>
          <ProductName>{productData?.name}</ProductName>
          <PriceInfoWrap>
            <PriceWrap>
              <Price className="discounted">{productData?.orgprice}</Price>
              <Price className="original">{productData?.price}</Price>
              <Price className="percentage">{productData?.percent}</Price>
            </PriceWrap>
          </PriceInfoWrap>
          {/* 색상 선택 버튼 목록 렌더링 */}
          <DetailInfoWrap>
            <RequireWrap>
              <Color>Color</Color>
              <div>
                {productData?.colorEng?.map((item, idx) => (
                  <SelectBtn key={idx}>{item}</SelectBtn>
                ))}
                <RequiredTxt>[필수] color 선택</RequiredTxt>
              </div>
            </RequireWrap>
            <RequireWrap>
              <Color>Size</Color>
              <div>
                {productData?.size?.map((item, idx) => (
                  <SelectBtn key={idx}>{item}</SelectBtn>
                ))}
                <RequiredTxt>[필수] Size 선택</RequiredTxt>
              </div>
            </RequireWrap>
          </DetailInfoWrap>
          {/* 장바구니 , 구매하기, 좋아요 버튼 렌더링   */}
          <BottomBtnWrap>
            {menuItems.map((item) => (
              <BottomBtn className={item.type}>{item.type === "icon" ? <FontAwesomeIcon icon={item.content} size="2x" /> : item.content}</BottomBtn>
            ))}
          </BottomBtnWrap>
          {/* 상품 안내 관련 렌더링 */}
          {guideTitleList.map((item) => (
            <ProductGuideWrap>
              <ProductGuide>{item.title}</ProductGuide>
              <FontAwesomeIcon icon={faPlus} />
            </ProductGuideWrap>
          ))}
        </ProductDetailInfo>
      </ProductDetailTop>
      {/* 코디 추천  */}
      <ProductList title="코디 아이템" product={coordiList} kind={"coordi"} />
      {/* <img src={require(`src/assets/images/detail1.jpg`)} alt="상품" /> */}
      {/* 푸터 */}
      <Footer />
    </ProductDetailWrap>
  );
};

export default ProductDetail;
