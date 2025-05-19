import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useLikeToggle = ({ id, authenticate }) => {
  const navigate = useNavigate();
  const likeList = JSON.parse(localStorage.getItem("likeItemId") || "{}");
  const likeListIds = Object.keys(likeList);
  const likeCheck = likeListIds.includes(`${id}`);
  const [isLike, setLike] = useState(false);

  const handleLikeBtn = () => {
    if (!authenticate) {
      alert("로그인 후 관심상품을 이용 하실 수 있습니다.");
      navigate("/login");
      return;
    }
    setLike((prev) => !prev);
    const updated = { ...likeList, [id]: !isLike };
    if (!isLike) {
      localStorage.setItem("likeItemId", JSON.stringify(updated));
    } else {
      delete updated[id];
      localStorage.setItem("likeItemId", JSON.stringify(updated));
    }
  };
  return { handleLikeBtn };
};
