import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MobileBottomMenuWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0;
  background: #fff;
  z-index: 9999;
`;
const MobileMenuWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
const MobileIcon = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const MobileBottomMenu = () => {
  const icon = ["all_cate", "top_wish", "ft_nav_home", "mypage"];
  const navigate = useNavigate();
  const bottomMenu = (idx) => {
    if (idx === 0) {
      navigate("/");
    } else if (idx === 1) {
      navigate("/like");
    } else if (idx === 2) {
      navigate("/");
    } else if (idx === 3) {
      navigate("/mypage");
    }
  };
  return (
    <MobileBottomMenuWrap>
      <MobileMenuWrap>
        {icon.map((item, idx) => (
          <MobileIcon key={idx} onClick={() => bottomMenu(idx)}>
            <img src={require(`../../assets/icon/${item}.svg`)} alt="" />
          </MobileIcon>
        ))}
      </MobileMenuWrap>
    </MobileBottomMenuWrap>
  );
};

export default MobileBottomMenu;
