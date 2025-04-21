import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../top_logo.png";
import MyPageIcon from "../../assets/icon/mypage.svg";
import SearchIcon from "../../assets/icon/search.svg";
import WishIcon from "../../assets/icon/wish.svg";
import CartIcon from "../../assets/icon/cart.svg";

const HeaderWrap = styled.div`
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 9999;
  box-sizing: border-box;
`;
const HeaderMenu = styled.div`
  max-width: 1720px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
`;
const ImgWrap = styled.div`
  padding: 0 30px 0 0;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
const MenuList = styled.div`
  font-weight: 700;
  cursor: pointer;
  padding: 0 20px;
`;
const IconMenuWrap = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  width: 15%;
`;
const IconMenuList = styled.div`
  width: 23px;
  padding-right: 10px;
  cursor: pointer;
`;

const Header = () => {
  const menu = ["세일", "뉴컬렉션", "신상품", "베스트", "전체상품", "기획전"];
  const iconMenu = [WishIcon, SearchIcon, CartIcon, MyPageIcon];
  const navigate = useNavigate();

  const goToLogin = (idx) => {
    if (idx === 3) {
      navigate("/mypage");
    }
  };

  return (
    <HeaderWrap className="header">
      <HeaderMenu>
        <Link to="/">
          <ImgWrap>
            <img src={Logo} alt="미쏘로고" width={"100%"} />
          </ImgWrap>
        </Link>

        <MenuWrap>
          {menu.map((item, idx) => (
            <MenuList key={idx}>{item}</MenuList>
          ))}
        </MenuWrap>
        <IconMenuWrap>
          {iconMenu.map((item, idx) => (
            <IconMenuList key={idx} onClick={() => goToLogin(idx)}>
              <img src={item} width={"100%"} alt="오른쪽 상단 아이콘" />
            </IconMenuList>
          ))}
        </IconMenuWrap>
      </HeaderMenu>
    </HeaderWrap>
  );
};

export default Header;
