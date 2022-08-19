import { useState, useEffect } from "react";
import React from 'react';
import moment from 'moment';
import { Link } from "next/link";
import Slider from "react-slick";

//Slick
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className}
         onClick={onClick}>
      <div className="nextButton">
        {/*<img src="/images/next_button.png" alt="next" className="nextButtonG"/>*/}
        <img src="/images/next_button.png" alt="next" className="nextButtonB"/>
      </div>
    </div>

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const RankKofic = () => {
  const KEY1 = "06fe7383576234f02a83e4993c927e1f"  //영화진흥위원회
  const KEY2 = "80HF21BI401E15RFQ193"    //KMDB
  const DATE = moment().subtract(1, 'day').format('YYYYMMDD');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    //KMDB
    const getMovies = async (movie) => {
      const json = await (
        await fetch(
          `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movie.movieNm}&releaseDts=${movie.openDt.replaceAll("-", "")}&ServiceKey=${KEY2}`
        )
      ).json();
      return {
        "title": movie.movieNm,
        "rank": movie.rank,
        "rnum": movie.rnum,
        "openDt": movie.openDt,
        "jsonData": json.Data[0]
      }
    }

    //영화진흥위원회
    const getBoxOffice = async () => {
      const response = await (await (
        await fetch(
          `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY1}&targetDt=${DATE}`
        )
      ).json()).boxOfficeResult.dailyBoxOfficeList;

      const boxOffice = await (response.map((movie) => getMovies(movie)));

      await Promise.all(boxOffice).then((result) => {
        setMovies(result);
        setLoading(false);
      });
    }
    getBoxOffice();
  }, [DATE]);

  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      {loading ? <h1>Loading...</h1> : (
        <div className="rank">
          <h2 className="boxofficeRankNm">박스오피스 순위</h2>
          <Slider {...settings} className="boxofficeRankContainer">
            {movies.map((movie, index) =>
                (
                  <div className="boxofficeRank" key={index}>
                    <div className="movieRank">{movie.rank}</div>
                    <img className="movieImg" alt={movie.title} src={(movie.jsonData.Result==undefined)?'없음':movie.jsonData.Result[0].posters.split('|')[0]}></img>
                    <h4 className="movieNm">{movie.title}</h4>
                    <p className="movieInfo">{(movie.jsonData.Result==undefined)?'':movie.jsonData.Result[0].prodYear} ▪
                      {(movie.jsonData.Result==undefined)?'':movie.jsonData.Result[0].nation}</p>
                  </div>
                )
              )
            }
          </Slider>
        </div>
      )}
    </div>
  );
}

export default RankKofic;
