import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./css/Movie.css"

function Movie ({id, year, title, summary, poster, genres}){
  return (
    <div className = "movie">
    <img className="movie__poster" src={poster} alt={title} title ={title}/>
    <div>
      <h3 className="movie__title">{title}</h3>
      <span className="movie__year">{year}</span>
      <ul className="movie__genres">
        {genres.map((genre, index) =>
          <li className="genres__genre" key={index}>{genre}</li>
          )
        }
        {/* map의 각각 item에는 key 값이 필요하다. map 에는 index를 쓸수있다. */}
      </ul>
      <p className="movie__summary">{summary.slice(0, 180)}</p>
    </div>
    </div>
  )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.array.isRequired
}

export default Movie;