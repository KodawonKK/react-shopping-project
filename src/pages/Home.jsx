import { useEffect, useState } from "react";
import "swiper/css";
import ProductList from "../components/product/ProductList";
import Footer from "../components/layout/Footer";
import BestItemList from "../components/product/BestItemList";
import EventBanner from "../components/product/EventBanner";
import BottomBanner from "../components/product/BottomBanner";

const Home = () => {
  const [product, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products/`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data.product);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {/* 상단 배너 */}
      <EventBanner />
      {/* 신상품 */}
      <ProductList title={"이번 주 신상품"} product={product} />
      {/* 이번주 베스트 */}
      <BestItemList title={"이번 주 베스트"} />
      {/* 인기템 */}
      <ProductList title={"리뷰 인기템"} />
      {/* 배너 */}
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default Home;
