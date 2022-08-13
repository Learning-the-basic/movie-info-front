import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);

  const tname = useParams();
  const NAME = tname.title;
  const KEY2 = "80HF21BI401E15RFQ193"    //KMDB

  const getMovie = async () => {
    const json = await (
      await fetch(
        `/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${NAME}&ServiceKey=${KEY2}`)
    ).json();
    
    setMovies(json.Data);
    setLoading(false);

  };
  
  useEffect(() => {
    getMovie();
  }, []);

  // console.log(movies)

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        {movies.map((movie) => (
          <div key={movie.Result[0].DOCID}> 
          <img src={movie.Result[0].stlls.split('|')[0]}></img>
          <h3>{movie.Result[0].title.replace(/!HS/gi,"").replace(/!HE/gi,"")}</h3>
          <p>{movie.Result[0].prodYear}</p>
          <p>{movie.Result[0].genre}</p>
          <p>{movie.Result[0].nation}</p>
          <p>{movie.Result[0].runtime}분</p>
          <p>개봉일: {movie.Result[0].repRatDate}</p>
          <h4>줄거리</h4>
          <p>{movie.Result[0].plots.plot[0].plotText}</p>
          <h4>출연진</h4>
          {/* <p>{movie.Result[0].actors.actor}</p> */}
          
          {console.log(movie.Result[0].actors.actor[0].actorNm)}
          {console.log(movie)}
          </div>
          

          ))}
      </div>}
    </div>
    )
}
export default Detail;