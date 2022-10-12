import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import axios from "axios";

const SearchBar = () => {
  const router = useRouter();
  
  const [searchText, setSearchText] = useState("");
  const [movieData, setMovieData] = useState([]);

  const fetchMovies = async (title) => {
    const res = await axios.get(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail&title=${title}&sort=prodYear,1&ServiceKey=80HF21BI401E15RFQ193`)
      if (res.data.Data[0].Result) {
        setMovieData(res.data.Data[0].Result)
      }
  }

  const debouncedText = useCallback(debounce((v) => fetchMovies(v), 300), [])

  const onChange = (e) => {
    debouncedText(e.target.value)
    setSearchText(e.target.value)
  }

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      searchText 
      ? router.push(`/searchResults/${searchText}`)
      : router.replace(router.asPath)
      setSearchText("")
    }
  }

  const filterMovieList = movieData.filter((movie) => {
    return movie.title.replace(/!HS|!HE| /gi, "").includes(searchText.replace(/ /gi, "")) 
    && !(movie.genre.includes("에로")) 
    && movie.genre.length !== 0
  })

  return (
    <div className="searchBar">
      <input 
        className="searchBar-input"
        type="text" 
        placeholder="영화 제목을 입력해 주세요." 
        value={searchText}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {/* <span><img src="/images/search.png"/></span> */}
      {searchText && filterMovieList.length > 0 &&
        <div className="searchBar-container">
          <div className="searchBar-container-filter">
            {filterMovieList.map((movie) => {
            return (
              <>
                <p 
                key={movie.DOCID}
                onClick={() => router.push(`/searchResults/${movie.title}`) && setSearchText(movie.title.replace(/!HS|!HE| /gi, ""))}
                >
                {movie.title.replace(/!HS|!HE/gi, "")} ({movie.prodYear} {movie.nation})
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