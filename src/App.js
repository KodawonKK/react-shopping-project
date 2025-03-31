import { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id/:num" element={<ProductDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user" element={<PrivateRoute />} />
    </Routes>
  );
}

export default App;
