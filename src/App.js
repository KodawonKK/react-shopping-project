import { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const { authenticate } = useContext(AuthContext);
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/mypage" element={authenticate ? <MyPage /> : <Login />} />
        <Route path="/like" element={authenticate ? <LikePage /> : <Login />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
