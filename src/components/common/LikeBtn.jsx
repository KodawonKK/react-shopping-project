import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const LikeBtn = ({ id }) => {
  const [isLike, setLike] = useState(false);
  const { authenticate } = useContext(AuthContext);
  const { isLikeList, setLikeList } = useContext(LikeContext);
  const likeListIds = Object.keys(isLikeList);
  const likeCheck = authenticate && likeListIds.includes(`${id}`);
  const navigate = useNavigate();

  const handleLikeBtn = () => {
    if (!authenticate) {
      alert("로그인 후 관심상품을 이용 하실 수 있습니다.");
      navigate("/login");
      return;
    }
    setLike((prev) => !prev);
    const updated = { ...isLikeList, [id]: !isLike };
    if (!isLike) {
      localStorage.setItem("likeItemId", JSON.stringify(updated));
      setLikeList(updated);
    } else {
      delete updated[id];
      localStorage.setItem("likeItemId", JSON.stringify(updated));
      setLikeList(updated);
    }
  };

  useEffect(() => {
    console.log(isLikeList, isLike, likeCheck);
  }, [isLikeList]);

  return (
    <LikeBtnWrap
      icon={likeCheck ? faHeart : faHeartRegular}
      style={likeCheck ? { color: "red" } : { color: "#757575" }}
      onClick={(e) => {
        e.stopPropagation();
        // handleLikeBtn();
      }}
    />
  );
};

export default LikeBtn;
