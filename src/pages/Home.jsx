import { useEffect, useState } from "react";
import "swiper/css";
import ProductList from "../components/product/ProductList";
import BestItemList from "../components/product/BestItemList";
import EventBanner from "../components/product/EventBanner";
import BottomBanner from "../components/product/BottomBanner";

const Home = ({ isMobile }) => {
  const [product, setProductList] = useState([]);
  const [best, setBest] = useState([]);
  const [banner, setBanner] = useState([]);
  const [bannerMobile, setBannerMobile] = useState([]);

  const fetchData = async (url, setter) => {
    let fetchUrl = `http://localhost:5000/${url}/`;
    let response = await fetch(fetchUrl);
    let data = await response.json();
    setter(data);
  };

  useEffect(() => {
    fetchData("products", setProductList);
    fetchData("bestItem", setBest);
  }, []);

  useEffect(() => {
    if (isMobile) {
      fetchData("bannerMobile", setBannerMobile);
    } else {
      fetchData("bannerPC", setBanner);
    }
  }, [isMobile]);

  return (
    <div>
      {/* 상단 배너 */}
      <EventBanner banner={banner} bannerMobile={bannerMobile} isMobile={isMobile} />
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
