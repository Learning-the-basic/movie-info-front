import {React, useState, useEffect} from "react";
import {useRouter} from "next/router";

const Comments = () => {
  //영화정보
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const router = useRouter();
  const MNAME = router.query.title;
  const NAME = MNAME === undefined ? router.query.title: MNAME;
  const KEY2 = "80HF21BI401E15RFQ193"    //KMDB

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${NAME}&ServiceKey=${KEY2}`)
    ).json();

    setMovies(json.Data);
    setLoading(false);

  };

  useEffect(() => {
    getMovie();
  }, [NAME]);

  return (
    <div>
      <div className="commentsWrapper">
        {movies.map((movie) => (
          <div key={movie.Result[0].DOCID}>
            <h3>기본정보</h3>
            <p>{movie.Result[0].title.replace(/!HS/gi, "").replace(/!HE/gi, "")}</p>
            <p>{movie.Result[0].prodYear} ▪ {movie.Result[0].genre} ▪ {movie.Result[0].nation}</p>
            <p>{movie.Result[0].runtime}분 ▪ {movie.Result[0].rating}</p>
            <div className="movieDInfoBottomRight">
              <h3>코멘트</h3>
              <button className="movieComment" >
                <div className="commentUserInfo">
                  {/* 유저 사진 */}
                  <div className="commentUserImg"></div>
                  {/* 유저 이름 */}
                  <div className="commentUserName"> 유저이름</div>
                  <div className="commentStar">별점</div>
                </div>
                <hr style={{ backgroundColor: "rgb(190, 190, 190)" }} />
                <div className="commentText">
                  코멘트 내용
                </div>
              </button>
            </div>
          </div>
        ))}

        {/* 코멘트 목록들이 나오게
        유저 프로필, 영화정보, 코멘트 내용 - 좋아요, 댓글 */}
    </div>
    </div>
  )
}

export default Comments;