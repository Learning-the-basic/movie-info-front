import { useState, useEffect } from "react";
import React from 'react';
import moment from 'moment';


function RankKofic() {
  const KEY1 = "06fe7383576234f02a83e4993c927e1f"  //영화진흥위원회
  const KEY2 = "80HF21BI401E15RFQ193"    //KMDB
  const DATE = moment().subtract(1, 'day').format('YYYYMMDD');
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  

  useEffect(() => {
    //KMDB
    const getMovies = async (movie) => {
      const json = await (
          await fetch(
              `/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movie.movieNm}&releaseDts=${movie.openDt.replaceAll("-","")}&ServiceKey=${KEY2}`
          )
      ).json();
      return {
          "title": movie.movieNm,
          "rank": movie.rank,
          "rnum": movie.rnum, 
          "openDt": movie.openDt,
          "posters":json.Data[0].Result[0].posters,
          "kmdbURL":json.Data[0].Result[0].kmdbUrl}
      }
      
      //영화진흥위원회
      const getBoxOffice = async() => {
        const response = await(await (
            await fetch(
                `/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY1}&targetDt=${DATE}`
            )
        ).json()).boxOfficeResult.dailyBoxOfficeList;

        const boxOffice = await(response.map((movie) => getMovies(movie)));
        
        await Promise.all(boxOffice).then((result) => {
            setMovies(result);
            setLoading(false);
        });
    }
    getBoxOffice();
}, [DATE]);


  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        {movies.map(movie => 
        <div key={movie.rnum}> 
        <p>{movie.rank}위</p>
        {/* {console.log(movie)} */}
        <h3>{movie.title}</h3> 
        <p>개봉일: {movie.openDt}</p>
        <img src={movie.posters.split('|')[0]}></img>
        </div>)}
      </div>}
    </div>
  );
}

export default RankKofic;