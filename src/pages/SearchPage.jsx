import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icon/search.svg";
import Card from "../components/common/Card";
import { useSearchParams, useNavigate } from "react-router-dom";

const SearchPageWrap = styled.div``;
const SearchBoxWrap = styled.div`
  padding: 89px 50px 20px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;
const SearchWrap = styled.div`
  border-bottom: 1px solid #000;
  margin: 30px auto;
  position: relative;
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  padding: 10px 0;
  font-size: 20px;
  border: none;
  margin-left: 35px;
`;
const SearchImgWrap = styled.div`
  width: 25px;
  position: absolute;
  left: 0;
  top: 8px;
`;
const SearchTermBtn = styled.button`
  border: 1px solid #ddd;
  margin-right: 5px;
  background: #fff;
  padding: 5px 5px;
  color: #8a8a8a;
  cursor: pointer;
`;
const SearchResultWrap = styled.div`
  border-top: 1px solid #ddd;
  padding: 10px 0 40px;
`;
const SearchResult = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 20px;
  padding: 20px 50px 0;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 5px;
`;
const NoResult = styled.div`
  text-align: center;
`;

const SearchPage = () => {
  const SearchTerm = ["블라우스", "가디건", "나시", "데님", "셔츠", "자켓"];
  const [data, setData] = useState([]);
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let json = await response.json();
    setData(json);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/search?q=${keyword}`);
    }
  };
  const hashTagSearch = (item) => {
    let keyword = item;
    navigate(`/search?q=${keyword}`);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <SearchPageWrap>
      <SearchBoxWrap>
        <SearchWrap>
          <SearchImgWrap>
            <img src={SearchIcon} width={"100%"} alt="오른쪽 상단 아이콘" />
          </SearchImgWrap>
          <SearchInput size={10} maxLength={30} onKeyDown={search} />
        </SearchWrap>
        {SearchTerm.map((item, idx) => (
          <SearchTermBtn key={idx} onClick={() => hashTagSearch(item)}>
            #{item}
          </SearchTermBtn>
        ))}
      </SearchBoxWrap>
      <SearchResultWrap>
        <SearchResult>
          {data.length > 0 ? data.map((item, idx) => <Card item={item} key={idx} kind="" />) : <NoResult>검색 결과가 없습니다.</NoResult>}
        </SearchResult>
      </SearchResultWrap>
    </SearchPageWrap>
  );
};

export default SearchPage;
