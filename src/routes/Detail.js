import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const tname = "useParams()";
  const KEY2 = "80HF21BI401E15RFQ193"    //KMDB
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(
        `/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${tname.id}&ServiceKey=${KEY2}`)
    ).json().Data.Result;
    console.log(json)
    
    setMovies(json);
    setLoading(false);
    // return {
    //     "DOCID": json.Data[0].Result[0].DOCID,
    //     "posters":json.Data[0].Result[0].posters,
    //     "kmdbURL":json.Data[0].Result[0].kmdbUrl
    // }

  };
  
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        {movies.map((movie) => 
        <div key={movie.DOCID}> 
        <img src={movie.posters.split('|')[0]}></img>
        </div>)}
      </div>}
    </div>
    )
}
export default Detail;