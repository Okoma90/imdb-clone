import React, { useCallback, useEffect, useState } from "react";
import Cards from "../card/card";
import "./movieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  const getData = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, [type]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    getData();
  }, [getData, type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type.replace(/_/g, " ") : "popular").toUpperCase()}</h2>


      <div className="list__cards">
        {
          movieList.map(movie => (
            <Cards key={movie.id} movie={movie}/>
          ))
        }
      </div>
    </div>
  )
}

export default MovieList;