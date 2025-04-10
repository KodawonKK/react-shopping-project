import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/layout/Header";

function App() {
  // 1. 유저는 메뉴와 상품들을 볼 수 있다.
  //1-1 네비게이션 바
  // 2. 유저는 로그인을 할 수 있다.
  // 3. 유저는 상품 디테일을 보기 위해 로그인을 해야한다.
  // 4. 로그인한 유저는 상품 디테일 정보를 볼 수 있다.
  // 5. 유저는 상품을 검색할 수 있다.
  // 6. 유저는 로그아웃 할 수 있다.

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
