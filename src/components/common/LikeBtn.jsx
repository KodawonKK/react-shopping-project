import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LikeBtnWrap = styled(FontAwesomeIcon)`
  color: #757575;
  position: absolute;
  right: 8px;
  bottom: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 99;
`;

const LikeBtn = () => {
  return (
    <LikeBtnWrap
      icon={faHeartRegular}
      onClick={(e) => {
        e.stopPropagation();
        console.log("하하");
      }}
    />
  );
};

export default LikeBtn;
