import { useEffect, useState } from "react";
import "swiper/css";
import ProductList from "../components/product/ProductList";
import BestItemList from "../components/product/BestItemList";
import EventBanner from "../components/product/EventBanner";
import BottomBanner from "../components/product/BottomBanner";

const Home = () => {
  const [product, setProductList] = useState([]);
  const [best, setBest] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products/`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  const getBest = async () => {
    let url = `http://localhost:5000/bestItem/`;
    let response = await fetch(url);
    let data = await response.json();
    setBest(data);
  };
  useEffect(() => {
    getProducts();
    getBest();
  }, []);
  return (
    <div>
      {/* 상단 배너 */}
      <EventBanner />
      {/* 신상품 */}
      <ProductList title={"이번 주 신상품"} product={product} />
      {/* 이번주 베스트 */}
      <BestItemList title={"이번 주 베스트"} best={best} />
      {/* 인기템 */}
      <ProductList title={"리뷰 인기템"} />
      {/* 배너 */}
      <BottomBanner />
    </div>
  );
};

export default Home;
