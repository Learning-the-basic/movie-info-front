import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "../../components/card/card";
import axios from "axios";

const SearchResults = () => {
  const router = useRouter();
  const title = router.query.title || "";

  const [filterMovieList, setFilterMovieList] = useState([]);
  const [state, setState] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail&title=${title.replace(/!HS/gi, "").replace(/!HE/gi, "")}&listCount=20&ServiceKey=80HF21BI401E15RFQ193`)
      setState(res.data.Data[0].Result)
    }
    fetchMovies()
  }, [title])
  
  useEffect(() => {
    const list = state && state.filter((v) => {
      const movies = v.title || ""
      if (movies.replace(/!HS|!HE| /gi, "").includes(title.replace(/!HS|!HE| /gi, ""))) {
        return v
      }
    })
    setFilterMovieList(list)
  }, [state])

  return (
    <div className="searchResults">
      {filterMovieList
        ? filterMovieList.map((movie) => {
          return (
            <div className="cardList">
              <Card key={movie.DOCID} movie={movie}/>
            </div>
          )})
        : <h4 className="searchResults-none">"{title}"에 대한 검색 결과를 찾을 수 없습니다.</h4>}
    </div>
  )
}

export default SearchResults;