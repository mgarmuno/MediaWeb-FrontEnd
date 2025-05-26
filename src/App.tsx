import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Anime from './components/Anime';
import Manga from './pages/Manga';
import MenuBar from './components/MenuBar';
import SearchAnime from './pages/SearchAnime';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AnimeDetails from './pages/AnimeDetails';

function App() {
  return (
     <BrowserRouter>
      <MenuBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/searchAnime" element={<SearchAnime/>} />
          <Route path="/animeDetails" element={<AnimeDetails/>} />
          <Route path="/manga" element={<Manga />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
