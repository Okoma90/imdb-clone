import { useState } from "react";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import imdbLogo from '../../assets/imdb-logo.svg';

const Header = () => {
  
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to="/"><img className='header__icon' src={imdbLogo} alt='imdb-logo'/></Link>
        <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        <Link to="/movies/now_playing" style={{textDecoration: "none"}}><span>Now Playing</span></Link>
      </div>
      <div className="searchForm">
          <form onSubmit={handleSubmit}>
            <input type="text"
              placeholder="Search for movies"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
      </div>
    </div>
  )
}

export default Header;