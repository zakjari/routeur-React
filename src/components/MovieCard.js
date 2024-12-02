import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.name}</h2>
      <Link to={`/movie/${movie.id}`}>Voir les détails</Link>
    </div>
  );
}

export default MovieCard;
