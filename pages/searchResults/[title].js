import React, { useEffect, useState } from "react";
// import { GetServerSideProps } from "next"; next router 새로고침 오류
import { useRouter } from "next/router";
import CardList from "../../components/card/cardList";
import axios from "axios";

const searchResults = () => {
  const router = useRouter();
  const title = router.query.title || "";

  const [filterMovieList, setFilterMovieList] = useState([]);
  const [state, setState] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail&title=${title.replace(/!HS/gi, "").replace(/!HE/gi, "")}&ServiceKey=80HF21BI401E15RFQ193`)
      setState(res.data.Data[0].Result)
    }
    fetchMovies()
  }, [title])
  
  useEffect(() => {
    const list = state.filter((v) => {
      const movies = v.title || ""
      if (movies.includes(title)) {
        return v
      }
    })
    setFilterMovieList(list)
  }, [state])

  return (
    <div className="searchResults">
      <h3>"{title.replace(/!HS/gi, "").replace(/!HE/gi, "")}"에 대한 검색 결과입니다.</h3>
      {filterMovieList.map((movie) => {
        return (
          <div>
            <CardList key={movie.DOCID} data={movie}/>
          </div>
        )
      })}
    </div>
  )
}

export default searchResults;