import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TVShows from './pages/TVShows';
import Books from './pages/Books';
import Movies from './pages/Movies';
import HomePage from './pages/HomePage';
import Anime from './pages/Anime';
import Manga from './pages/Manga';
import MenuBar from './components/MenuBar';

import './App.css';


function App() {
  return (
     <BrowserRouter>
      <MenuBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
