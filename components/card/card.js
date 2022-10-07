import React from "react";
import { useRouter } from "next/router";

const Card = ({ movie }) => {
  const router = useRouter();
  const title = movie.title.replace(/!HS|!HE/gi, "");
  return (
    <div className="cardForm">
      <figure className="cardForm-figure">
        <img className="cardForm-figure-image" 
        alt={title}
        onClick={() => router.push(`/detail/${title}`)}
        src={movie.posters 
          ? movie.posters.split('|')[0] 
          : "/images/no_image_found.png"}
        />
        <h4 className="cardForm-figure-title" onClick={() => router.push(`/detail/${title}`)}>{title}</h4>
        <div className="cardForm-figure-detail">
          <p className="cardForm-figure-detail-year">제작연도: {movie.prodYear}</p>
          <p className="cardForm-figure-detail-genre">장르: {movie.genre}</p>
          <p className="cardForm-figure-detail-rating">{movie.rating}</p>
          <p className="cardForm-figure-detail-nation">{movie.nation} | {movie.runtime}분</p>
        </div>
      </figure>
    </div>
  )
}

export default Card;