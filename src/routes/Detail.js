import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import "../styles/Detail.css"
import Footer from "../components/Footer/Footer";

function Detail() {

  //별점
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    const rating = rate/20
    setRating(rating)
    console.log(rating)
  }

  //영화정보
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
    <div >
      {loading ? <h1>Loading...</h1> :
      <div className="detailWrapper">
        {movies.map((movie) => (
          <div className="movieDetail" key={movie.Result[0].DOCID}> 
            <div className="movieDTopContainer">
              <div className="movieDInfoTop">
              <img className="movieDImg" src={movie.Result[0].posters.split('|')[0]}></img>
              <div className="movieDInfoRight">
                <h3 className="movieDTitle">{movie.Result[0].title.replace(/!HS/gi,"").replace(/!HE/gi,"")}</h3>
                <p className="movieDInfoRightYGN">{movie.Result[0].prodYear} ▪ {movie.Result[0].genre} ▪ {movie.Result[0].nation}</p>
                <hr align="left" />
                <div className="ratingAvg">
                    <p>평균 ★</p> 
                </div>
                <hr align="left" />
                <div className="rating">
                  <div className="ratingStar">
                    <p>평가하기</p> 
                    <Rating onClick={handleRating} ratingValue={rating} size={`40px`} 
                    // tooltipArray={['1점', '2점', '3점', '4점','5점']}
                    // tooltipDefaultText={'점수'}
                    // showTooltip
                    />
                  </div>
                  <div className="partition"></div>
                  <div className="ratingComment">
                    <img
                      className="commentPenImg"
                      alt="pen"
                      src="images/pen.png"
                    />
                    <p>코멘트</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div className="movieDInfoBottom">
              <h3>기본정보</h3>
              <p>{movie.Result[0].title.replace(/!HS/gi,"").replace(/!HE/gi,"")}</p>
              <p>{movie.Result[0].prodYear} ▪ {movie.Result[0].genre} ▪ {movie.Result[0].nation}</p>
              <p>{movie.Result[0].runtime}분</p>
              <p>{movie.Result[0].rating}</p>
              <p>개봉일: {movie.Result[0].repRatDate}</p>
              <h4>줄거리</h4>
              <p>{movie.Result[0].plots.plot[0].plotText}</p>
              <h4>출연진</h4>
              <p>{movie.Result[0].actors.actor.map(actor => actor.actorNm)}</p>
              {/* {console.log(movie.Result[0].actors.actor.map(actor => actor.actorNm))} */}
            </div>
          </div>
          ))}
      </div>}
      <Footer />
    </div>
    )
    
}
export default Detail;