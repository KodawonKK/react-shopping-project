import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/layout/Header";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true 로그인이 됨 false면 로그인 안됨
  useEffect(() => {
    console.log(authenticate, "aaaa");
  }, []);
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
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={authenticate ? <ProductDetail /> : <Login setAuthenticate={setAuthenticate} />} />
      </Routes>
    </>
  );
}

export default App;
