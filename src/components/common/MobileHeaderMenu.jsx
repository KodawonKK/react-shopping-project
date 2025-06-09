import React from "react";
import styled from "styled-components";
import prevIcon from "../../assets/icon/prev.svg";

const MenuWrap = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
`;
const PrevIconWrap = styled.div`
  /* border: 1px solid red; */
  height: 23px;
`;

const MobileHeaderMenu = ({ menu }) => {
  return (
    <MenuWrap>
      <PrevIconWrap>
        <img src={prevIcon} alt="뒤로가기" width={"100%"} />
      </PrevIconWrap>
      <div>{menu}</div>
      <div></div>
    </MenuWrap>
  );
};

export default MobileHeaderMenu;
