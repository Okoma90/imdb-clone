import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList'
import MovieDetail from './pages/movieDetail/movieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/popular/movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/top_rated/movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/upcoming/movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/now_playing/movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/:type" element ={<MovieList/>}></Route>
          <Route path="/*" element={
            <>
              <div className='error'>App is still in development, some RWD need to be done, sorry for the desktop first.</div>
              <img className='blink' src='https://images.emojiterra.com/google/noto-emoji/animated/1f609.webp' alt='blink' />
            </>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;