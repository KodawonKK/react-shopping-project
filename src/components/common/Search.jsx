import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icon/search.svg";
import CloseIcon from "../../assets/icon/btn_close.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

const SearchBoxWrap = styled.div`
  padding: 0px 0px 25px;
  margin: 0px auto;
  position: absolute;
  left: 0;
  top: 92px;
  z-index: 99999;
  background: #fff;
  border-top: 1px solid rgb(221, 221, 221);
  width: 100%;
  @media (max-width: 760px) {
    top: 86px;
  }
`;
const CloseIconWrap = styled.div`
  width: 20px;
  position: absolute;
  right: 70px;
  top: 15px;
  cursor: pointer;
  z-index: 9;
  @media (max-width: 760px) {
    right: 30px;
  }
`;
const SearchWrap = styled.div`
  margin: 50px auto 0;
  position: relative;
  max-width: 800px;
  @media (max-width: 760px) {
    max-width: 90%;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  padding: 10px 0;
  font-size: 20px;
  border: none;
  /* margin-left: 35px; */
  border-bottom: 1px solid #000;
`;
const SearchImgWrap = styled.div`
  width: 25px;
  position: absolute;
  right: 0;
  top: 8px;
`;
const SearchBtmWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 760px) {
    display: block;
    padding: 15px 35px;
  }
`;
const BestSearchWrap = styled.div`
  padding: 15px 0;
  width: 100%;
`;
const BestSearchTerm = styled.div`
  font-size: 17px;
`;
const BestSearchRanking = styled.div`
  margin: 5px 10px;
  cursor: pointer;
`;
const RecommendProductWrap = styled.div`
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`;
const RecommendProduct = styled.div`
  padding: 10px 0;
  font-size: 17px;
`;
const RecommendProductList = styled.div`
  /* width: 50px; */
`;

const Search = ({ setClose }) => {
  const SearchTerm = ["블라우스", "가디건", "나시", "데님", "셔츠", "자켓"];
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/KodawonKK/react-shopping-project/coordiItem/`;
    // let url = `http://localhost:5000/coordiItem/`;
    let response = await fetch(url);
    let json = await response.json();
    setData(json);
  };
  const closeSearch = () => {
    setClose(false);
  };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/search?q=${keyword}`);
      setClose(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SearchBoxWrap>
      <CloseIconWrap onClick={closeSearch}>
        <img src={CloseIcon} width={"100%"} alt="닫기 아이콘" />
      </CloseIconWrap>
      <SearchWrap>
        <SearchImgWrap>
          <img src={SearchIcon} width={"100%"} alt="오른쪽 상단 아이콘" />
        </SearchImgWrap>
        <SearchInput size={10} maxLength={30} onKeyDown={search} id="search" name="search" placeholder="검색어를 입력해주세요" />
      </SearchWrap>
      <SearchBtmWrap>
        <BestSearchWrap>
          <BestSearchTerm>인기 검색어</BestSearchTerm>
          {SearchTerm.map((item, idx) => (
            <BestSearchRanking key={idx}>
              {idx + 1} {item}
            </BestSearchRanking>
          ))}
        </BestSearchWrap>
        <RecommendProductWrap>
          <RecommendProduct>추천 상품</RecommendProduct>
          <Swiper
            spaceBetween={10}
            slidesPerView={2.5}
            modules={[Navigation, Scrollbar]}
            scrollbar={{ draggable: true }}
            loop={false}
            breakpoints={{
              280: {
                slidesPerView: 1.5, // 모바일
                spaceBetween: 5
              },
              400: {
                slidesPerView: 2.3,
                spaceBetween: 5 // 모바일
              },
              760: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 4 // PC
              }
            }}
          >
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <RecommendProductList>
                  <img src={require(`../../assets/images/${item?.img}.jpg`)} alt="추천 상품" width="100%" />
                </RecommendProductList>
              </SwiperSlide>
            ))}
          </Swiper>
        </RecommendProductWrap>
      </SearchBtmWrap>
    </SearchBoxWrap>
  );
};

export default Search;
