import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../components/product/ProductList";
import ProductInfoTab from "../components/product/ProductInfoTab";

const ProductDetailWrap = styled.div`
  padding: 30px 10px;
`;
const ProductDetailTop = styled.div`
  padding-top: 90px;
  max-width: 950px;
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 50px;
  /* justify-content: space-between; */
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
  display: flex;
  align-items: flex-start;
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
  &.active {
    border: 1px solid #000;
  }
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
  border-bottom: 1px solid #ddd;
  align-items: center;
  padding: 15px 0;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #000;
  }
`;
const ProductGuide = styled.div``;
const MidBanner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
`;
const ProductInfo = styled.div`
  max-width: 900px;
  margin: 0px auto;
  padding: 0 20px;
`;
const ProductInfoImgWrap = styled.div`
  max-width: 700px;
  margin: 0px auto;
  padding: 100px 0;
`;
const ProductInfoImg = styled.img`
  width: 100%;
`;
const ProductDetailBottom = styled.div``;
const ReviewImg = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 30px 0 20px;
`;

const ProductDetail = ({ authenticate }) => {
  const [productData, setProductData] = useState([]);
  const [coordiList, setCoordiList] = useState([]);
  const [colorBtn, setColorBtn] = useState(null);
  const [sizeBtn, setSizeBtn] = useState(null);
  const [isLike, setLike] = useState(false);
  const [isColor, setColor] = useState("Color");
  const [isSize, setSize] = useState("Size");

  const scrollDetail = useRef(null);
  const scrollReview = useRef(null);
  const scrollQnA = useRef(null);
  const navigate = useNavigate();

  // const loginCheck = JSON.parse(localStorage.getItem("login"));
  const likeList = JSON.parse(localStorage.getItem("likeItemId") || "{}");
  const likeListIds = Object.keys(likeList);
  const { id } = useParams();
  const likeCheck = likeListIds.includes(`${id}`);

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
  // 기능 추가 이후, 하나의 함수로 리팩토링할 수 있을지 검토 예정
  const handleColorBtn = (item, idx) => {
    setColorBtn(idx);
    setColor(item);
  };
  const handleSizeBtn = (item, idx) => {
    setSizeBtn(idx);
    setSize(item);
  };
  const scrollToReview = (idx) => {
    if (idx === 0) scrollDetail.current.scrollIntoView({ behavior: "smooth" });
    if (idx === 1) scrollReview.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleLikeBtn = () => {
    if (!authenticate) {
      alert("로그인 후 관심상품을 이용 하실 수 있습니다.");
      navigate("/login");
      return;
    }
    setLike((prev) => !prev);
    const likeObj = JSON.parse(localStorage.getItem("likeItemId") || "{}");
    const updated = { ...likeObj, [id]: !isLike };
    if (!isLike) {
      localStorage.setItem("likeItemId", JSON.stringify(updated));
    } else {
      delete updated[id];
      localStorage.setItem("likeItemId", JSON.stringify(updated));
    }
  };

  let productID = productData?.name?.split("_")[1];

  useEffect(() => {
    getProductDetail();
    getCoordiList();
  }, [isLike]);

  return (
    <ProductDetailWrap>
      {/* 상품 상세 정보 TOP  */}
      <ProductDetailTop>
        <ProductDetailImg>
          {productData?.img && <img src={require(`../assets/images/${productData?.img}.jpg`)} alt="상품" width="100%" />}
        </ProductDetailImg>
        {/* 사용자 선택 필수 옵션: 색상 및 사이즈 */}
        <ProductDetailInfo>
          <ProductId>{productID}</ProductId>
          <ProductName>{productData?.name}</ProductName>
          <PriceInfoWrap>
            <PriceWrap>
              <Price className="discounted">{productData?.salePrice}</Price>
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
                  <SelectBtn key={idx} onClick={() => handleColorBtn(item, idx)} className={colorBtn === idx ? "active" : ""}>
                    {item}
                  </SelectBtn>
                ))}
                <RequiredTxt>[필수] {isColor} 선택</RequiredTxt>
              </div>
            </RequireWrap>
            <RequireWrap>
              <Color>Size</Color>
              <div>
                {productData?.size?.map((item, idx) => (
                  <SelectBtn key={idx} onClick={() => handleSizeBtn(item, idx)} className={sizeBtn === idx ? "active" : ""}>
                    {item}
                  </SelectBtn>
                ))}
                <RequiredTxt>[필수] {isSize} 선택</RequiredTxt>
              </div>
            </RequireWrap>
          </DetailInfoWrap>
          {/* 장바구니 , 구매하기, 좋아요 버튼 렌더링   */}
          <BottomBtnWrap>
            {menuItems.map((item, idx) => (
              <BottomBtn className={item.type} key={idx}>
                {item.type === "icon" ? (
                  <FontAwesomeIcon
                    icon={likeCheck ? faHeart : item.content}
                    size="2x"
                    onClick={() => handleLikeBtn()}
                    style={likeCheck ? { color: "red" } : { color: "#000" }}
                  />
                ) : (
                  item.content
                )}
              </BottomBtn>
            ))}
          </BottomBtnWrap>
          {/* 상품 안내 관련 렌더링 */}
          {guideTitleList.map((item, idx) => (
            <ProductGuideWrap key={idx}>
              <ProductGuide>{item.title}</ProductGuide>
              <FontAwesomeIcon icon={faPlus} />
            </ProductGuideWrap>
          ))}
        </ProductDetailInfo>
      </ProductDetailTop>
      {/* 코디 추천  */}
      <ProductList title="코디 아이템" product={coordiList} kind={"coordi"} />
      {/* 중간 배너 */}
      <MidBanner ref={scrollDetail}>
        <img src={require("../assets/images/mid_banner.jpg")} style={{ width: "100%" }} alt="중간 배너" />
      </MidBanner>
      {/* 상품 관련 상세 정보 */}
      <ProductInfo>
        {/* 상품 상세 정보 탭 렌더링*/}
        <ProductInfoTab scrollToReview={scrollToReview} tabNum={0} />
        {/* 상품 상세 정보 이미지 */}
        <ProductInfoImgWrap>
          <ProductInfoImg src={require(`../assets/images/detail1.jpg`)} alt="상품" />
        </ProductInfoImgWrap>
      </ProductInfo>
      {/* 상품 상세 정보 탭 렌더링*/}
      <ProductDetailBottom ref={scrollReview}>
        <ProductInfoTab scrollToReview={scrollToReview} tabNum={1} />
        {/* 후기 이미지 */}
        <ReviewImg>
          <img src={require("../assets/images/review_guide.jpg")} alt="리뷰가이드" width="100%" />
        </ReviewImg>
      </ProductDetailBottom>
    </ProductDetailWrap>
  );
};

export default ProductDetail;
