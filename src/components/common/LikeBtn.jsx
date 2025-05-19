import { useContext, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../contexts/AuthContext";
import { LikeContext } from "../../contexts/LikeContext";

const LikeBtnWrap = styled(FontAwesomeIcon)`
  color: #757575;
  position: absolute;
  right: 8px;
  bottom: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 99;
`;

// const handleLikeBtn = () => {
//    if (!authenticate) {
//       alert("로그인 후 관심상품을 이용 하실 수 있습니다.");
//       navigate("/login");
//       return;
//     }
//     setLike((prev) => !prev);
//     const updated = { ...likeList, [id]: !isLike };
//     if (!isLike) {
//       localStorage.setItem("likeItemId", JSON.stringify(updated));
//     } else {
//       delete updated[id];
//       localStorage.setItem("likeItemId", JSON.stringify(updated));
//     }
// }

const LikeBtn = () => {
  // const { value } = useContext(AuthContext);
  const { isLikeList } = useContext(LikeContext);

  return (
    <LikeBtnWrap
      icon={faHeartRegular}
      onClick={(e) => {
        e.stopPropagation();
        console.log(isLikeList, " 클릭");
      }}
    />
  );
};

export default LikeBtn;
