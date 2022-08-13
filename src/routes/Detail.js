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
          <h3>{movie.Result[0].title.replace(/!HS/gi,"").replace(/!HE/gi,"")}</h3>
          {/* <img src={movie.posters.split('|')[0]}></img> */}
          {/* {console.log(movie.Result[0].DOCID)} */}
          </div>
          

          ))}
      </div>}
    </div>
    )
}
export default Detail;