import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import About from './Pages/About';
import './App.css'; 
function App() {
  return (
    <Router>
      <Navbar /> {/* Affichage de la barre de navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Route "À propos" */}
        <Route path="movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
