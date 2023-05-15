import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Cards from "../../components/card/card";
import './search.css';

const searchURL = 'https://api.themoviedb.org/3/search/movie';

const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);
    }, [query]);


    return (
        <div className="search">
            <h2 className="search__title">
                Search results: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 &&
                    movies.map((movie) => <Cards key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Search;