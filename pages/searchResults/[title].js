import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "../../components/card/card";
import axios from "axios";
import Select from "../../components/select/select";
import { useRecoilValue } from "recoil";
import { sortValue } from "../../atom";

const SearchResults = () => {
  const router = useRouter();
  const title = router.query.title || "";
  const defaultValue = useRecoilValue(sortValue); 

  const sortOption = [
    { id: "RANK", value: "정확도순" },
    { id: "title", value: "영화명순" },
    { id: "prodYear", value: "제작년도순" }
  ];
  const [filterMovieList, setFilterMovieList] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const sortby = sortOption[0].id

    sortOption.forEach((item) => {
      if (item.value === defaultValue) {
        return sortby = item.id
      }
    })
    const fetchMovies = async () => {
      const res = await axios.get(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${title.replace(/!HS/gi, "").replace(/!HE/gi, "")}&sort=${sortby},1&listCount=20&ServiceKey=80HF21BI401E15RFQ193`)
      setState(res.data.Data[0].Result)
    }
    fetchMovies()
    console.log(sortby)
  }, [title, defaultValue])
  
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
      <Select options={sortOption}/>
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