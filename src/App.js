import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  // 1. 유저는 메뉴와 상품들을 볼 수 있다.
  // 2. 유저는 로그인을 할 수 있다.
  // 3. 유저는 상품 디테일을 보기 위해 로그인을 해야한다.
  // 4. 로그인한 유저는 상품 디테일 정보를 볼 수 있다.
  // 5. 유저는 상품을 검색할 수 있다.
  // 6. 유저는 로그아웃 할 수 있다.

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
