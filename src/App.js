import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList'
import MovieDetail from './pages/movieDetail/movieDetail';
import Search from './pages/search/search';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/:category/movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/:type" element ={<MovieList/>}></Route>
          <Route path="search" element={<Search/>}></Route>
          <Route path="search/movie/:id" element={<MovieDetail/>}></Route>
          <Route path="/*" element={
            <>
              <div className='error'>Unfortunately, we don't know such a film, please try with another one</div>
              <img className='blink' src='https://images.emojiterra.com/google/noto-emoji/animated/1f609.webp' alt='blink' />
            </>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;