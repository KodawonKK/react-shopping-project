import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
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
  border-bottom: 1px solid #e6e5e7;
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
  cursor: pointer;
  padding: 0 20px;
  &:hover {
    color: #e5477f;
  }
`;
const IconMenuWrap = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;
const IconMenuList = styled.div`
  position: relative;
  width: 27px;
  padding: 5px 20px 5px 0;
  cursor: pointer;
  &.mypage {
    position: initial;
  }
`;
const MypageModalWrap = styled.div`
  position: absolute;
  right: 30px;
  bottom: -30px;
  display: flex;
  padding: 15px 10px;
  font-size: 13px;
  border: 1px solid #cbcbcb;
  background-color: #fff;
  &.menu {
    display: flex;
  }
`;
const MypageModal = styled.div`
  margin: 0 5px;
  cursor: pointer;
`;
const CartNum = styled.span`
  position: absolute;
  right: 15px;
  bottom: 2px;
  background: red;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  font-size: 10px;
  text-align: center;
  line-height: 14px;
  color: #fff;
  font-weight: bold;
`;

const Header = () => {
  const loginStatus = localStorage.getItem("login") === "true";
  const menu = ["베스트", "세일", "뉴컬렉션", "신상품", "전체상품", "기획전"];
  const iconMenu = [WishIcon, SearchIcon, CartIcon, MyPageIcon];
  const myPageMenu = [loginStatus ? "로그아웃" : "로그인", "주문조회", "마이페이지"];
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { authenticate, setAuthenticate } = useContext(AuthContext);

  const clickMenu = (idx) => {
    if (idx === 3) {
      navigate("/mypage");
    } else if (idx === 0) {
      navigate("/like");
    }
  };
  const clickMyPage = (idx) => {
    if (idx === 0) {
      console.log(loginStatus);
      if (loginStatus) {
        //로그아웃을 눌렀을 때
        localStorage.removeItem("login");
        setAuthenticate(false);
        navigate("/");
      } else {
        navigate("/login");
      }
    } else {
      navigate("/mypage");
    }
  };

  // useEffect(() => {
  //   console.log(authenticate);
  // }, [authenticate]);

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
          {iconMenu.map((item, idx) =>
            idx !== 3 ? (
              <IconMenuList key={idx} onClick={() => clickMenu(idx)}>
                <img src={item} width={"100%"} alt="오른쪽 상단 아이콘" />
                {idx === 2 && <CartNum>0</CartNum>}
              </IconMenuList>
            ) : (
              <IconMenuList
                key={idx}
                onClick={() => clickMenu(idx)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="mypage"
              >
                <img src={item} width={"100%"} alt="오른쪽 상단 아이콘" />
                {/* 마이페이지 모달 */}
                {isHovered && (
                  <MypageModalWrap>
                    {myPageMenu.map((item, idx) => (
                      <MypageModal key={idx} onClick={() => clickMyPage(idx)}>
                        {item}
                      </MypageModal>
                    ))}
                  </MypageModalWrap>
                )}
              </IconMenuList>
            )
          )}
        </IconMenuWrap>
      </HeaderMenu>
    </HeaderWrap>
  );
};

export default Header;
