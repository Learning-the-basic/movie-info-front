import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const tname = useParams();
//   console.log(tname)
  const KEY2 = "80HF21BI401E15RFQ193"    //KMDB
//   const DATE = moment().subtract(1, 'day').format('YYYYMMDD');
  const getMovie = async () => {
    const json = await (
      await fetch(
        `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${tname.id}&ServiceKey=${KEY2}`)
    ).json();
    return {
        // "title": movie.movieNm,
        // "rnum": movie.rnum,
        // "rank": movie.rank,
        // "openDt": movie.openDt,
        // "audiCnt": movie.audiCnt,
        // "audiAcc": movie.audiCnt,
        // "posters":json.Data[0].Result[0].posters,
        // "kmdbURL":json.Data[0].Result[0].kmdbUrl
    }

  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <h1>Detail</h1>
    )
  

}
export default Detail;