import { useEffect, useState, useContext } from "react";
import { Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { LikeContext } from "./contexts/LikeContext";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/layout/Header";
import MyPage from "./pages/MyPage";
import LikePage from "./pages/LikePage";
import Footer from "./components/layout/Footer";
import SearchPage from "./pages/SearchPage";
import { useMediaQuery } from "react-responsive";
import MobileBottomMenu from "./components/common/MobileBottomMenu";
import MobileHeaderMenu from "./components/common/MobileHeaderMenu";

function App() {
  const { authenticate } = useContext(AuthContext);
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Header path={path} />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:pageNum" element={<ProductDetail />} />
        <Route path="/mypage" element={authenticate ? <MyPage /> : <Login />} />
        <Route path="/like" element={authenticate ? <LikePage isMobile={isMobile} /> : <Login />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
      {isMobile && <MobileBottomMenu />}
    </>
  );
}

export default App;
