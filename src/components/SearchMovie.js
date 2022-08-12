import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

function SearchMovie({id, year, title, poster, rating, director, actor}) {
  const tName= JSON.stringify({title}).substring(13).replace(/<[^>]*>?/g, '').replace(/\"/g, '').replace("}","")
  const [isName, setisName] = useState(true);
  const onClickName = (event) => {
    setisName(true)
    // console.log(tName)
  };
  
  return (
    <div className="movie">
      {isName? 
        <Link to={`/${tName}`} onClick={onClickName}>
        <img src={poster} alt={title} titlt={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{
            title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
          }</h3>
        <p className="movie__rating">
          <span>평점</span> {rating}/10
        </p>
        <p className="movie__year">
          <span>개봉일</span> {year}
        </p>
      <p className="movie__director">
        <span>감독</span> {director}
      </p>
      <p className="movie__actor">
        <span>배우</span> {actor}
      </p>
      </div>
      </Link>
      : <h2>error</h2>}

      
      

  </div>
  )
};

SearchMovie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired

};

export default SearchMovie;