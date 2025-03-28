import "./App.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
