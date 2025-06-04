import React, { useEffect, useState, useContext } from "react";
import MyPageHeader from "../components/common/MyPageHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LikeContext } from "../contexts/LikeContext";

const LikePageWrap = styled.div`
  padding-top: 100px;
  max-width: 1240px;
  width: 95%;
  margin: 0 auto;
  color: #333;
`;
const LikePageListWrap = styled.div`
  border-top: 1px solid #000;
`;
const LikePageListHeadWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr 1.2fr;
  grid-template-rows: repeat(1, 50px);
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-items: center;
`;
const CheckBoxWrap = styled.div``;
const CheckBox = styled.input`
  display: none;
  &:checked + label {
    background-color: #000;
  }
  &:checked + label::after {
    content: "✔";
    display: block;
    font-size: 15px;
    color: #fff;
    line-height: 10px;
  }
`;
const Label = styled.label`
  width: 12px;
  height: 12px;
  border: 1px solid #000;
  cursor: pointer;
  margin: 0 auto;
`;
const CommonBtnWrap = styled.div`
  display: flex;
  padding: 20px 0;
`;
const LikeListBtmWrap = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr 1.2fr;
  padding: 24px 0;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
`;
const NoneLikeList = styled.div`
  /* border: 3px solid red; */
  text-align: center;
  padding: 30px 0 50px;
  font-size: 14px;
`;
const Img = styled.img`
  max-width: 80px;
`;
const ProductInfoWrap = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
`;
const ProductInfoTitle = styled.div`
  padding-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`;
const ProductOption = styled.span`
  text-decoration: underline;
`;
const Savings = styled.div`
  color: #707070;
  text-align: center;
`;
const OptionTxt = styled.div`
  text-align: center;
`;
const ChoiceBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
const ChoiceBtn = styled.button`
  background: none;
  border: 1px solid #d9d9d9;
  padding: 6px 6px;
  margin: 3px 0;
  cursor: pointer;
`;
const CommonBtn = styled.button`
  background: none;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #d1d1d1;
  padding: 5px 10px;
  margin-right: 5px;
`;
const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

const LikePage = () => {
  const productListArr = ["checkbox", "상품정보", "적립금", "배송구분", "배송비", "합계", "선택"];
  const btmButton = ["삭제하기", "장바구니 담기", "전체상품주문", "관심상품 비우기"];
  const btnImgArr = ["first", "prev", "next", "last"];
  const choiceList = ["주문하기", "장바구니", "삭제"];
  const [likeList, setLikeInfoList] = useState({}); // 좋아요한 게시물의 정보
  const { isLikeList, setLikeList } = useContext(LikeContext);

  // 좋아요한 게시물의 정보 가져오는 함수
  const getLikeProduct = async () => {
    const likeListIds = Object.keys(isLikeList);
    const likeListId = likeListIds.map((id) => `id=${id}`).join("&");
    if (likeListId !== "") {
      const url = `https://my-json-server.typicode.com/KodawonKK/react-shopping-project/products?${likeListId}`;
      const response = await fetch(url);
      const json = await response.json();
      setLikeInfoList(json.reverse());
      console.log("likeListId");
    }
  };
  const deleteLikeProduct = (idx) => {
    if (idx === 3) {
      const confirmed = window.confirm("관심 상품을 삭제하시겠습니까?");
      if (!confirmed) return;

      localStorage.removeItem("likeItemId");
      setLikeInfoList({});
      setLikeList({});
      alert("삭제되었습니다.");
    }
  };

  useEffect(() => {
    getLikeProduct();
  }, [isLikeList]);

  return (
    <LikePageWrap>
      <MyPageHeader />
      <LikePageListWrap>
        <LikePageListHeadWrap>
          {productListArr.map((item, idx) =>
            item === "checkbox" ? (
              <React.Fragment key={`checkbox-${idx}`}>
                <CheckBox type="checkbox" id="allCheck" />
                <Label htmlFor="allCheck" />
              </React.Fragment>
            ) : (
              <div key={idx}>{item}</div>
            )
          )}
        </LikePageListHeadWrap>
        {likeList.length > 0 ? (
          likeList.map((item, idx) => (
            <LikeListBtmWrap key={item.idx}>
              <CheckBox type="checkbox" id={`chk${idx}`} />
              <Label htmlFor={`chk${idx}`} />
              <Link to={`/product/${item.pageNum}`}>
                <ProductInfoWrap>
                  <Img src={require(`../assets/images/${item.img}.jpg`)} alt="상품이미지" />
                  <ProductInfoTitle>{item.name}</ProductInfoTitle>
                  {/* <ProductOption>옵션변경</ProductOption> */}
                </ProductInfoWrap>
              </Link>
              <Savings>600원(1%)</Savings>
              <OptionTxt>기본 배송</OptionTxt>
              <OptionTxt>2500</OptionTxt>
              <OptionTxt>{item.salePrice}</OptionTxt>
              <ChoiceBtnWrap>
                {choiceList.map((item, idx) => (
                  <ChoiceBtn key={idx}>{item}</ChoiceBtn>
                ))}
              </ChoiceBtnWrap>
            </LikeListBtmWrap>
          ))
        ) : (
          <NoneLikeList>관심상품이 없습니다</NoneLikeList>
        )}
      </LikePageListWrap>
      <CommonBtnWrap>
        {btmButton.map((item, idx) => (
          <CommonBtn key={idx} onClick={() => deleteLikeProduct(idx)}>
            {item}
          </CommonBtn>
        ))}
      </CommonBtnWrap>
      <PaginationWrap>
        {btnImgArr.map((item) => (
          <img src={require(`../../src/assets/images/btn_page_${item}.png`)} alt={item} />
        ))}
      </PaginationWrap>
    </LikePageWrap>
  );
};

export default LikePage;
