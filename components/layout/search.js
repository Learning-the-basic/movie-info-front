import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [movieData, setMovieData] = useState("");

  const onChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888")
    .then((res) => setMovieData(res.data.movieListResult.movieList))
    .catch(console.log("err"))
  }, [])

  const filterData = Object.values(movieData).filter((v) => {
    return v.movieNm.replace(" ", "").includes(searchText.replace(" ", ""))
  })

  return (
    <div className="search">
      <input className="searchInput"
        type="text" 
        placeholder="영화 제목을 입력해 주세요." 
        value={searchText}
        onChange={onChange}
      />
      {searchText !== '' &&
      <div className="filterSearch">
        {filterData.map((movie) => {
        return (
        <span key={movie.movieCd}>{movie.movieNm}
        </span>
        )
        })}
      </div>}
    </div>
  )
}

export default Search;