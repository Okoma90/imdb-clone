import React, { useEffect, useState, useCallback } from "react";
import "./movieDetail.css";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [currentMovieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  const getData = useCallback(() => {
    fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDetail(data);
      });
  }, [id]);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [getData]);
  

  return (
    <div className="movie">
        <div className="movie__intro">
            {currentMovieDetail && currentMovieDetail.backdrop_path && <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`} alt={'Movie backdrop'}/>}
        </div>
        <div className="movie__detail">
            <div className="movie__detailLeft">
                <div className="movie__posterBox">
                    {currentMovieDetail && currentMovieDetail.poster_path && <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`} alt={'Movie poster'}/>}
                </div>
            </div>
            <div className="movie__detailRight">
                <div className="movie__detailRightTop">
                    <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                    <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                    <div className="movie__rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                        <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                    </div>  
                    <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                            ? 
                            currentMovieDetail.genres.map(genre => (
                                <span className="movie__genre" key={genre.id} id={genre.id}>{genre.name}</span>
                            ))
                            : 
                            ""
                        }
                    </div>
                </div>
                <div className="movie__detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                </div>
            </div>
        </div>
        <div className="movie__links">
            <div className="movie__heading">Useful Links</div>
            {
                currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank"  rel="noreferrer" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
            }
            {
                currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
            }
        </div>
        <div className="movie__heading">Production companies</div>
        <div className="movie__production" key="productionCompanies">
            {
                currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                <React.Fragment key={company.id}>
                    {
                        company.logo_path 
                        ?
                        <span className="productionCompanyImage">
                            <img className="movie__productionCompany" src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={'Company logo'} onError={() => {}}/>
                            <span>{company.name}</span>
                        </span>
                        :
                        <span className="productionCompanyImage">
                            <img className="movie__productionCompany" src={`https://upload.wikimedia.org/wikipedia/commons/b/b0/Nologo.svg`} alt={'Company logo'} onError={() => {}}/>
                            <span>{company.name}</span>
                        </span>
                    }
                </React.Fragment>
                ))
            }
        </div>
    </div>
    )
}

export default MovieDetail