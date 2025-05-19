import { createContext, useState, useEffect } from "react";

export const LikeContext = createContext();

export const LikeProvider = ({ children, initialList }) => {
  const [isLikeList, setLikeList] = useState(initialList);

  return <LikeContext.Provider value={{ isLikeList, setLikeList }}>{children}</LikeContext.Provider>;
};
