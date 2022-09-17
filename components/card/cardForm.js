import React from "react";
import { useRouter } from "next/router";

const CardForm = ({ movie }) => {
  const router = useRouter();
  return (
    <div className="card-form">
      <figure className="card-form-figure">
        <img className="card-form-image" 
        alt={movie.title.replace(/!HS/gi, "").replace(/!HE/gi, "")}
        onClick={() => router.push(`/detail/${movie.title.replace(/!HS/gi, "").replace(/!HE/gi, "")}`)}
        src={movie.posters 
          ? movie.posters.split('|')[0] 
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EJPWaD_VbJChENOk8Gy-YBAcOcJvKI828A&usqp=CAU"}
        />
        <h4>{movie.title.replace(/!HS/gi, "").replace(/!HE/gi, "")}</h4>
        <div className="card-form-detail">
          <div className="card-year">제작연도: {movie.prodYear}</div>
          <div className="card-genre">장르: {movie.genre}</div>
          <div className="card-rating">{movie.rating}</div>
          <div className="card-nation">{movie.nation} | {movie.runtime}분</div>
        </div>
      </figure>
    </div>
  )
}

export default CardForm;