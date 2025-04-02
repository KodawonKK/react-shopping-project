import React from "react";
import styled from "styled-components";
import Logo from "../../top_logo.png";
import MyPageIcon from "../../assets/icon/mypage.svg";
import SearchIcon from "../../assets/icon/search.svg";
import WishIcon from "../../assets/icon/wish.svg";
import CartIcon from "../../assets/icon/cart.svg";

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
  position: fixed;
  background: #fff;
  z-index: 9999;
  box-sizing: border-box;
  width: 100%;
`;
const ImgWrap = styled.div``;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const MenuList = styled.div`
  font-weight: 700;
`;
const IconMenuWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
const IconMenuList = styled.div`
  width: 28px;
  padding-right: 10px;
`;

const Header = () => {
  const menu = ["세일", "뉴컬렉션", "신상품", "베스트", "전체상품", "기획전"];
  const iconMenu = [WishIcon, SearchIcon, CartIcon, MyPageIcon];

  return (
    <HeaderWrap className="header">
      <ImgWrap>
        <img src={Logo} alt="미쏘로고" width={"100%"} />
      </ImgWrap>
      <MenuWrap>
        {menu.map((item, idx) => (
          <MenuList key={idx}>{item}</MenuList>
        ))}
      </MenuWrap>
      <IconMenuWrap>
        {iconMenu.map((item, idx) => (
          <IconMenuList key={idx}>
            <img src={item} width={"100%"} alt="오른쪽 상단 아이콘" />
          </IconMenuList>
        ))}
      </IconMenuWrap>
    </HeaderWrap>
  );
};

export default Header;
