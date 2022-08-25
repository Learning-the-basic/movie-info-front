import axios from "axios";

export const getMovieData = async (movie) => {
  const data = {
    'title': movie.movieNm,
    'rank': movie.rank,
    'rnum': movie.rnum,
    'openDt': movie.openDt,
    'jsonData': null
  };
  const date = movie.openDt.replace(/-/gi, '');
  const result = await axios.get(
    `https://api.koreafilm.or.kr//openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movie.movieNm}&releaseDts=${date}&ServiceKey=80HF21BI401E15RFQ193`
  )
  // data.jsonData = result.data.Data[0];
  return data;
}
