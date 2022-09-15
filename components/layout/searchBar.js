import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const SearchBar = () => {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail&ServiceKey=80HF21BI401E15RFQ193`)
      setMovieData(res.data.Data[0].Result)
    }
    fetchMovies()
  }, [])
  // api에 title 검색(자동완성 부분) 하려면 filter부분 바꿔야 함
  const onChange = (e) => {
    setSearchText(e.target.value)
  }

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      router.push(`/searchResults/${searchText}`)
      setSearchText("")
    }
  }

  const filterMovieList = movieData.filter((v) => {
    return v.title.replace(" ", "").includes(searchText)
  })

  return (
    <div className="search">
      <input 
        className="searchInput"
        type="text" 
        placeholder="영화 제목을 입력해 주세요." 
        value={searchText}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {searchText && filterMovieList.length > 0 &&
        <div className="searchContainer">
          <div className="filterSearch">
            {filterMovieList.map((movie) => {
            return (
                <>
                  <p 
                  key={movie.docid}
                  onClick={() => router.push(`/searchResults/${movie.title}`) && setSearchText(movie.title)}>
                  {movie.title}
                  </p>
                </>
              )
            })}
          </div>
        </div>}
    </div>
  )
}

export default SearchBar;