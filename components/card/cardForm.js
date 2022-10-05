import React from "react";
import { useRouter } from "next/router";

const CardForm = ({ movie }) => {
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
        <h4 className="cardForm-figure-title">{title}</h4>
        <div className="cardForm-figure-detail">
          <div className="cardForm-figure-detail-year">제작연도: {movie.prodYear}</div>
          <div className="cardForm-figure-detail-genre">장르: {movie.genre}</div>
          <div className="cardForm-figure-detail-rating">{movie.rating}</div>
          <div className="cardForm-figure-detail-nation">{movie.nation} | {movie.runtime}분</div>
        </div>
      </figure>
    </div>
  )
}

export default CardForm;