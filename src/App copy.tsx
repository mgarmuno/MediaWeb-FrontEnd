import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuBar from './components/MenuBar';
import Movies from './pages/Movies';

function App() {
  const messages = [{}, {}];
  const messagesCount = messages.length;

  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
