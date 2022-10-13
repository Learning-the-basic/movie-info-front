import React from "react";
import { useRouter } from "next/router";

const Card = ({ movie }) => {
  const router = useRouter();
  const title = movie.title.replace(/!HS|!HE/gi, "");
  
  const onClick = () => {
    return router.push(`/detail/${title}`)
  }

  return (
    <div className="cardForm">
      <figure className="cardForm-figure">
        <div className="cardForm-figure-container" onClick={onClick}>
          {movie.rank && 
            <div className="rank">{movie.rank}</div>
          }
          <img className="image" 
          alt={title}
          onClick={onClick}
          src={movie.posters 
            ? movie.posters.split('|')[0] 
            : "/images/no_image_found.png"}
          />
          <h4 className="title" onClick={onClick}>{title}</h4>
          <p className="detail">{movie.prodYear} ▪ {movie.nation}</p> 
        </div>
      </figure>
    </div>
  )
}

export default Card;