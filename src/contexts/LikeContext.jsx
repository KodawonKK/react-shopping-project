import { createContext, useState, useEffect } from "react";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const stored = JSON.parse(localStorage.getItem("likeItemId")) || {};
  const [isLikeList, setLikeList] = useState(stored);

  useEffect(() => {
    localStorage.setItem("likeItemId", JSON.stringify(isLikeList));
  }, [isLikeList]);

  return <LikeContext.Provider value={{ isLikeList, setLikeList }}>{children}</LikeContext.Provider>;
};
