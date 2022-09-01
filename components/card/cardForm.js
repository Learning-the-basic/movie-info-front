import React from "react";
import { useRouter } from "next/router";

const CardForm = ({ movie }) => {
  const router = useRouter();

  return (
    <div className="card-form">
      <figure className="card-form-figure" onClick={() => router.push(`/detail/${movie.title}`)}>
        <img className="card-form-image" src={movie.posters} alt={movie.title.replace(/!HS/gi, "").replace(/!HE/gi, "")}/>
        <h4>{movie.title.replace(/!HS/gi, "").replace(/!HE/gi, "")}</h4>
        <div className="card-year">제작연도: {movie.prodYear}</div>
        <div className="card-genre">장르: {movie.genre}</div>
        <div className="card-rating">{movie.rating}</div>
        <div className="card-nation">{movie.nation} | {movie.runtime}분</div>
      </figure>
    </div>
  )
}

export default CardForm;